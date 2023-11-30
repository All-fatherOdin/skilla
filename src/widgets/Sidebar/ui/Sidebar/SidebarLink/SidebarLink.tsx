import React, {type FC, type SVGProps} from "react"
import {classNames} from "helpers/classNames/classNames"
import classes from "./SidebarLink.module.scss"
import {NavLink, useLocation} from "react-router-dom"

export interface SidebarLinkProps {
  className?: string
  path: string
  name: string
  Icon: FC<SVGProps<SVGSVGElement>>
}

export function SidebarLink ({className, path, name, Icon}: SidebarLinkProps) {
  const location = useLocation()
  const isSelected = path && location.pathname.includes(path)
  return (
    <NavLink to={path}>
      <div className={classNames(classes.SidebarLink, {}, [className, isSelected ? classes.selected : undefined])}>
        <Icon/>
        <p className={classes.name}>{name}</p>
        {
          isSelected ?
            <div className={classes.selectedIcon}>

            </div> :
            null
        }
      </div>
    </NavLink>
  )
}
