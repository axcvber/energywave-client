import { Container, Stack, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import React from 'react'
import { BiPhoneCall } from 'react-icons/bi'
import { HiOutlineMail } from 'react-icons/hi'
import ContactButton from '../components/footer/ContactButton'
import Heading from '../components/layout/Heading'
import SeoSingle from '../components/seo/SeoSingle'
import SocialIcons from '../components/SocialIcons'
import { Contact, GetContactsPageDocument, GetContactsPageQuery } from '../generated'
import client from '../graphql/apollo-client'
import { useAppSelector } from '../store/hooks'

interface IContactsPage {
  pageData: Contact
}

const ContactsPage: NextPage<IContactsPage> = ({ pageData }) => {
  const { initialData } = useAppSelector((state) => state.app)
  const contacts = initialData?.contact?.data?.attributes

  return (
    <>
      <SeoSingle seo={pageData.seo} />

      <Container>
        <Stack spacing={6} justifyContent='center' alignItems={'center'}>
          <Heading align='center' title={'Контакти'} withLine />

          <Stack spacing={2} alignItems={'center'}>
            {contacts?.phoneNumbers.map((item) => (
              <ContactButton key={item?.id} icon={<BiPhoneCall />} label={item?.phone} link={`tel:${item?.phone}`} />
            ))}
            <ContactButton icon={<HiOutlineMail />} label={contacts?.email} link={`mailto:${contacts?.email}`} />
          </Stack>

          <SocialIcons />

          <Stack spacing={2} alignItems={'center'} textAlign='center'>
            <Text fontSize={'xl'} fontWeight={600}>
              Графік роботи
            </Text>
            <Stack spacing={2}>
              {contacts?.workingHours.map((item) => (
                <Text key={item?.id} color='gray.500' fontWeight={400}>
                  {item?.listItem}
                </Text>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </>
  )
}

export async function getServerSideProps() {
  const { data } = await client.query<GetContactsPageQuery>({
    query: GetContactsPageDocument,
  })
  return {
    props: {
      pageData: data.contact?.data?.attributes,
    },
  }
}

export default ContactsPage
