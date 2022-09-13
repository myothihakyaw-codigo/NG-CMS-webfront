import React from 'react'
import Form from '../../../components/Form/Form'
import { VStack, HStack, Button, Box, SimpleGrid } from '@chakra-ui/react'
import Text from '../../../components/Typography/Text'
import { Input } from '../../../components/Form/Inputs/index'
import Select from '../../../components/Form/Select/index'

interface IProps {
  data?: any
}

const AccountSettingForm: React.FC<IProps> = ({ data }) => {
  function handleSubmit() {
    console.log('Form submitted!')
  }
  return (
    <Form
      defaults={{
        ...data,
      }}
    >
      {({ values }) => {
        return (
          <Box>
            <SimpleGrid columns={2} spacing={'25px'}></SimpleGrid>
            <VStack width={'100%'} alignItems="flex-start" gap={'25px'}>
              <HStack gap={'39px'}>
                <VStack alignItems={'flex-start'}>
                  <Text>First Name*</Text>
                  <Input name="firstName" />
                </VStack>
                <VStack alignItems={'flex-start'}>
                  <Text>Last Name*</Text>
                  <Input name="lastName" />
                </VStack>
              </HStack>
              <VStack alignItems={'flex-start'}>
                <Text>Email Address*</Text>
                <Input name="email" />
              </VStack>
            </VStack>
            <Button
              onClick={handleSubmit}
              padding="20px"
              type="submit"
              marginTop={'70px'}
              width={'160px'}
              bgColor="#37A2FE"
              borderRadius={'20px'}
            >
              <Text color="#fff">Save Changes</Text>
            </Button>
          </Box>
        )
      }}
    </Form>
  )
}

export default AccountSettingForm
