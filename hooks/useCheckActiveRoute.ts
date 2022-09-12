import { sideMenuRoutes } from '../layouts/SideMenu/SideMenu.routes'
import { useRecoilState } from 'recoil'
import { currentActiveRoute } from '../states/recoilStates'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const useCheckActiveRoute = () => {
  const [activeRoute, setActiveRoute] = useRecoilState(currentActiveRoute)
  const allSideMenuRoutes = sideMenuRoutes.map(menu => menu?.route.replace('/', '')) // Remove the '/' from route to store pure route name

  const router = useRouter()
  useEffect(() => {
    try {
      const basePath = router?.asPath.split('/')[1]
      if (allSideMenuRoutes.includes(basePath)) {
        setActiveRoute('/' + basePath)
      }
    } catch (err: unknown) {
      // INFO: declare unknown because the typescript cannot typecast the catch err variable
      console.log('An error has occured during route switching ', (err as Error)?.message)
    }
  }, [router?.asPath])

  return { activeRoute, setActiveRoute }
}

export default useCheckActiveRoute
