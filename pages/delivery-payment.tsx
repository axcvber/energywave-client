import { Container } from '@chakra-ui/react'
import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import Heading from '../components/layout/Heading'
import Markdown from '../components/layout/Markdown'
import SeoSingle from '../components/seo/SeoSingle'
import { DeliveryAndPayment, DeliveryAndPaymentDocument, DeliveryAndPaymentQuery } from '../generated'
import client from '../graphql/apollo-client'

interface IDeliveryAndPayment {
  pageData: DeliveryAndPayment
}

const DeliveryAndPayment: NextPage<IDeliveryAndPayment> = ({ pageData }) => {
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

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query<DeliveryAndPaymentQuery>({
    query: DeliveryAndPaymentDocument,
  })

  return {
    props: {
      pageData: data.deliveryAndPayment?.data?.attributes,
    },
    revalidate: 60,
  }
}

export default DeliveryAndPayment
