import React from 'react'
import { NextSeo } from 'next-seo'
import { ComponentMainSeo } from '../../generated'

interface ISeoSingle {
  seo: ComponentMainSeo
}

const SeoSingle: React.FC<ISeoSingle> = ({ seo }) => {
  return (
    <NextSeo
      title={seo.metaTitle}
      description={seo.metaDescription}
      additionalMetaTags={[
        {
          name: 'keywords',
          content: seo.keywords,
        },
      ]}
      openGraph={{
        title: seo.metaTitle,
        description: seo.metaDescription,
        images: [
          {
            url: seo.metaImage!.data!.attributes!.url,
            // width: 400,
            // height: 400,
            // alt: seo.metaImage!.data!.attributes!.alternativeText || '',
          },
        ],
      }}
    />
  )
}

export default SeoSingle
