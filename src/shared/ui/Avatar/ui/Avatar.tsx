import React from "react"
import {classNames} from "helpers/classNames/classNames"
import classes from "./Avatar.module.scss"

interface AvatarProps {
  className?: string
  src: string
}

export function Avatar ({className, src}: AvatarProps) {
  return src ?
    <img alt={"avatar"} src={src} className={classNames(classes.Avatar, {}, [className])}/> :
    "-"
}
