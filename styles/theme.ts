import { Container, extendTheme, Stack, ThemeConfig } from '@chakra-ui/react'
import { StyleFunctionProps } from '@chakra-ui/theme-tools'

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  } as ThemeConfig,
  fonts: {
    heading: `'Exo 2', sans-serif`,
    body: `'Exo 2', sans-serif`,
  },
  colors: {
    brand: {
      50: '#E5F8FF',
      100: '#B8ECFF',
      200: '#8AE0FF',
      300: '#5CD4FF',
      400: '#2EC8FF',
      500: '#00BCFF',
      600: '#0096CC',
      700: '#007199',
      800: '#004B66',
      900: '#002633',
    },
    gray: {
      50: '#ececec',
      100: '#EAEAEA',
      200: '#d3d3d3',
      300: '#bbbbbb',
      400: '#a4a4a4',
      500: '#8c8c8c',
      600: '#757575',
      700: '#5e5e5e',
      800: '#464646',
      900: '#2f2f2f',
    },
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'brand',
      },
    },
    Radio: {
      defaultProps: {
        colorScheme: 'brand',
      },
    },
    Stack: {
      defaultProps: {
        spacing: 4,
      },
    },
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      '*': {
        WebkitTapHighlightColor: 'transparent',
        margin: 0,
        padding: 0,
      },
      body: {
        bg: '#F7F8F9',
        counterReset: 'section',
      },
      'ol, ul, li': {
        listStyle: 'none',
      },
      'h1,h2,h3,h4,h5,h6': {
        margin: 0,
      },
      a: {
        textDecoration: 'none',
      },
      '#nprogress': {
        '.bar': {
          background: `brand.500 !important`,
        },
        '.peg': {
          boxShadow: `0 0 10px #00BCFF, 0 0 5px #00BCFF !important`,
        },
      },
    }),
  },
})

Container.defaultProps = {
  maxW: 'container.xl',
}

Stack.defaultProps = {
  spacing: 0,
}

export default theme
