import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { RecoilRoot } from 'recoil'
import 'styles/globals.scss'
import { ChakraProvider, Flex, HStack, VStack, StackDivider } from '@chakra-ui/react'
import MainPanel from '../layouts/MainPanel/MainPanel'
import Header from '../layouts/Header/Header'
import theme from 'styles/theme'
import '@fontsource/lato'

const queryClient = new QueryClient({
  defaultOptions: { queries: { keepPreviousData: true, refetchOnWindowFocus: false } },
})

export default function App({ Component, pageProps }: any) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <ChakraProvider theme={theme}>
            <VStack height={'100vh'}>
              <Header />
              <MainPanel>
                <Component {...pageProps} />
              </MainPanel>
            </VStack>
          </ChakraProvider>
        </RecoilRoot>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  )
}
