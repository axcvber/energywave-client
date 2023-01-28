import React from 'react'
import ReactMarkdown from 'react-markdown'
import { chakra, Heading, Text } from '@chakra-ui/react'

interface IMarkdown {
  content?: string
}

const Markdown: React.FC<IMarkdown> = ({ content }) => {
  const RMarkdown = chakra(ReactMarkdown)
  if (!content) return null
  return (
    <RMarkdown
      mt={4}
      sx={{
        // px: 4,
        '*': {
          mb: 4,
          color: 'gray.600',
        },
        'h1,h2,h3,h4,h5,h6': {
          color: 'brand.300',
        },
      }}
      components={{
        p: ({ node, ...props }) => <Text lineHeight={1.8}>{props.children}</Text>,
        a: ({ node, ...props }) => (
          <StyledLink {...props} target='_blank' rel='noreferrer'>
            {props.children}
          </StyledLink>
        ),
        ul: ({ node, ...props }) => <StyledList>{props.children}</StyledList>,
        ol: ({ node, ...props }) => <StyledOl>{props.children}</StyledOl>,
        strong: ({ node, ...props }) => (
          <Text as='strong' mb={0} color='gray.800' fontWeight={600} display='inline-block'>
            {props.children}
          </Text>
        ),
        h1: ({ node, ...props }) => (
          <Heading as='h1' size='4xl'>
            {props.children}
          </Heading>
        ),
        h2: ({ node, ...props }) => (
          <Heading as='h2' size='3xl'>
            {props.children}
          </Heading>
        ),
        h3: ({ node, ...props }) => (
          <Heading as='h2' size='2xl'>
            {props.children}
          </Heading>
        ),
        h4: ({ node, ...props }) => (
          <Heading as='h2' size='xl'>
            {props.children}
          </Heading>
        ),
        h5: ({ node, ...props }) => (
          <Heading as='h3' size='lg'>
            {props.children}
          </Heading>
        ),
        h6: ({ node, ...props }) => (
          <Heading as='h4' size='md'>
            {props.children}
          </Heading>
        ),
        blockquote: ({ node, ...props }) => <StyledBlockquote>{props.children}</StyledBlockquote>,
      }}
    >
      {content}
    </RMarkdown>
  )
}

const StyledBlockquote = chakra('blockquote', {
  baseStyle: {
    borderLeft: '4px solid',
    borderColor: 'brand.300',
    my: 2,
    padding: '10px 10px 10px 20px',
    bg: 'white',
    borderTopRightRadius: '5px',
    borderBottomRightRadius: '5px',
    boxShadow: 'md',
    lineHeight: 1.5,
    letterSpacing: 0.3,
    'p': {
      mb: 0,
    },
  },
})

const StyledLink = chakra('a', {
  baseStyle: {
    color: 'brand.500 !important',
    position: 'relative',
    fontWeight: 500,

    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: '-3px',
      left: 0,
      right: 0,
      width: '100%',
      height: '2px',
      transform: 'scaleX(0)',
      transition: 'transform 0.3s',
      background: 'brand.500',
    },
    '&:hover': {
      '&:after': {
        transform: 'scaleX(1)',
      },
    },
  },
})

const StyledOl = chakra('ol', {
  baseStyle: {
    counterReset: 'item',

    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    'li': {
      counterIncrement: 'item',
      fontWeight: 500,
      color: 'gray.800',
      position: 'relative',
      paddingLeft: '45px',

      '&:last-child': {
        marginBottom: 0,
      },
      '&:before': {
        boxShadow: 'lg',
        marginRight: '10px',
        content: 'counter(item)',
        bg: 'brand.400',
        borderRadius: '100%',
        color: 'white',
        fontSize: 15,
        fontWeight: 500,
        w: '30px',
        h: '30px',
        textAlign: 'center',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 1,
        left: 0,
      },
    },
  },
})

const StyledList = chakra('ul', {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    'li': {
      position: 'relative',
      color: 'gray.800',
      fontWeight: 500,
      paddingLeft: '25px',

      '&:last-child': {
        marginBottom: 0,
      },
      '&:before': {
        content: '""',
        width: '10px',
        height: '10px',
        bg: 'brand.300',
        fontWeight: 'bold',
        display: 'flex',
        position: 'absolute',
        top: 2,
        left: 0,
      },
    },
  },
})

export default Markdown
