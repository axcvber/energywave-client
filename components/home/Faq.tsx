import { Container, Heading } from '@chakra-ui/react'
import React from 'react'
import { ComponentHomeFaq } from '../../generated'
import Accordion from '../layout/Accordion'

interface IFaq {
  data: ComponentHomeFaq
}

const Faq: React.FC<IFaq> = ({ data }) => {
  return (
    <Container my={12}>
      <Heading textAlign={'center'}>{data.title}</Heading>
      <Accordion data={data.faqItem} />
    </Container>
  )
}

export default Faq
