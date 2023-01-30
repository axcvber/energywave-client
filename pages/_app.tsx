import '@fontsource/exo-2/400.css'
import '@fontsource/exo-2/500.css'
import '@fontsource/exo-2/600.css'
import '@fontsource/exo-2/700.css'
import '@fontsource/exo-2/800.css'
import 'nprogress/nprogress.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import '../styles/react-medium-zoom.css'

import { ChakraProvider } from '@chakra-ui/react'
import theme from '../styles/theme'
import Layout from '../components/layout/Layout'
import { InitialDataDocument, InitialDataQuery } from '../generated'
import App, { AppContext, AppProps } from 'next/app'
import client from '../graphql/apollo-client'
import { useEffect } from 'react'
import { Router } from 'next/router'
import NProgress from 'nprogress'
import { ApolloProvider } from '@apollo/client'
import { Provider } from 'react-redux'
import { wrapper } from '../store'
import { getCart, setCart } from '../store/slices/cartSlice'
import { setGlobalData } from '../store/slices/appSlice'
import Script from 'next/script'
import { getCookie } from 'cookies-next'
import { cookies } from 'next/headers'

NProgress.configure({ showSpinner: false })

const MyApp = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest)

  useEffect(() => {
    const handleRouteStart = () => NProgress.start()
    const handleRouteDone = () => NProgress.done()

    Router.events.on('routeChangeStart', handleRouteStart)
    Router.events.on('routeChangeComplete', handleRouteDone)
    Router.events.on('routeChangeError', handleRouteDone)

    return () => {
      Router.events.off('routeChangeStart', handleRouteStart)
      Router.events.off('routeChangeComplete', handleRouteDone)
      Router.events.off('routeChangeError', handleRouteDone)
    }
  }, [])

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GTAG}`} strategy='afterInteractive' />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.GTAG}');
        `}
      </Script>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <ChakraProvider theme={theme}>
            <Layout>
              <Component {...props.pageProps} />
            </Layout>
          </ChakraProvider>
        </ApolloProvider>
      </Provider>
    </>
  )
}

MyApp.getInitialProps = wrapper.getInitialAppProps(({ dispatch }) => async (context: AppContext) => {
  const { req, res } = context.ctx

  let result = []
  const localData: any = getCookie('CARD', { req, res })
  if (localData && localData.length > 0) {
    result = JSON.parse(localData)
  }

  console.log('localData', localData)

  await dispatch(setCart(result))

  // dispatch(getCart({ req, res }))
  const ctx = await App.getInitialProps(context)
  const { data } = await client.query<InitialDataQuery>({
    query: InitialDataDocument,
  })
  await dispatch(setGlobalData(data))

  return { ...ctx }
})

export default MyApp
