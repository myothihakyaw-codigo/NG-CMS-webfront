import React from 'react'
import { BaseButton } from 'components/Button'
import Text from 'components/Typography/Text'
import { Box, VStack, HStack } from '@chakra-ui/react'
import { Title } from '../Typography/Text'
import { useRouter } from 'next/router'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react'

interface IProps {
  onSave: (val: any) => void
  navigateRoute: string
  triggerModalOpen?: boolean
  closeModal?: () => void
}

export const UnsavedPopupModal: React.FC<IProps> = ({
  onSave,
  navigateRoute,
  triggerModalOpen = false,
  closeModal = () => {},
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const router = useRouter()

  return (
    <>
      <Modal
        closeOnOverlayClick={true}
        blockScrollOnMount={true}
        size={'5xl'}
        isOpen={isOpen || triggerModalOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent borderRadius={'10px'} overflow="hidden">
          <ModalHeader padding={'16px 25px'} bgColor={'#0080FF'}>
            <Text color={'#fff'}>Unsaved Changes</Text>
          </ModalHeader>

          <ModalBody padding={'40px 50px'}>
            <VStack alignItems={'flex-start'}>
              <Title fontSize={'20px'} color="#000">
                Are you sure you want to leave this page?
              </Title>
              <Text color="#000">You have made changes. Do you want to save or discard them?</Text>
            </VStack>
            <HStack justifyContent={'flex-end'} gap="20px" marginTop={'40px'}>
              <Button
                variant={'outline'}
                bgColor="#fff"
                border={'0.5px solid #3c3b3b'}
                onClick={() => closeModal()}
                padding="10"
                borderRadius={'32px'}
                width={'180px'}
              >
                <Text color={'#0080FF'}>Discard Changes</Text>
              </Button>
              <BaseButton onClick={onSave} />
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
