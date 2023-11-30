export interface IGetRecordApiProps {
  record: string
  partnership_id: string
}

export interface IGetRecordProps extends IGetRecordApiProps {
  id: number
}

export interface IRecordData {
  url: string
  id: number
}
