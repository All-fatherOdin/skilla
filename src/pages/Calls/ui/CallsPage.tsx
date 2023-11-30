import {Calls} from "pages/Calls/ui/Calls"
import CallsProvider from "pages/Calls/model/providers/CallsProvider/ui/CallsProvider"

export function CallsPage () {
  return <CallsProvider>
    <Calls/>
  </CallsProvider>
}
