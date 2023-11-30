import {callsSortParams, type getCallsProps, type getCallsReturn} from "pages/Calls/model/types/CallsTypes"

export async function getCallsList (params?: getCallsProps): Promise<getCallsReturn> {
  const {sortParams, filters} = params ?? {}

  let url = "https://api.skilla.ru/mango/getList" + `?sort_by=${sortParams ?? callsSortParams.DURATION}`
  if (filters) {
    for (const key in filters) {
      url += `&${key}=${filters[key]}`
    }
  }
  const response = await fetch(url, {
    headers: {
      Authorization: "Bearer testtoken"
    },
    method: "POST"
  })
  if (!response.ok) {
    throw new Error("error")
  }

  return await response.json()
}
