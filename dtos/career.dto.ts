import { Response } from 'types/Api'

export type ICareerApiData = {
  department: string
  careers: {
    jobTitle: string
  }[]
}

export type ICareerApiResponse = Response<ICareerApiData>
