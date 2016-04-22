import * as React from "react";
import * as ReactDOM from "react-dom";
import * as _ from "lodash";
import {VBox, HBox} from "../react-ui/FlexBox";
import ResizingDiv from "../react-ui/ResizingDiv";
import ReactUtils from "../utils/ReactUtils";
import StatefulTextField from "../ui/StatefulTextField";
import WeaveTree from "../ui/WeaveTree";
import FixedDataTable from "../tools/FixedDataTable";
import {IColumnTitles} from "../tools/FixedDataTable";
import Tabs from "../react-ui/Tabs";
import Input from "../semantic-ui/Input";
import MenuButton from '../react-ui/MenuButton';
import ToolsMenu from "../menus/ToolsMenu";

import WeaveAPI = weavejs.WeaveAPI;
import LinkableWatcher = weavejs.core.LinkableWatcher;
import IDataSource = weavejs.api.data.IDataSource;
import WeaveRootDataTreeNode = weavejs.data.hierarchy.WeaveRootDataTreeNode;
import IWeaveTreeNode = weavejs.api.data.IWeaveTreeNode;
import IAttributeColumn = weavejs.api.data.IAttributeColumn;
import IQualifiedKey = weavejs.api.data.IQualifiedKey;
import IColumnReference = weavejs.api.data.IColumnReference;
import ColumnUtils = weavejs.data.ColumnUtils;

export const PREVIEW = "preview";
export const METADATA = "metadata";
export const BROWSE = "browse";
export type View = typeof PREVIEW | typeof METADATA | typeof BROWSE;

export interface IDataSourceEditorProps {
	dataSource: IDataSource;
	toolsMenu: ToolsMenu;
};

export interface IDataSourceEditorState {
	selectedNode?: IWeaveTreeNode;
	showPreviewView?: boolean;
};

export default class DataSourceEditor extends React.Component<IDataSourceEditorProps, IDataSourceEditorState> 
{
	dataSourceWatcher:LinkableWatcher = Weave.disposableChild(this, new LinkableWatcher(IDataSource, null, this.forceUpdate.bind(this)));
	columnWatcher:LinkableWatcher = Weave.disposableChild(this, new LinkableWatcher(IAttributeColumn, null, this.forceUpdate.bind(this)));
	protected enablePreview:boolean = true;
	private tableContainer:VBox;
	private tableContainerElement:HTMLElement;
	protected tree:WeaveTree;
	protected editorButtons:Map<React.ReactChild, Function>;

	constructor(props:IDataSourceEditorProps)
	{
		super(props);
		this.componentWillReceiveProps(props);
		this.state = {
			selectedNode: props.dataSource.getHierarchyRoot(),
			showPreviewView: false
		}
	}
	
	componentWillReceiveProps(props:IDataSourceEditorProps)
	{
		this.dataSourceWatcher.target = props.dataSource;
	}
	
	get column():IAttributeColumn
	{
		return this.columnWatcher.target as IAttributeColumn;
	}
	
	get editorFields():[React.ReactChild, React.ReactChild][]
	{
		return [
			[
				<span>{Weave.lang("Label")}</span>,
				<Input type="text" style={{width: "100%", userSelect: false}}
								   disabled={true}
								   title="Renaming data sources is not supported yet"
								   value={this.props.dataSource.getLabel()}/>
			]
		];
	}
	/*
	shouldComponentUpdate()
	{
		return Weave.detectChange(this, this.column);
	}
	*/
	renderFields():JSX.Element
	{
		let dataSource = this.props.dataSource;
		
		var tableStyles = {
			table: { width: "100%", fontSize: "inherit"},
			td: [
				{ textAlign: "right", whiteSpace: "nowrap", paddingRight: 8},
				{ paddingBottom: 8, width: "100%", paddingLeft: 8}
			]
		};

		return ReactUtils.generateTable(null, this.editorFields, tableStyles);
	}
	
	showColumns(selectedItems:IWeaveTreeNode[])
	{
		this.setState({
			selectedNode: selectedItems && selectedItems.length && selectedItems[0]
		});
	}

	updateColumnTarget(selectedItems:IWeaveTreeNode[])
	{
		var ref = selectedItems && selectedItems.length && Weave.AS(selectedItems[0], IColumnReference);
		if (ref)
		{
			var meta = ref.getColumnMetadata();
			this.columnWatcher.target = ref.getDataSource().getAttributeColumn(meta);
		} else
		{
			// clear column if the tree selection was removed
			this.columnWatcher.target = null;
		}
	}
	
	componentWillUpdate()
	{
		if (this.tableContainer)
			this.tableContainerElement = ReactDOM.findDOMNode(this.tableContainer) as HTMLElement;
	}

	renderPreviewTable():JSX.Element
	{
		if (!this.column)
			return null;


		var rows = ColumnUtils.getRecords({
			id: IQualifiedKey,
			value: this.column
		}, null, String);
		
		rows = rows.map((row) => {
			return {
				id: row.id.localName,
				value: row.value
			}
		});
		
		var keyType = this.column.getMetadata("keyType");
		var dataType = this.column.getMetadata("dataType");
		var columnIds = ["id", "value"];
		var columnTitles:IColumnTitles = {id: Weave.lang("Key ({0})", keyType), value: Weave.lang("Value ({0})", dataType)};
		return (
			<VBox style={{flex: rows.length ? 1 : 0}} ref={(c:VBox) => this.tableContainer = c}>
				<span style={{marginBottom: 5}}>{Weave.lang("Selected column has {0} records", rows.length)}</span>
				{
					this.tableContainerElement &&
					<FixedDataTable rows={rows} 
								 	columnIds={columnIds} 
								 	idProperty="id"
								 	showIdColumn={true}
								 	initialColumnWidth={this.tableContainerElement.clientWidth / 2}
								 	columnTitles={columnTitles}/>
				}
			</VBox>
		)
	}
	
	renderBrowseView():JSX.Element
	{
		let root = this.props.dataSource.getHierarchyRoot();
	
		var nodes = this.state.selectedNode && this.state.selectedNode.getChildren();
		weavejs.data.ColumnUtils.firstDataSet = nodes && nodes.filter(node => Weave.IS(node, IColumnReference)) as any;
	
		return (
			<VBox style={{flex: 1}}>
				<HBox className="weave-padded-hbox" style={{flex: 1, border: "none"}}>
					<VBox style={{flex: 1, overflow: 'auto'}}>
						<WeaveTree
							root={this.props.dataSource.getHierarchyRoot()}
							hideLeaves={true}
							initialSelectedItems={[this.props.dataSource.getHierarchyRoot()]}
							onSelect={(selectedItems) => this.showColumns(selectedItems)}
						/>
					</VBox>
					<VBox className="weave-padded-vbox" style={{flex: 1, overflow: 'auto'}}>
						{
							this.props.toolsMenu
								?	<MenuButton menu={ this.props.toolsMenu.getVisualizationItems() } style={{width: "100%"}} showIcon={false}>
										<i className="fa fa-bar-chart fa-fw" style={{paddingRight: 25}}/>
										{Weave.lang('Create a visualization')}
									</MenuButton>
								: 	null
						}
						<WeaveTree
							root={this.state.selectedNode}
							hideRoot={true}
							hideBranches={true}
							onSelect={(selectedItems) => this.updateColumnTarget(selectedItems)}
						/>
		    			{ this.renderPreviewTable() }
					</VBox>
				</HBox>
			</VBox>
		);
	}
	
	renderConfigureView():JSX.Element
	{
		let root = this.props.dataSource.getHierarchyRoot();
		// <label style={ { fontWeight: "bold" } }> { Weave.lang("Edit {0}", this.props.dataSource.getLabel()) } </label>
		return (
			<VBox className="weave-padded-vbox weave-container" style={ {flex: 1, border:"none"} }>
				{
					this.renderFields()
				}
			</VBox>
		);
	}
	
	renderPreviewView():JSX.Element
	{
		// delay the callbacks on the selected column
		// Weave.getCallbacks(this.column).delayCallbacks(); doesn't work
		return <div/>;
		/*
		var leaves = this.parentNode && this.parentNode.getChildren().filter((n) => !n.isBranch());
		if (!leaves)
			return;
		var columns:IAttributeColumn[] = [];
		for (var leaf of leaves)
		{
			var columnRef = Weave.AS(leaf, IColumnReference);
			if (columnRef)
				columns.push(columnRef.getDataSource().getAttributeColumn(columnRef.getColumnMetadata()));
		}
		
		var names:string[] = columns.map(column => column.getMetadata("title"));
		var format:any = _.zipObject(names, columns);
		var columnTitles = _.zipObject(names, names);
		
		var rows = ColumnUtils.getRecords(format, null, String);
		
		return (
			<VBox>
				<FixedDataTable rows={rows} 
								columnIds={names} 
								idProperty="id"
								showIdColumn={true}
								columnTitles={columnTitles as any}/>
			</VBox>
		);
		*/
	}
	
	render():JSX.Element
	{
		var tabs = new Map<string, JSX.Element>()
			.set("Configure", this.renderConfigureView())
			.set("Browse", this.renderBrowseView());

		let root = this.props.dataSource.getHierarchyRoot();

		if (this.state.showPreviewView)
		{
			tabs.set("Preview", this.renderPreviewView());
		}
		
		var activeTabIndex = 0;
		
		if (root.getChildren() && root.getChildren().length)
		{
			activeTabIndex = 1;
		}

		return (
			<Tabs labels={Array.from(tabs.keys())} activeTabIndex={activeTabIndex} tabs={Array.from(tabs.values())}/>
		);
	}
};
