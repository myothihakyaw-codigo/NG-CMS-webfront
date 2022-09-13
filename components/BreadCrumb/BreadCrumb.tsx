import React from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from '@chakra-ui/react'
import Text from 'components/Typography/Text'
import { sideMenuRoutes } from '../../layouts/SideMenu/SideMenu.routes'
import { useRouter } from 'next/router'

interface IProps {
  currentPathName: string
}

const BreadCrumb: React.FC<IProps> = ({ currentPathName }) => {
  const router = useRouter()
  const baseRoutes = router.asPath?.split('/') // This baseRoutes will be changed automatically upon the route change
  const navigatePaths = baseRoutes.slice(1) // remove first item bc its empty

  const handleRenderRouteName = (route: string, index: number) => {
    if (index === navigatePaths.length - 1) {
      // check if the path is current path
      return currentPathName
    }
    return sideMenuRoutes?.find(menuRoute => menuRoute?.route === '/' + route)?.name
  }

  return (
    <Breadcrumb separator=">">
      {navigatePaths?.map((route, index) => (
        <BreadcrumbItem key={index} isCurrentPage={index === navigatePaths.length - 1}>
          <BreadcrumbLink href={'/' + route}>
            <Text color={'#000'}>{handleRenderRouteName(route, index)}</Text>
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  )
}

export default BreadCrumb
