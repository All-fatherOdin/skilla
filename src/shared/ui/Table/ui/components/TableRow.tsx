import classes from "shared/ui/Table/ui/Table.module.scss"
import React, {type ReactElement} from "react"
import {type ITable} from "shared/ui/Table/ui/Table"

interface ITableRow<TRowsData> extends Pick<ITable<TRowsData>, "columns"> {
  data: TRowsData
}

type TValueType = ReactElement | string | number | null

function TableRow<TRowsData> ({columns, data}: ITableRow<TRowsData>) {
  return (
        <tr className={classes.row}>
            {
                columns.map(({name, propName, cellFn}) => {
                  const dataValue = propName ? data[propName] : null
                  let value: TValueType = null
                  if (cellFn) {
                    value = cellFn(data)
                  } else if (typeof dataValue === "string" || typeof dataValue === "number") {
                    value = dataValue
                  }
                  return <td
                        key={name}
                        className={classes.cell}
                    >
                        <div className={classes.tableCellContent}>
                            {value}
                        </div>
                    </td>
                })}
        </tr>
  )
}

export default TableRow
