import React from "react"
import classes from "shared/ui/Table/ui/Table.module.scss"
import {type ITable} from "shared/ui/Table/ui/Table"

function TableHead<TRowsData> ({columns}: Pick<ITable<TRowsData>, "columns">) {
  return (
    <thead>
    <tr className={classes.head}>
      {columns.map(({name}) => {
        return (
          <th
            key={name}
            scope="col"
            className={classes.headCell}
          >
            <div className={classes.tableCellContent}>
              {name}
            </div>
          </th>
        )
      })}
    </tr>
    </thead>
  )
}

export default TableHead
