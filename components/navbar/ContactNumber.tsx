import { HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { BiPhoneCall } from 'react-icons/bi'
import { useAppSelector } from '../../store/hooks'

const ContactNumber: React.FC<{ isScrolledNav?: boolean }> = ({ isScrolledNav = true }) => {
  const { initialData } = useAppSelector((state) => state.app)
  const contacts = initialData?.contact?.data?.attributes

  return (
    <VStack alignItems='flex-end' lineHeight={{ base: 1.5, sm: 1.3 }}>
      {contacts?.phoneNumbers.map((item) => (
        <HStack
          key={item?.id}
          spacing={1}
          color={'brand.500'}
          sx={{
            fontSize: { base: 18, sm: 15 },
            'svg': {
              fontSize: { base: 22, sm: 16 },
            },
          }}
        >
          <BiPhoneCall />
          <Text
            as='a'
            href={`tel:${item?.phone}`}
            _hover={{ textDecoration: 'underline' }}
            rel='noopener noreferrer'
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
