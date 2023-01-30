import { Container } from '@chakra-ui/react'
import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import Heading from '../components/layout/Heading'
import Markdown from '../components/layout/Markdown'
import SeoSingle from '../components/seo/SeoSingle'
import { PrivacyPolicy, PrivacyPolicyDocument, PrivacyPolicyQuery } from '../generated'
import client from '../graphql/apollo-client'

interface IPrivacyPolicy {
  pageData: PrivacyPolicy
}

const PrivacyPolicy: NextPage<IPrivacyPolicy> = ({ pageData }) => {
  return (
    <>
      <SeoSingle seo={pageData.seo} />
      <Container>
        <Heading title={pageData.title} withLine />
        <Markdown content={pageData.content} />
      </Container>
    </>
  )
}

export async function getServerSideProps() {
  const { data } = await client.query<PrivacyPolicyQuery>({
    query: PrivacyPolicyDocument,
  })
  return {
    props: {
      pageData: data.privacyPolicy?.data?.attributes,
    },
  }
}

export default PrivacyPolicy
