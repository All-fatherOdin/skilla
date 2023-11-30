import React, {type ReactElement} from "react"
import classes from "shared/ui/Table/ui/Table.module.scss"
import TableHead from "shared/ui/Table/ui/components/TableHead"
import TableBody from "shared/ui/Table/ui/components/TableBody"

export interface ITableData<TRowsData> {
  name: string
  cellFn?: (value: TRowsData) => string | ReactElement
  propName?: keyof TRowsData
}

export type TTableColumns<TRowsData> = Array<ITableData<TRowsData>>

export interface ITable<TRowsData> {
  columns: TTableColumns<TRowsData>
  rows: TRowsData[]
}

export function Table<TRowsData> ({columns, rows}: ITable<TRowsData>) {
  return (
    <div className={classes.container}>
      <table className={classes.table}>
        <TableHead columns={columns}/>
        <TableBody<TRowsData>
          columns={columns}
          rows={rows}
        />
      </table>
    </div>
  )
}
