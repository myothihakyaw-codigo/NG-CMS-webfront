import { atom, AtomEffect } from 'recoil'
import { recoilPersist } from 'recoil-persist'
import { Popup } from 'types'
import { AccountManagementDataTypes } from 'types/account-management.types'

const { persistAtom } = recoilPersist() // what is this recoil persist library do ?

/** @TO_REFERENCE  */
const persistAtomEffect: AtomEffect<any> = param => {
  param.getPromise(isClientSideState).then(() => persistAtom(param))
}

export const tokenState = atom<string>({ key: 'token-state', default: '', effects_UNSTABLE: [persistAtomEffect] })
export const isClientSideState = atom({ key: 'client-side-state', default: false })

// export const popupState = atom<Popup>({ key: 'popup', default: {} })

// export const isContactOpenState = atom<boolean>({ key: 'is_contact_open', default: false })

export const currentActiveRoute = atom<string>({
  key: 'current-active-route-state',
  default: '',
})

export const AccountManagementData = atom<Array<AccountManagementDataTypes>>({
  key: 'account-mgt-data-state',
  default: [],
})
