import React from "react"
import {classNames} from "helpers/classNames/classNames"
import classes from "./Page404.module.scss"

interface Page404Props {
  className?: string
}

export function Page404 ({className}: Page404Props) {
  return (
    <div className={classNames(classes.Page404, {}, [className])}>
      <h1 className={classNames(classes.title, {}, [classes.text])}>
         404
      </h1>
      <h2 className={classNames(classes.subtitle, {}, [classes.text])}>
        Page not found
      </h2>
    </div>
  )
}
