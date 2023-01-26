import { Box } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useAppSelector } from '../store/hooks'

interface ILogo {
  placement?: 'header' | 'footer'
}

const Logo: React.FC<ILogo> = ({ placement = 'header' }) => {
  const { initialData } = useAppSelector((state) => state.app)
  const darkLogo = initialData?.global?.data?.attributes?.darkLogo.data?.attributes?.url
  const lightLogo = initialData?.global?.data?.attributes?.lightLogo.data?.attributes?.url
  const logoUrl = placement === 'header' ? darkLogo : lightLogo

  return (
    <Link href='/' passHref legacyBehavior>
      <Box
        as='a'
        sx={{
          display: 'block',
          width: '150px',
        }}
      >
        <Image
          priority
          width={150}
          height={50}
          src={logoUrl || ''}
          alt='logo'
          style={{
            objectFit: 'contain',
            objectPosition: 'left center',
          }}
        />
      </Box>
    </Link>
  )
}

export default Logo
