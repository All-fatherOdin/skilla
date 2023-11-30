import {CallsContext, type ICallsContext} from "pages/Calls/model/providers/CallsProvider/lib/CallsContext"
import {useContext} from "react"

export function useCalls (): ICallsContext {
  const params = useContext(CallsContext)
  return params
}
