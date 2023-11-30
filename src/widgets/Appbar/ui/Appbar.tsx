import classes from "widgets/Appbar/ui/Appbar.module.scss"
import {classNames} from "helpers/classNames/classNames"

interface AppbarProps {
  className?: string
}

export function Appbar ({className}: AppbarProps) {
  return (
    <div className={classNames(classes.appbar, {}, [className])}>

    </div>
  )
}
