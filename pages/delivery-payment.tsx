import { Container, Heading, Text } from '@chakra-ui/react'
import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import { DeliveryAndPayment, DeliveryAndPaymentDocument, DeliveryAndPaymentQuery } from '../generated'
import client from '../graphql/apollo-client'

interface IDeliveryAndPayment {
  pageData: DeliveryAndPayment
}

const DeliveryAndPayment: NextPage<IDeliveryAndPayment> = ({ pageData }) => {
  return (
    <Container>
      <Heading>{pageData.title}</Heading>
      <Text>{pageData.content}</Text>
    </Container>
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
