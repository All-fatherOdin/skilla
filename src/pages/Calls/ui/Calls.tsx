import React, {useEffect} from "react"
import {classNames} from "helpers/classNames/classNames"
import classes from "./Calls.module.scss"
import {CallsTable} from "widgets/CallsTable"
import {useCalls} from "pages/Calls"
import {Select} from "shared/ui/Select"

interface CallsProps {
  className?: string
}

export function Calls ({className}: CallsProps) {
  const {getCalls, setInOutFilterValue, inOutFilter, inOutFilterOptions} = useCalls()
  useEffect(() => {
    getCalls?.()
  }, [])
  return (
    <div className={classNames(classes.Calls, {}, [className])}>
      <div className={classes.filtersContainer}>
        <Select
          value={inOutFilter}
          onChange={(value) => setInOutFilterValue?.(value)}
          options={inOutFilterOptions as string[]}
        />
      </div>
      <CallsTable />
    </div>
  )
}
