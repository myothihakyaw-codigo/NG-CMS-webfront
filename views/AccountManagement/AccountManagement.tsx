import React from 'react'
import { VStack, Divider, StackDivider, Box } from '@chakra-ui/react'
import HeaderPanel from '../HeaderPanel/HeaderPanel'
import Text from '../../components/Typography/Text'
import HeaderPanelForm from '../HeaderPanel/components/HeaderPanelForm'
import CustomTable from '../../components/CustomTable/CustomTable'
import { dummyData } from './demo.data'
import { decorateTableProps } from '../../utils/misc'
import { useMemo } from 'react'
import DropDownMenu from './components/DropDownMenu'

const AccountManagement = ({}) => {
  const decoratedColumns: Array<any> = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Date Created',
        accessor: 'created_on',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },

      {
        Header: 'Actions',
        id: 'action',
        disableSortBy: true,
        Cell: ({ row }: any) => {
          return (
            <DropDownMenu
              editRoute=""
              status={row?.original?.status}
              deleteAction={() => console.log('Deleted -> id : ', row?.original?.id)}
            />
          )
        },
      },
    ],
    []
  )

  return (
    <VStack alignItems={'flex-start'} divider={<StackDivider borderWidth={'1px'} borderColor={'#575757'} />}>
      <HeaderPanel
        title="Account Management"
        FormComponent={
          <HeaderPanelForm searchAction={() => console.log('Searhced')} createBtnName="Create new account" />
        }
      />
      <Box width="100%" padding={'0px 20px'}>
        <CustomTable columns={decoratedColumns} {...decorateTableProps(dummyData?.data?.account)} />
      </Box>
    </VStack>
  )
}

export default AccountManagement
