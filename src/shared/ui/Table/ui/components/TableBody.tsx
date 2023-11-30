import React from "react"
import TableRow from "shared/ui/Table/ui/components/TableRow"
import {type ITable} from "shared/ui/Table/ui/Table"

function TableBody<TRowsData> ({columns, rows}: ITable<TRowsData>) {
  return (
    <tbody>
    {
      rows.map((data, i) => <TableRow<TRowsData>
        key={i}
        data={data}
        columns={columns}
      />)}
    </tbody>
  )
}

export default TableBody
