import { useRecoilValue } from 'recoil'
import { tokenState } from 'states'
import { Request } from 'types/Api'

import api from 'utils/api'

export function useClient() {
  const token = useRecoilValue(tokenState)

  return <T = any>(url: string, config?: Request) => {
    return api<T>(url, { token, method: 'GET', ...config })
      .then(res => Promise.resolve(res))
      .catch(err => Promise.reject(err))
  }
}
