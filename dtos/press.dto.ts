import { Response } from 'types/Api'

export type IPressApiData = {
  title: string
}

export type IPressApiResponse = Response<Array<IPressApiData>>
