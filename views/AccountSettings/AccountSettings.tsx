import React from 'react'
import { Box, VStack, Button } from '@chakra-ui/react'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import { useRouter } from 'next/router'
import { Title } from '../../components/Typography/Text'
import Text from 'components/Text'
import Form from '../../components/Form/Form'
import { UnsavedPopupModal } from 'components/modal/BaseModal'
import { useEffect, useState, useLayoutEffect, useRef } from 'react'
import { useRecoilValue } from 'recoil'
import { currentActiveRoute } from '../../states/recoilStates'
import useTrackActiveRouteChange from '../../hooks/useTrackRouteChange'
import AccountSettingForm from './components/AccountSettingsForm'

const AccountSettingsPage = () => {
  const router = useRouter()

  const [openModal, setOpenModal] = useState<boolean>(false)
  //   const _ = useTrackActiveRouteChange(() => setOpenModal(true))
  return (
    <Box padding={'35px'}>
      <VStack gap={'10px'} alignItems="flex-start" marginBottom={'50px'}>
        <Text>Account Settings</Text>
        <Title>Edit Account Settings</Title>
      </VStack>
      <Button onClick={() => setOpenModal(true)}>Trigger Modal</Button>
      <UnsavedPopupModal
        onSave={() => console.log('is saved')}
        navigateRoute={router?.asPath}
        triggerModalOpen={openModal}
        closeModal={() => setOpenModal(false)}
      />
      <AccountSettingForm data={{}} />
    </Box>
  )
}

export default AccountSettingsPage
