import React from "react"
import {classNames} from "helpers/classNames/classNames"
import classes from "widgets/PageLoader/ui/PageLoader.module.scss"
import {Spiner} from "shared/ui/Spiner"

interface PageLoaderProps {
  className?: string
}

export function PageLoader ({className}: PageLoaderProps) {
  return (
    <div className={classNames(classes.PageLoader, {}, [className])}>
      <Spiner/>
    </div>
  )
}
