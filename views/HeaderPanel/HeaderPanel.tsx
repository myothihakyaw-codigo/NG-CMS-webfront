import React from 'react'
import { Box, HStack, VStack } from '@chakra-ui/react'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import { Title } from '../../components/Typography/Text'

interface IProps {
  FormComponent?: React.ReactNode
  title: string
}

const HeaderPanel: React.FC<IProps> = ({ FormComponent, title }) => {
  return (
    <HStack width={'100%'} padding={'34px 40px'} justifyContent="space-between">
      <VStack alignItems={'flex-start'} gap="6px">
        <BreadCrumb currentPathName="Account Management" />
        <Title>{title}</Title>
      </VStack>
      <Box>{FormComponent && FormComponent}</Box>
    </HStack>
  )
}

export default HeaderPanel
