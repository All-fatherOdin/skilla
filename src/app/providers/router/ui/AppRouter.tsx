import {Route, Routes} from "react-router-dom"
import {routeConfig} from "shared/config/routeConfig/routeConfig"

const AppRouter = () => {
  return (
    <Routes>
      {
        routeConfig.map(({path, element}) => (
          <Route
            key={path}
            element={<div className={"page-content"}>
              {element}
            </div>}
            path={path}
          />))
      }
    </Routes>
  )
}

export default AppRouter
