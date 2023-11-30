import React, {type ButtonHTMLAttributes} from "react"
import {classNames} from "helpers/classNames/classNames"
import classes from "shared/ui/Button/ui/Button.module.scss"
import "shared/ui/Button/ui/Button.scss"
import {type Color} from "shared/config/themeConfig/themeConfig"

export enum VariantButton {
  OUTLINED = "outlined",
  CONTAINED = "contained",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: VariantButton
  color?: Color
  fullWidth?: boolean
}

export function Button ({className, children, fullWidth, color, variant, ...otherProps}: ButtonProps) {
  return (
    <button className={classNames(classes.Button, {fullWidth: !!fullWidth}, [
      variant,
      color, className])}{...otherProps}>
      {children}
    </button>
  )
}
