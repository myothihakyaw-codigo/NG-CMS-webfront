import React from 'react'
import Text from 'components/Text'
import { Box } from '@chakra-ui/react'
import { Title } from 'components/Typography/Text'
import dynamic from 'next/dynamic'

const DynamicAccountPage = dynamic(() => import('../../views/AccountManagement/AccountManagement'), {
  ssr: false,
})

export default function AccountsManagementPage() {
  return <DynamicAccountPage />
}
