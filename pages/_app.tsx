import ContactForm from 'layouts/ContactForm'
import Footer from 'layouts/Footer'
import Header from 'layouts/Header'
import Script from 'next/script'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { RecoilRoot } from 'recoil'
import 'styles/globals.scss'

const queryClient = new QueryClient({
  defaultOptions: { queries: { keepPreviousData: true, refetchOnWindowFocus: false } },
})

export default function App({ Component, pageProps }: any) {
  return (
    <>
      <Script src="https://cdn.checkout.com/js/framesv2.min.js"></Script>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <Header />
          <ContactForm />
          <Component {...pageProps} />
          {/* <Footer /> */}
        </RecoilRoot>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  )
}
