import {type IGetRecordApiProps} from "entities/Record/model/types/recordTyps"

export async function getRecord (params: IGetRecordApiProps) {
  const url = `https://api.skilla.ru/mango/getRecord?record=${params.record}&partnership_id=${params.partnership_id}`
  const response = await fetch(url, {
    headers: {
      Authorization: "Bearer testtoken"
    },
    method: "POST"
  })
  if (!response.ok) {
    throw new Error("error")
  }

  return await response.blob()
}
