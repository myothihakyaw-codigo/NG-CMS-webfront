import { AxiosRequestConfig } from 'axios'

export type Request = AxiosRequestConfig & {
  type?: 'form' | 'csv' | 'multipart'
  token?: string
  payload?: any
}

export type ResponseError = {
  code: number
  message: string
}

export type Response<T = any> = {
  data: T
  message: string
  code: number
}

export type defaultResponseTypes<T = any> = {
  totalCount: number
  countPerPage: number
  totalPages: number
  currentPage: number
  hasPrevPage: boolean
  hasNextPage: boolean
  prevPage: number
  nextPage: number
  data: T
}
