import {CallsContext} from "pages/Calls/model/providers/CallsProvider/lib/CallsContext"
import React, {type PropsWithChildren, useMemo, useState} from "react"
import {
  type getCallsProps,
  type ICall,
  type inOutFilterName
} from "pages/Calls/model/types/CallsTypes"
import {getCallsList} from "pages/Calls/model/sevices/getCallsList"
import {getRecord} from "entities/Record"
import {type IGetRecordProps, type IRecordData} from "entities/Record/model/types/recordTyps"

function CallsProvider ({children}: PropsWithChildren) {
  const [calls, setCalls] = useState<ICall[]>([])
  const [records, setRecords] = useState<IRecordData[]>([])
  const [inOutFilter, setInOutFilterFilter] = useState<inOutFilterName>("Все звонки")

  const inOutFilterValues = {
    "Все звонки": null,
    Входящие: 0,
    Исходящие: 1
  }

  const inOutFilterOptions: inOutFilterName[] = ["Все звонки", "Входящие", "Исходящие"]

  const getRecordById = (id: number) => {
    const recordData = records.find(el => el.id === id)
    return recordData ? recordData.url : ""
  }

  const getCallRecord = (params: IGetRecordProps) => {
    getRecord(params).then((res) => {
      const url = URL.createObjectURL(res)
      setRecords(prevState => [...prevState, {
        id: params.id,
        url
      }])
    }).catch((err => { console.log(err) }))
  }
  const getCallRecords = (calls: ICall[]) => {
    const promises: Array<Promise<Blob>> = []
    const callIds: number[] = []
    calls.forEach(call => {
      if (call.record) {
        callIds.push(call.id)
        promises.push(getRecord({
          partnership_id: call.partnership_id,
          record: call.record
        }))
      }
    })
    if (callIds.length) {
      Promise.all(promises).then(responsesArr => {
        const recordsData = callIds.map((id, index) => {
          return {
            id,
            url: URL.createObjectURL(responsesArr[index])
          }
        })
        setRecords(recordsData)
      }).catch((err) => { console.log(err) })
    }
  }

  const getCalls = (params?: getCallsProps) => {
    getCallsList(params)
      .then((res) => {
        getCallRecords(res.results)
        setCalls(res?.results || [])
      })
      .catch((error) => { console.log(error) })
  }

  const setInOutFilterValue = (value: string) => {
    const inout = inOutFilterValues[value as keyof typeof inOutFilterValues]
    if (value !== inOutFilter) {
      getCalls(inout === null ?
        undefined :
          {
            filters: {
              in_out: inout
            }
          }
      )
    }
    setInOutFilterFilter(value as inOutFilterName)
  }

  const defaultProps = useMemo(() => ({
    calls,
    getCalls,
    setInOutFilterValue,
    inOutFilter,
    inOutFilterOptions,
    getCallRecord,
    getRecordById,
    records
  }),
  [calls, inOutFilter, records]
  )
  return (
    <CallsContext.Provider value={defaultProps}>
      {children}
    </CallsContext.Provider>
  )
}

export default CallsProvider
