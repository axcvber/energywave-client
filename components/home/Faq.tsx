import { Container, Stack } from '@chakra-ui/react'
import React from 'react'
import { ComponentHomeFaq } from '../../generated'
import Accordion from '../layout/Accordion'
import Heading from '../layout/Heading'

interface IFaq {
  data: ComponentHomeFaq
}

const Faq: React.FC<IFaq> = ({ data }) => {
  return (
    <Stack as={Container} spacing={6}>
      <Heading title={data.title} align='center' withLine headingProps={{ size: 'xl' }} />
      <Accordion data={data.faqItem} />
    </Stack>
  )
}

export default Faq
