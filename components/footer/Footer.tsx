import { Box, Container, Divider, Heading, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import Logo from '../Logo'
import SocialIcons from '../SocialIcons'
import { HiOutlineMail } from 'react-icons/hi'
import { BiPhoneCall } from 'react-icons/bi'
import ContactButton from './ContactButton'
import { useAppSelector } from '../../store/hooks'
import { navLinks } from '../navbar/navLinks'

interface IFooterLink {
  path: string
  label: string
  fontWeight?: number
}

interface CreatorLink {
  name: string
  link: string
  createdText: string
}

const Footer = () => {
  const { initialData } = useAppSelector((state) => state.app)
  const contacts = initialData?.contact?.data?.attributes

  return (
    <Box as='footer' bg={'brand.900'} sx={{ mt: 'auto', pt: 10, pb: 3 }} boxShadow='dark-lg'>
      <Container maxW='container.xl'>
        <Stack gap={8} direction={{ base: 'column', sm: 'row' }} justifyContent={'space-between'} flexWrap='wrap'>
          <Stack spacing={30}>
            <Logo placement='footer' />
            <SocialIcons />
          </Stack>
          <Stack>
            <Title text={'Навігація'} />
            <Stack as='ul' spacing={2}>
              {navLinks.map((item) => (
                <li key={item.path}>
                  <FooterLink path={item.path} label={item.label} />
                </li>
              ))}
            </Stack>
          </Stack>
          <Stack>
            <Title text={'Клієнту'} />
            <Stack as='ul' spacing={2}>
              <li>
                <FooterLink path={'/delivery-payment'} label={'Доставка і оплата'} />
              </li>
              <li>
                <FooterLink path={'/exchange-refund'} label={'Обмін та повернення'} />
              </li>
              <li>
                <FooterLink path={'/privacy-policy'} label={'Політика конфіденційності'} />
              </li>
            </Stack>
          </Stack>
          <Stack>
            <Title text={'Графік роботи'} />
            <Stack spacing={2}>
              {contacts?.workingHours.map((item) => (
                <Text key={item?.id} color='gray.500' fontSize='sm' fontWeight={500}>
                  {item?.listItem}
                </Text>
              ))}
            </Stack>
          </Stack>
          <Stack>
            <Title text={'Контакти'} />
            <Stack spacing={2} alignItems={'flex-start'} ml='-8px !important'>
              <ContactButton
                icon={<HiOutlineMail />}
                label={contacts?.email}
                link={`mailto:${contacts?.email}`}
                _hover={{
                  bg: 'brand.800',
                }}
              />
              {contacts?.phoneNumbers.map((item) => (
                <ContactButton
                  key={item?.id}
                  icon={<BiPhoneCall />}
                  label={item?.phone}
                  link={`tel:${item?.phone}`}
                  _hover={{
                    bg: 'brand.800',
                  }}
                />
              ))}
            </Stack>
          </Stack>
        </Stack>
        <Divider sx={{ mb: 3, mt: 12, borderColor: 'gray.800' }} />
        <Stack
          color='gray.500'
          direction='row'
          justifyContent={'space-between'}
          flexWrap='wrap'
          gap={2}
          alignItems='center'
        >
          <Text fontSize='sm'>&copy;{new Date().getFullYear()} energywave.pro. Всі права захищені</Text>
          <CreatorLink createdText={'Created by'} name='AXCVBER' link='https://t.me/axcvber' />
        </Stack>
      </Container>
    </Box>
  )
}

const CreatorLink: React.FC<CreatorLink> = ({ createdText, name, link }) => {
  return (
    <Stack direction='row' spacing={1}>
      <Text fontSize='sm'>{createdText}</Text>
      <Text
        as='a'
        href={link}
        fontSize='sm'
        fontWeight={600}
        target='_blank'
        rel='noopener noreferrer'
        color='inherit'
        sx={{
          transition: 'color 0.1s linear',
          '&:hover': {
            color: 'brand.500',
            borderColor: '#fff',
          },
        }}
      >
        {name}
      </Text>
    </Stack>
  )
}

const FooterLink: React.FC<IFooterLink> = ({ path, label, fontWeight = 500 }) => {
  return (
    <Link href={path} passHref legacyBehavior>
      <Text
        as='a'
        fontWeight={fontWeight}
        color='gray.500'
        fontSize={'sm'}
        sx={{
          transition: 'color 0.1s linear',
          '&:hover': {
            color: 'brand.500',
          },
        }}
      >
        {label}
      </Text>
    </Link>
  )
}

const Title: React.FC<{ text: string }> = ({ text }) => {
  return (
    <Heading fontSize='xl' color='white' fontWeight={600} mb={2}>
      {text}
    </Heading>
  )
}

export default Footer
