import { atom, AtomEffect } from 'recoil'
import { recoilPersist } from 'recoil-persist'
import { Popup } from 'types'

const { persistAtom } = recoilPersist()

const persistAtomEffect: AtomEffect<any> = param => {
  param.getPromise(isClientSideState).then(() => persistAtom(param))
}

export const popupState = atom<Popup>({ key: 'popup', default: {} })

export const tokenState = atom<string>({ key: 'token', default: '', effects_UNSTABLE: [persistAtomEffect] })

export const isClientSideState = atom({ key: 'client-side', default: false })

export const isContactOpenState = atom<boolean>({ key: 'is_contact_open', default: false })
