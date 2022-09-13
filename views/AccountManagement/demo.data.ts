import { IAccountManagementDataType, IAccountManagementApiResponse } from '../../dtos/account-management.dto'
const dateObj = new Date()
export const demoDataArray: IAccountManagementDataType = [
  {
    id: Math.random().toString(),
    email: 'Myo',
    name: 'myo',
    created_on: dateObj.getTime().toString(),
    status: 'active',
    updated_on: dateObj.getTime().toString(),
  },

  {
    id: Math.random().toString(),
    email: 'Myo',
    name: 'myo',
    created_on: dateObj.getTime().toString(),
    status: 'active',
    updated_on: dateObj.getTime().toString(),
  },
  {
    id: Math.random().toString(),
    email: 'Myo',
    name: 'myo',
    created_on: dateObj.getTime().toString(),
    status: 'active',
    updated_on: dateObj.getTime().toString(),
  },
  {
    id: Math.random().toString(),
    email: 'Myo',
    name: 'myo',
    created_on: dateObj.getTime().toString(),
    status: 'active',
    updated_on: dateObj.getTime().toString(),
  },
  {
    id: Math.random().toString(),
    email: 'Myo',
    name: 'myo',
    created_on: dateObj.getTime().toString(),
    status: 'active',
    updated_on: dateObj.getTime().toString(),
  },
]

export const dummyData: IAccountManagementApiResponse = {
  code: 0,
  message: '',
  data: {
    account: {
      totalCount: 0,
      countPerPage: 0,
      totalPages: 0,
      currentPage: 0,
      hasPrevPage: true,
      hasNextPage: true,
      prevPage: 0,
      nextPage: 0,
      data: demoDataArray,
    },
  },
}
