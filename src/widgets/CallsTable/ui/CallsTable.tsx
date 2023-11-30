import React, {useMemo} from "react"
import {Table, type TTableColumns} from "shared/ui/Table"
import {type ICall, useCalls} from "pages/Calls"
import {CallStatus} from "widgets/CallStatus/ui/CallStatus"
import moment from "moment"
import {Avatar} from "shared/ui/Avatar"
import classes from "./CallsTable.module.scss"

interface CallsTableProps {
  className?: string
}

export function CallsTable ({className}: CallsTableProps) {
  const {calls, records, getRecordById} = useCalls()

  const columns = useMemo<TTableColumns<ICall>>(() => [
    {
      name: "Тип",
      cellFn: (data) => <CallStatus status={data.status} inout={data.in_out}/>
    },
    {
      name: "Время",
      cellFn: (data) => moment(data.date).format("HH:mm")
    },
    {
      name: "Сотрудник",
      cellFn: data => <Avatar src={data.person_avatar}/>
    },
    {
      name: "Звонок",
      propName: "from_number"
    },
    {
      name: "Источник",
      propName: "source"
    },
    {
      name: "Длительность",
      cellFn: (data) => {
        let url
        if (data.record) {
          url = getRecordById?.(data.id)
        }
        return url ? <audio controls={true} src={url} className={classes.player}></audio> : moment(data.time, "X").format("mm:ss")
      }
    }
  ], [records])

  return (
    <Table<ICall>
      columns={columns}
      rows={calls}
    />
  )
}
