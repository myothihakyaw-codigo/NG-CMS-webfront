import { Box, Center, VStack } from '@chakra-ui/react'
import React from 'react'
import Text from '../../../../components/Typography/Text'
import { InfoIcon } from '@chakra-ui/icons'
import Link from 'next/link'

interface Props {
  name: string
  navigateRoute: string
  icon?: React.ReactSVGElement
}

const Card: React.FC<Props> = ({ name, icon, navigateRoute }) => {
  return (
    <Box w="300px" h="162px" bg="#fff" boxShadow={'xl'} cursor="pointer" borderRadius={10}>
      <Link href={'/' + navigateRoute}>
        <VStack gap={20} justifyContent={'center'} alignItems="center">
          <Box>
            <InfoIcon w={6} h={6} color="blackAlpha.400" />
          </Box>
          <Text>{name}</Text>
        </VStack>
      </Link>
    </Box>
  )
}

export default Card
