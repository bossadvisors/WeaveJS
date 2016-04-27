import * as React from "react";
import * as _ from "lodash";
import {HBox, VBox} from "../react-ui/FlexBox";
import {ButtonGroupBar} from "../react-ui/ButtonGroupBar";
import WeaveTree from "./WeaveTree";
import HierarchyExplorer from "./HierarchyExplorer";
import SelectableAttributeComponent from "../ui/SelectableAttributeComponent";
import IWeaveTreeNode = weavejs.api.data.IWeaveTreeNode;
import ILinkableHashMap = weavejs.api.core.ILinkableHashMap;
import WeaveRootDataTreeNode = weavejs.data.hierarchy.WeaveRootDataTreeNode;
import ReferencedColumn = weavejs.data.column.ReferencedColumn;
import IAttributeColumn = weavejs.api.data.IAttributeColumn;
import IColumnReference = weavejs.api.data.IColumnReference;
import LinkableHashMap = weavejs.core.LinkableHashMap;
import IColumnWrapper = weavejs.api.data.IColumnWrapper;
import ColumnUtils = weavejs.data.ColumnUtils;
import HierarchyUtils = weavejs.data.hierarchy.HierarchyUtils;
import IDataSource = weavejs.api.data.IDataSource;
import ColumnMetadata = weavejs.api.data.ColumnMetadata;
import SmartComponent from "./SmartComponent";
import DynamicComponent from "./DynamicComponent";
import ControlPanel from "./ControlPanel";
import Button from "../semantic-ui/Button";

export interface IAttributeSelectorProps
{
    attributeName? : string;
    attributes:Map<string,(IColumnWrapper|ILinkableHashMap)>;
}

export interface IAttributeSelectorState
{
    selectedAttributeName?:string;
}

export default class AttributeSelector extends SmartComponent<IAttributeSelectorProps,IAttributeSelectorState>
{
    private rootNode: IWeaveTreeNode;

    constructor(props:IAttributeSelectorProps)
    {
        super(props);        

        this.state = {
            selectedAttributeName: this.props.attributeName
        };

        this.componentWillReceiveProps(props);
    }

    private get usingHashMap():boolean
    {
        return Weave.IS(this.selectedAttribute, ILinkableHashMap);
    }

	private get selectedAttribute()
	{
		return this.props.attributes.get(this.state.selectedAttributeName);
	}

    private get selectedColumnRefs():IColumnReference[]
    {
        if (!this.hierarchyExplorer || !this.hierarchyExplorer.selectedItems) return [];
        return this.hierarchyExplorer.selectedItems.map((value)=>Weave.AS(value, IColumnReference));
    }

    componentWillReceiveProps (nextProps:IAttributeSelectorProps)
    {
		let nextAttribute = nextProps.attributes.get(this.state.selectedAttributeName);
        let attribute = this.props.attributes.get(this.props.attributeName);
		
        if((nextAttribute != attribute) || !this.rootNode)
        {
            /* Update callbacks on attribute */
            Weave.getCallbacks(attribute).removeCallback(this, this.forceUpdate);
            Weave.getCallbacks(nextAttribute).addGroupedCallback(this, this.forceUpdate);

            /* Update rootNode and callbacks on rootnode */
            if (this.rootNode) Weave.getCallbacks(this.rootNode).removeCallback(this, this.forceUpdate);
            this.rootNode = new weavejs.data.hierarchy.WeaveRootDataTreeNode(Weave.getRoot(nextAttribute));
            Weave.getCallbacks(this.rootNode).addGroupedCallback(this, this.forceUpdate);
        }
    }

    componentWillUpdate(nextProps:IAttributeSelectorProps, nextState:IAttributeSelectorState)
    {
        if (this.state.selectedAttributeName != nextState.selectedAttributeName || this.props.attributes != nextProps.attributes)
        {
            let selectedAttribute = nextProps.attributes.get(nextState.selectedAttributeName);
            let previousSelectedAttribute = this.props.attributes && this.props.attributes.get(this.state.selectedAttributeName);
            if (Weave.isLinkable(previousSelectedAttribute))
            {
                Weave.getCallbacks(previousSelectedAttribute).removeCallback(this, this.forceUpdate);
            }
            
            if (Weave.isLinkable(selectedAttribute))
            {
                Weave.getCallbacks(selectedAttribute).addGroupedCallback(this, this.forceUpdate);
            }
        }
    }

    handleButtonBarClick = (event:React.MouseEvent, name:string = null, index:number = null):void=>
    {
        let selectedAttribute:IColumnWrapper|ILinkableHashMap = this.props.attributes.get(name);

        this.setState({
            selectedAttributeName: name
        });
    };

    addSelected =():void=>
    {
        for(let ref of this.selectedColumnRefs){
            var meta = ref && ref.getColumnMetadata();
            if (meta)
            {
                var lhm = Weave.AS(this.selectedAttribute, ILinkableHashMap);
                if (lhm)
                    lhm.requestObject(null, weavejs.data.column.ReferencedColumn).setColumnReference(ref.getDataSource(), meta);
            }
        }
    };

    handleSelectAll=():void=>{
        if (this.hierarchyExplorer.selectedFolder)
        {
            this.hierarchyExplorer.selectedItems = this.hierarchyExplorer.selectedFolder.getChildren();
        }
    };

    setColumn=(selectedItems:Array<IWeaveTreeNode>):void =>{

        var ref = Weave.AS(selectedItems[0], weavejs.api.data.IColumnReference);
        if (ref && !this.usingHashMap)
        {
            var meta = ref.getColumnMetadata();
            if (meta)
            {
                let dc = ColumnUtils.hack_findInternalDynamicColumn(this.selectedAttribute as IColumnWrapper);
                if (dc)
                    dc.requestLocalObject(ReferencedColumn).setColumnReference(ref.getDataSource(), meta);
            }
        }
        if (this.usingHashMap)
        {
            this.forceUpdate();
        }
    };

    getTreeNode (colWrapper:IColumnWrapper)
    {
        let dsources = ColumnUtils.getDataSources(colWrapper) as IDataSource[];
        let dsource = dsources[0];
        let metadata = ColumnMetadata.getAllMetadata(colWrapper);
        return dsource && dsource.findHierarchyNode(metadata);
    }

    getSelectedTreeNodes():IWeaveTreeNode[] {
        let selectedAttribute = this.props.attributes.get(this.state.selectedAttributeName);
        let wrappers:IColumnWrapper[] = [];

        if(this.usingHashMap)
        {
            wrappers = (selectedAttribute as ILinkableHashMap).getObjects() as ReferencedColumn[];
        }
        else // we're a single attribute column.
        {
            wrappers.push(selectedAttribute as IColumnWrapper);//single entry
        }

        return wrappers.map(this.getTreeNode).filter(_.identity);
    };



    static openInstance(attributeName:string, attributes:Map<string, IColumnWrapper|ILinkableHashMap>):ControlPanel{
        let weave = Weave.getWeave(attributes.get(attributeName));
        return ControlPanel.openInstance<IAttributeSelectorProps>(weave, AttributeSelector,
                                        {title:Weave.lang('Attribute Selector')},
                                        {attributeName, attributes});
    }
    
    private selectableAttributeComponentKey = 0;
    private hierarchyExplorer: HierarchyExplorer;
    render():JSX.Element
    {
        let controllerStyle:React.CSSProperties = {
            justifyContent: 'flex-end',
            background: "#F8F8F8",
            padding: "4px",
            marginLeft: "0"
        };

        let attributeNames: string[] = Array.from(this.props.attributes.keys());

        // weave tree contains absolute child inside so its important to have dispaly flex wrapper to pass on width height
        return (
            <VBox className="weave-padded-vbox" style={ {flex:1} }>
				{
					(attributeNames.length > 1)
					?	<ButtonGroupBar activeButton={ this.props.attributeName }
							items={ attributeNames }
							clickHandler={this.handleButtonBarClick}
						/>
					:	null
				}
				<SelectableAttributeComponent key={this.selectableAttributeComponentKey++}
						style={{flex: null}}
						attributeName={ this.state.selectedAttributeName }
						attributes={ this.props.attributes}
					/>
                <HierarchyExplorer ref={(c) => {if (c) this.hierarchyExplorer = c} } root={this.rootNode} onSelect={this.setColumn} initialSelectedItems={this.getSelectedTreeNodes()}/>
				{
					this.usingHashMap
					?
						<HBox className="weave-padded-hbox" style={ controllerStyle } >
                            <Button disabled={!(this.hierarchyExplorer && this.hierarchyExplorer.selectedFolder)} onClick={this.handleSelectAll}>Select All</Button>
							<Button disabled={!(this.hierarchyExplorer && this.hierarchyExplorer.selectedItems.length)} onClick={this.addSelected}>Add Selected</Button>
						</HBox>
					:	null
				}
				{/*
					Weave.IS(this.state.selectedAttribute, ILinkableHashMap)
					?	<VBox>
							<SelectableAttributesList label={ this.state.attributeName } showAsList={true} columns={ this.state.selectedAttribute as ILinkableHashMap}></SelectableAttributesList>
						</VBox>
					:	null
				*/}
			</VBox>
		);
	};
}
