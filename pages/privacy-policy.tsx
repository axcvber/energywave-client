import { Container, Heading, Text } from '@chakra-ui/react'
import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import { PrivacyPolicy, PrivacyPolicyDocument, PrivacyPolicyQuery } from '../generated'
import client from '../graphql/apollo-client'

interface IPrivacyPolicy {
  pageData: PrivacyPolicy
}

const PrivacyPolicy: NextPage<IPrivacyPolicy> = ({ pageData }) => {
  return (
    <Container>
      <Heading>{pageData.title}</Heading>
      <Text>{pageData.content}</Text>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query<PrivacyPolicyQuery>({
    query: PrivacyPolicyDocument,
  })

  return {
    props: {
      pageData: data.privacyPolicy?.data?.attributes,
    },
    revalidate: 60,
  }
}

export default PrivacyPolicy
