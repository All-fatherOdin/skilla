import React from "react"
import {classNames} from "helpers/classNames/classNames"
import classes from "./Sidebar.module.scss"
import Logo from "shared/assets/sidebar/logo.svg"
import {SidebarLink, type SidebarLinkProps} from "./SidebarLink/SidebarLink"
import summarize from "shared/assets/sidebar/links/summarize.svg"
import orders from "shared/assets/sidebar/links/orders.svg"
import mails from "shared/assets/sidebar/links/mails.svg"
import calls from "shared/assets/sidebar/links/calls.svg"
import counterParties from "shared/assets/sidebar/links/counterParties.svg"
import documents from "shared/assets/sidebar/links/documents.svg"
import actors from "shared/assets/sidebar/links/actors.svg"
import reports from "shared/assets/sidebar/links/reports.svg"
import base from "shared/assets/sidebar/links/base.svg"
import settings from "shared/assets/sidebar/links/settings.svg"

interface SidebarProps {
  className?: string
}

export function Sidebar ({className}: SidebarProps) {
  const linksData: SidebarLinkProps[] = [
    {
      name: "Итоги",
      path: "",
      Icon: summarize
    },
    {
      name: "Заказы",
      path: "",
      Icon: orders
    },
    {
      name: "Сообщения",
      path: "",
      Icon: mails
    },
    {
      name: "Звонки",
      path: "/calls",
      Icon: calls
    },
    {
      name: "Контрагенты",
      path: "",
      Icon: counterParties
    },
    {
      name: "Документы",
      path: "",
      Icon: documents
    },
    {
      name: "Исполнители",
      path: "",
      Icon: actors
    },
    {
      name: "Отчеты",
      path: "",
      Icon: reports
    },
    {
      name: "База знаний",
      path: "",
      Icon: base
    },
    {
      name: "Настройки",
      path: "",
      Icon: settings
    }
  ]

  return (
    <div className={classNames(classes.Sidebar, {}, [className])}>
      <div className={classes.logoContainer}>
        <Logo/>
      </div>
      {
        linksData.map((data) => <SidebarLink key={data.name} {...data}/>)
      }
    </div>
  )
}
