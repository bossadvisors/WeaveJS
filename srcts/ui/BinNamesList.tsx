import * as React from "react";
import FixedDataTable from "../tools/FixedDataTable";
import {IFixedDataTableProps, IColumnTitles, IRow} from "../tools/FixedDataTable";

import AbstractBinningDefinition = weavejs.data.bin.AbstractBinningDefinition;

export interface BinNamesListProps {
	binningDefinition:AbstractBinningDefinition;
	showHeaderRow?:boolean;
}
export default class BinNamesList extends React.Component<BinNamesListProps, {}>{
	
	constructor(props:BinNamesListProps)
	{
		super(props);
	}
	
	static defaultProps:BinNamesListProps = {
		showHeaderRow: true,
		binningDefinition: null
	};
	
	render()
	{
		var binDef:AbstractBinningDefinition = this.props.binningDefinition;
		var rows:IRow[] = [];
		if(binDef)
		{
			rows = binDef.getBinNames().map((binName, index) => {
				return {
					id: index,
					value: binName
				} as IRow;
			});
		}
		
		var columnTitles:IColumnTitles = {
			id: "Key",
			value: "Bin names"
		};
		
		var props:IFixedDataTableProps = {
			columnIds: ["id", "value"],
			idProperty: "id",
			rows,
			columnTitles,
			showIdColumn: false,
			allowResizing: false,
			evenlyExpandRows: true
		}

		if(!this.props.showHeaderRow) props.headerHeight = 0;

		return (
			<FixedDataTable {...props}/>
		);
	}
}