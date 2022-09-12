import { Response } from 'types/Api'

export interface IAccountSettingsApiData {
  userName: string
}

export type IAccountSettingApiResponse = Response<IAccountSettingsApiData>
