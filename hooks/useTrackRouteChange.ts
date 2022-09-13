import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { currentActiveRoute } from '../states/recoilStates'

const useTrackActiveRouteChange = (onRouteChange: () => void) => {
  const router = useRouter()
  const currentPath = router?.asPath
  const currentRoute = useRecoilValue(currentActiveRoute)
  //   let initialRender = true
  useEffect(() => {
    console.log('This render!!')
    if (currentPath === router?.asPath) {
      return
    } else {
      onRouteChange()
    }
  }, [currentRoute, router?.asPath])

  return {}
}

export default useTrackActiveRouteChange
