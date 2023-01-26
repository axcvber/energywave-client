import { Box, HStack } from '@chakra-ui/react'
import React from 'react'
import { useAppSelector } from '../store/hooks'
import getSocialIcon from '../utils/getSocialIcon'

const SocialIcons = () => {
  const { initialData } = useAppSelector((state) => state.app)
  const icons = initialData?.contact?.data?.attributes?.socialNetworks

  return (
    <HStack as='ul' spacing={3}>
      {icons &&
        icons.map((item) => (
          <li key={item?.id}>
            <a href={item?.link} target='_blank' rel='noopener noreferrer'>
              <Box
                sx={{
                  w: '35px',
                  h: '35px',
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  bg: 'brand.500',
                  // border: '1px solid',
                  // bgGradient: 'linear(to-r, teal.500, green.500)',
                  // borderColor: '#32998C',
                  '&:hover': {
                    // bg: '#fff',
                    transform: 'translateY(-2px)',
                  },
                  'svg': {
                    color: '#fff',
                    fontSize: 18,
                  },
                }}
              >
                {getSocialIcon(item?.icon)}
              </Box>
            </a>
          </li>
        ))}
    </HStack>
  )
}

export default SocialIcons
