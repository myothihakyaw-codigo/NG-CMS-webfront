import React, { useState, useEffect, useCallback } from 'react'

import {
  useTable,
  useSortBy,
  Column,
  ColumnInstance,
  HeaderGroup,
  TableRowProps,
  UseTableRowProps,
  Cell,
  Row,
} from 'react-table'
// import './CustomTable.scss'
import {
  Spinner,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  HStack,
  Box,
} from '@chakra-ui/react'
import { ChevronDownIcon, ChevronUpIcon, ArrowUpDownIcon } from '@chakra-ui/icons'

import { useRouter } from 'next/router'
import Text from 'components/Typography/Text'

interface Props {
  isAuditTable?: boolean
  columns: any[]
  onSort?: (args: any) => void
  customSort?: boolean
  data?: any
  single?: boolean
  isLoading?: boolean
  pagination?: any
  onPagination?: (page: any) => void
  hiddenColumns?: string[]
  defaultSort?: any[]
  children?: React.ReactNode
  className?: string
}

interface SortBy {
  id: string
  desc?: boolean | undefined
}

const RenderTable: React.FC<Props> = ({
  isAuditTable = false,
  columns = [],
  customSort = false,
  data = [],
  pagination = {},
  single = false,
  onSort = args => null,
  children,
  isLoading = false,
  onPagination = () => null,
  defaultSort = [],
  hiddenColumns = [],
  className = '',
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { sortBy },
  }: any = useTable(
    {
      columns,
      data,
      manualSortBy: true,
      initialState: {
        hiddenColumns,
      },
    },
    useSortBy
  )
  const [sorted, setSorted] = useState([])

  const router = useRouter()
  const query = router.query
  const location = router.asPath

  function handlePaginationChanges(value: any) {
    if (!isAuditTable) {
      router?.push({
        pathname: location,
        search: new URLSearchParams({
          ...query,
          CurrentPage: value,
        }).toString(),
      })

      onPagination(value)
    } else {
      onPagination(value)
    }
  }

  const handleSortingChanges = useCallback((sortBy: Array<SortBy>) => {
    const sortingParams = sortBy.reduce((a: any, b: any) => {
      const { id, desc } = b

      a['SortBy'] = id
      a['IsDesc'] = !!desc

      return a
    }, {})

    router?.push({
      pathname: location,
      search: new URLSearchParams({
        ...query,
        ...sortingParams,
      }).toString(),
    }),
      undefined,
      {
        shallow: true,
      }
  }, []) // !ALERT: Becareful here, need to research more about how this dependency work

  useEffect(() => {
    if (customSort) {
      onSort(sortBy)
    }
    handleSortingChanges(sortBy)
  }, [sortBy, handleSortingChanges])

  return (
    <TableContainer width="100%">
      <Table variant="simple" width={'inherit'} className={`CustomTable border-0 ${className}`} {...getTableProps()}>
        <Thead>
          {headerGroups.map((headerGroup: HeaderGroup, idx: number) => (
            <Tr key={idx} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: ColumnInstance, idx: number) => (
                <Th
                  key={idx + Math.random()}
                  {...column?.getHeaderProps(column.getSortByToggleProps())}
                  className={`text-muted text-nowrap`}
                  fontSize="12px"
                  height={'50px'}
                  color="#000"
                  fontWeight={'700'}
                >
                  <Box display={'flex'} gap="7px" alignItems={'center'}>
                    {column.render('Header')}
                    {column.canSort && (
                      <>
                        {query?.SortBy && query?.SortBy === column.id ? (
                          <span>
                            {query?.IsDesc === 'true' ? (
                              <ChevronDownIcon width={'20px'} height={'15px'} />
                            ) : (
                              <ChevronUpIcon width={'20px'} height={'15px'} />
                            )}
                          </span>
                        ) : (
                          <>
                            <ArrowUpDownIcon width={'10px'} height="11px" />
                          </>
                        )}
                      </>
                    )}
                  </Box>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        {data.length === 0 && (
          <Tbody {...getTableBodyProps()}>
            <Tr>
              <Td colSpan={columns.length}>
                <div className="d-flex align-items-center justify-content-center w-100 py-5">
                  <Text>There is no data yet</Text>
                </div>
              </Td>
            </Tr>
          </Tbody>
        )}
        {data.length > 0 && (
          <Tbody {...getTableBodyProps()}>
            {rows.map((row: Row, idx: number) => {
              prepareRow(row)
              return (
                <Tr key={idx} {...row.getRowProps()} className="border-bottom py-4">
                  {row.cells.map((cell: Cell, index: number) => (
                    <Td key={index} {...cell.getCellProps()} className="py-3 align-middle">
                      {cell.render('Cell')}
                    </Td>
                  ))}
                </Tr>
              )
            })}
          </Tbody>
        )}
      </Table>
    </TableContainer>
  )
}

const CustomTable: React.FC<Props> = props => {
  if (props.isLoading) {
    return <Spinner />
  }

  return <RenderTable {...props} />
}
export default CustomTable
