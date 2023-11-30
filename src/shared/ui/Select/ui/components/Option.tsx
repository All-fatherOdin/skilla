import React, {type MouseEventHandler, useRef} from "react"
import classes from "shared/ui/Select/ui/select.module.scss"

interface OptionProps {
  value: string
  onClick: (value: string) => void
  active: boolean
}
function Option ({value, onClick, active}: OptionProps) {
  const optionRef = useRef<HTMLLIElement | null>(null)

  const handleClick = (): MouseEventHandler<HTMLLIElement> => {
    return (e) => {
      e.stopPropagation()
      onClick(value)
    }
  }

  return (
        <li
            ref={optionRef}
            className={classes.selectOption}
            value={value}
            onClick={handleClick()}
            tabIndex={0}
        >
            {value}
          {active && <div className={classes.selectedIcon}/>}
        </li>
  )
}

export default Option
