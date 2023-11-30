import React from "react"
import {callStatus, inOut} from "pages/Calls"
import IncomingBlue from "shared/assets/calls/incoming-blue.svg"
import IncomingRed from "shared/assets/calls/incoming-red.svg"
import OutgoingGreen from "shared/assets/calls/outgoing-green.svg"
import OutgoingRed from "shared/assets/calls/outgoing-red.svg"

interface CallStatusProps {
  className?: string
  inout: inOut
  status: callStatus
}

export function CallStatus ({className, status, inout}: CallStatusProps) {
  return inout === inOut.OUTGOING ?
      (status === callStatus.SUCCESS ?
      <OutgoingGreen/> :
      <OutgoingRed/>) :
      (status === callStatus.SUCCESS ?
      <IncomingBlue/> :
      <IncomingRed/>)
}
