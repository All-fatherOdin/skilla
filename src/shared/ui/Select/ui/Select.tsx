import React, {type MouseEventHandler, useEffect, useRef, useState} from "react"
import classes from "shared/ui/Select/ui/select.module.scss"
import Option from "shared/ui/Select/ui/components/Option"
import {useResize} from "helpers/useResize/useResize"
import BackdropIcon from "../../../assets/icons/dropdown.svg"

interface ISelectProps {
  value: string
  options: string[]
  onChange: (value: string) => void
  width?: string
}

export function Select ({options, value, onChange, width}: ISelectProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const rootRef = useRef<HTMLDivElement | null>(null)

  const handleOptionClick = (value: string) => {
    onChange(value)
    setIsOpen(false)
  }
  const [contentLeft, setContentLeft] = useState<number | undefined>(0)
  const handleSelectClick: MouseEventHandler<HTMLDivElement> = () => {
    setContentLeft(rootRef.current?.getBoundingClientRect().left)
    setIsOpen((prev) => !prev)
  }
  const windowWidth = useResize()

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false)
    }
  }, [windowWidth])

  return (
        <>
            <div
                className={classes.select}
                style={{width: width ?? "auto"}}
                ref={rootRef}
                data-is-active={isOpen}
                data-mode={""}
                onClick={handleSelectClick}
            >
                <div
                    className={classes.selectValue}
                    data-selected={!!value}
                    role='button'
                >
                    {value}
                </div>
              <BackdropIcon/>
            </div>
            {isOpen && (
                <div
                    className={classes.menuBackdrop}
                    onClick={() => { setIsOpen(false) }}
                >
                    <div
                        className={classes.selectMenu}
                        style={{
                          top: (rootRef.current?.offsetTop ?? 0) + (rootRef.current?.clientHeight ?? 0) + 12,
                          left: contentLeft,
                          width: rootRef.current?.clientWidth
                        }}
                        onClick={(e) => { e.stopPropagation() }}
                    >
                        {options.map((option) => (
                            <Option
                                key={"selectOption" + option}
                                value={option}
                                onClick={handleOptionClick}
                                active={value === option}
                            />
                        ))}
                    </div>
                </div>
            )}
        </>
  )
}
