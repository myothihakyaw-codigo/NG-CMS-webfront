import { Response, defaultResponseTypes } from 'types/Api'
import { IAccountSettingApiResponse } from './account-settings.dto'

export type IAccountManagementDataType = {
  id: string
  name: string
  email: string
  status: string
  created_on: string
  updated_on: string
}[]

export type IAccountManagementApiData = defaultResponseTypes<IAccountManagementDataType>

export type AccountApiData = {
  account: IAccountManagementApiData
}

export type IAccountManagementApiResponse = Response<AccountApiData>
