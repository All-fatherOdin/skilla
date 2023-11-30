import React from "react"
import "shared/ui/Spiner/ui/spiner.scss"

export function Spiner () {
  return (
    <div className={"lds-spinner"}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
  )
}
