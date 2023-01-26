import { Container, Heading, Text } from '@chakra-ui/react'
import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import { ExchangeAndRefund, ExchangeAndRefundDocument, ExchangeAndRefundQuery } from '../generated'
import client from '../graphql/apollo-client'

interface IExchangeAndRefund {
  pageData: ExchangeAndRefund
}

const ExchangeAndRefund: NextPage<IExchangeAndRefund> = ({ pageData }) => {
  return (
    <Container>
      <Heading>{pageData.title}</Heading>
      <Text>{pageData.content}</Text>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query<ExchangeAndRefundQuery>({
    query: ExchangeAndRefundDocument,
  })

  return {
    props: {
      pageData: data.exchangeAndRefund?.data?.attributes,
    },
    revalidate: 60,
  }
}

export default ExchangeAndRefund
