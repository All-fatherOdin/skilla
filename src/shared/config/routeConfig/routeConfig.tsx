import {Page404} from "pages/Page404"
import {CallsPage} from "pages/Calls"

export enum AppRoutes {
  CALLS = "calls",
  NOT_FOUND = "not_found"
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.CALLS]: "/calls",
  [AppRoutes.NOT_FOUND]: "*"
}

export const routeConfig = [
  {
    path: RoutePath.calls,
    element: <CallsPage/>
  },

  {
    path: RoutePath.not_found,
    element: <Page404/>
  }
]
