import * as React from "react";
import * as weavejs from "weavejs";
import * as _ from "lodash";
import {Weave} from "weavejs";

import HBox = weavejs.ui.flexbox.HBox;
import VBox = weavejs.ui.flexbox.VBox;

import LinkableBoolean = weavejs.core.LinkableBoolean;
import LinkableString = weavejs.core.LinkableString;
import ColumnDataFilter = weavejs.data.key.ColumnDataFilter;
import IAttributeColumn = weavejs.api.data.IAttributeColumn;
import LinkableVariable = weavejs.core.LinkableVariable;
import ILinkableObjectWithNewProperties = weavejs.api.core.ILinkableObjectWithNewProperties;
import IQualifiedKey = weavejs.api.data.IQualifiedKey;
import DataTypes = weavejs.api.data.DataTypes;
import ColumnMetadata = weavejs.api.data.ColumnMetadata;
import ColumnUtils = weavejs.data.ColumnUtils;
import AbstractFilterEditor from "weaveapp/editor/AbstractFilterEditor";
import {FilterEditorProps} from "weaveapp/editor/AbstractFilterEditor";
import {FilterOption} from "weaveapp/editor/AbstractFilterEditor";
import MenuLayoutComponent from "weaveapp/ui/MenuLayoutComponent";
import {LAYOUT_LIST, LAYOUT_COMBO, LAYOUT_VSLIDER, LAYOUT_HSLIDER, LAYOUT_CHECKBOXLIST} from "weaveapp/ui/MenuLayoutComponent";

export default class DiscreteValuesDataFilterEditor extends AbstractFilterEditor
{
	static WEAVE_INFO = Weave.setClassInfo(DiscreteValuesDataFilterEditor, {
		id: "weavejs.editor.DiscreteValuesDataFilterEditor",
		interfaces: [ILinkableObjectWithNewProperties]
	});

	static get OPTIONS():string[]{
		return [LAYOUT_LIST,
			LAYOUT_COMBO,
			LAYOUT_VSLIDER,
			LAYOUT_HSLIDER,
			LAYOUT_CHECKBOXLIST];
	}

	public layoutMode:LinkableString = Weave.linkableChild(this, new LinkableString(LAYOUT_LIST, this.verifyLayoutMode));
	public values:LinkableVariable = Weave.linkableChild(this, LinkableVariable);

	constructor(props:FilterEditorProps)
	{
		super(props);
		this.options = [];
	}



	verifyLayoutMode(value:string):boolean
	{
		return DiscreteValuesDataFilterEditor.OPTIONS.indexOf(value) >= 0;
	}

	get deprecatedStateMapping():Object
	{
		return [super.deprecatedStateMapping, {
			"layoutMode": this.layoutMode
		}];
	}

	getChoices():FilterOption[]
	{
		var dataType = DataTypes.getClass(this.column.getMetadata(ColumnMetadata.DATA_TYPE) as DataType);
		this.options = ColumnUtils.getRecords(
			{ value: this.column, label: this.column },
			this.column.keys,
			{ value: dataType, label: String }
		);
		return _.sortByOrder(_.uniq(this.options, "value"), ["value"], ["asc"]);
	}

	render():JSX.Element
	{
		if (Weave.detectChange(this, this.column))
		{
			this.options = this.getChoices();
		}
		let values:any = this.filter ? this.filter.values.state : [];

		return(<MenuLayoutComponent options={ this.options }
									multiple={ true }
									displayMode={ this.layoutMode.value }
									onChange={ this.onChange.bind(this) }
									selectedItems={ values }
		/>);
	}
}
