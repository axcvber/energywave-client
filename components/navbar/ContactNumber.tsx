import { Button, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { BiPhoneCall } from 'react-icons/bi'
import { useAppSelector } from '../../store/hooks'

const ContactNumber: React.FC<{ isScrolledNav?: boolean }> = ({ isScrolledNav = true }) => {
  const { initialData } = useAppSelector((state) => state.app)
  const contacts = initialData?.contact?.data?.attributes

  return (
    <VStack alignItems='flex-end' lineHeight={1.3}>
      {/* {contacts?.phoneNumbers.map((item) => (
        <HStack key={item?.id} spacing={1} color={isScrolledNav ? 'gray.900' : 'gray.50'}>
          <Button as='a' size='sm' href={`tel:${item?.phone}`} leftIcon={<BiPhoneCall fontSize={22} />} variant='ghost'>
            {item?.phone}
          </Button>
        </HStack>
      ))} */}
      {/* <Button
        as='a'
        // size='sm'
        href={`tel:${contacts?.phoneNumbers[0]?.phone}`}
        leftIcon={<BiPhoneCall fontSize={22} />}
        variant='ghost'
        // fontSize={16}
      >
        {contacts?.phoneNumbers[0]?.phone}
      </Button> */}
      {contacts?.phoneNumbers.map((item) => (
        <HStack key={item?.id} spacing={1} color={'brand.500'}>
          <BiPhoneCall fontSize={16} />
          <Text
            as='a'
            href={`tel:${item?.phone}`}
            _hover={{ textDecoration: 'underline' }}
            rel='noopener noreferrer'
            fontSize={'sm'}
            fontWeight={600}
          >
            {item?.phone}
          </Text>
        </HStack>
      ))}
    </VStack>
  )
}

export default ContactNumber
