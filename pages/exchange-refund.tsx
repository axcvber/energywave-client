import { Container } from '@chakra-ui/react'
import { NextPage } from 'next'
import React from 'react'
import Heading from '../components/layout/Heading'
import Markdown from '../components/layout/Markdown'
import SeoSingle from '../components/seo/SeoSingle'
import { ExchangeAndRefund, ExchangeAndRefundDocument, ExchangeAndRefundQuery } from '../generated'
import client from '../graphql/apollo-client'

interface IExchangeAndRefund {
  pageData: ExchangeAndRefund
}

const ExchangeAndRefund: NextPage<IExchangeAndRefund> = ({ pageData }) => {
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
  const { data } = await client.query<ExchangeAndRefundQuery>({
    query: ExchangeAndRefundDocument,
  })
  return {
    props: {
      pageData: data.exchangeAndRefund?.data?.attributes,
    },
  }
}

export default ExchangeAndRefund
