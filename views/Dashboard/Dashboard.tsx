import React from 'react'
import { Box, VStack, HStack, SimpleGrid } from '@chakra-ui/react'
import Text from '../../components/Typography/Text'
import { Title } from '../../components/Typography/Text'
import Card from './components/Card/Card'

const DashBoard: React.FC = ({}) => {
  // FIX: need to make that padding value DRY
  return (
    <Box padding={'35px 47px'}>
      <HStack alignItems={'center'} gap="5" marginBottom={'50px'}>
        <VStack alignItems={'flex-start'}>
          <Title>Hello Admin Name!</Title>
          <Title>What will you like to do?</Title>
        </VStack>
        <Title fontSize={'40px'}>&#128075;</Title>
      </HStack>
      <SimpleGrid columns={3} spacing={10}>
        <Card name="Account Management" navigateRoute="accounts" />
        <Card name="Career" navigateRoute="career" />
        <Card name="Press" navigateRoute="press" />
      </SimpleGrid>
    </Box>
  )
}

export default DashBoard
