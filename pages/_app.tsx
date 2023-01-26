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
import App, { AppProps } from 'next/app'
import client from '../graphql/apollo-client'
import { useEffect } from 'react'
import { Router } from 'next/router'
import NProgress from 'nprogress'
import { ApolloProvider } from '@apollo/client'
import { Provider } from 'react-redux'
import { wrapper } from '../store'
import { getCart } from '../store/slices/cartSlice'
import { setGlobalData } from '../store/slices/appSlice'

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
    <Provider store={store}>
      <ApolloProvider client={client}>
        <ChakraProvider theme={theme}>
          <Layout>
            <Component {...props.pageProps} />
          </Layout>
        </ChakraProvider>
      </ApolloProvider>
    </Provider>
  )
}

MyApp.getInitialProps = wrapper.getInitialAppProps(({ dispatch }) => async (context) => {
  const ctx = await App.getInitialProps(context)
  const { req, res } = context.ctx
  const { data } = await client.query<InitialDataQuery>({
    query: InitialDataDocument,
  })
  await dispatch(setGlobalData(data))
  await dispatch(getCart({ req, res }))

  return { ...ctx }
})

export default MyApp
