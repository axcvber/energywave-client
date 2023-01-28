import React from 'react'
import { DefaultSeo } from 'next-seo'
import { useAppSelector } from '../../store/hooks'
import { useRouter } from 'next/router'

const GlobalSeo = () => {
  const { initialData } = useAppSelector((state) => state.app)
  const globalData = initialData?.global?.data?.attributes
  const router = useRouter()

  return (
    <>
      <DefaultSeo
        titleTemplate={`%s | ${globalData!.siteName}`}
        defaultTitle={globalData!.defaultTitle}
        description={globalData!.defaultDescription}
        canonical={globalData!.canonical + router.asPath}
        additionalMetaTags={[
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0',
          },
          {
            property: 'google',
            content: 'notranslate',
          },
          {
            name: 'google-site-verification',
            content: '',
          },
        ]}
        additionalLinkTags={[
          {
            rel: 'shortcut icon',
            href: globalData!.favicon.data!.attributes!.url,
          },
        ]}
        openGraph={{
          type: 'website',
          locale: 'uk',
          url: globalData!.canonical + router.asPath,
          site_name: globalData!.siteName,
          images: [
            {
              url: globalData!.defaultGraphImage.data!.attributes!.url,
              // width: 400,
              // height: 400,
              // alt: 'logo',
            },
          ],
        }}
      />
    </>
  )
}

export default GlobalSeo
