import "./styles/index.scss"
import {classNames} from "helpers/classNames/classNames"
import {AppRouter} from "app/providers/router"
import {Appbar} from "widgets/Appbar"
import {Sidebar} from "widgets/Sidebar"

export function App () {
  return (
    <div className={classNames("app theme")}>
      <Sidebar/>
      <div className={"page-wrapper"}>
        <Appbar/>
        <AppRouter/>
      </div>
    </div>
  )
}
