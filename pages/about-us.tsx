import { Box, Container, Stack } from '@chakra-ui/react'
import { NextPage } from 'next'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import React from 'react'
import Heading from '../components/layout/Heading'
import Markdown from '../components/layout/Markdown'
import SeoSingle from '../components/seo/SeoSingle'
import { AboutPage, GetAboutPageDocument, GetAboutPageQuery } from '../generated'
import client from '../graphql/apollo-client'

interface IAboutUsPage {
  pageData: AboutPage
}

const AboutUsPage: NextPage<IAboutUsPage> = ({ pageData }) => {
  return (
    <>
      <SeoSingle seo={pageData.seo} />
      <Container>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: 3, md: 6 }} mt={{ base: 4, md: 6 }}>
          <Stack width={{ base: '100%', md: '50%' }} spacing={3}>
            <Heading title={pageData.title} withLine />
            <Markdown content={pageData.content} />
          </Stack>

          <Box
            sx={{
              width: { base: '100%', md: '50%' },
            }}
          >
            <Image
              priority
              width={500}
              height={350}
              src={pageData.image.data!.attributes!.url}
              blurDataURL={pageData.image.data!.attributes!.url}
              placeholder='blur'
              alt={pageData.image.data!.attributes!.alternativeText || ''}
              style={{
                width: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>
        </Stack>
      </Container>
    </>
  )
}


export async function getServerSideProps() {
  const { data } = await client.query<GetAboutPageQuery>({
    query: GetAboutPageDocument,
  })
  return {
    props: {
      pageData: data.aboutPage?.data?.attributes,
    },
  }
}

export default AboutUsPage
