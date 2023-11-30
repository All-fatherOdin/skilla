export type inOutFilterName = "Все звонки" | "Входящие" | "Исходящие"

export enum callFilters {
  INOUT = "in_out"
}
export type TCallFilters = Record<string, string | number>

export enum inOut {
  INCOMING,
  OUTGOING
}
export enum callStatus {
  SUCCESS = "Дозвонился",
  FAIL = "Недозвонился"
}

export enum callsSortParams {
  DURATION = "duration",
  DATE = "date"
}

export interface getCallsReturn {
  total: number
  results: ICall[]
}

export interface getCallsProps {
  filters?: TCallFilters
  sortParams?: callsSortParams
}

export interface ICall {
  id: number
  source: string
  status: callStatus
  from_number: string
  date: string
  time: number
  in_out: inOut
  record: string
  partnership_id: string
  person_avatar: string
}
