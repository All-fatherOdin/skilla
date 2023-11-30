import {createContext} from "react"
import {type getCallsProps, type ICall, type inOutFilterName} from "pages/Calls/model/types/CallsTypes"
import {type IGetRecordApiProps} from "entities/Record"
import {type IRecordData} from "entities/Record/model/types/recordTyps"

export interface ICallsContext {
  calls: ICall[]
  getCalls?: (params?: getCallsProps) => void
  setInOutFilterValue?: (value: string) => void
  inOutFilter: inOutFilterName
  inOutFilterOptions: inOutFilterName[]
  getCallRecord?: (params: IGetRecordApiProps) => void
  getRecordById?: (id: number) => string
  records: IRecordData[]
}

export const CallsContext = createContext<ICallsContext>({
  calls: [],
  inOutFilterOptions: [],
  inOutFilter: "Все звонки",
  records: []
})
