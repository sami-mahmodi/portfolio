import { Fragment } from 'react'
import Head from 'next/head'
import { ColorSchemeProvider, MantineProvider } from '@mantine/core'
import { useColorScheme, useLocalStorage } from '@mantine/hooks'

export default function App({ Component, pageProps }) {
  const preferredColorScheme = useColorScheme()
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: 'color-scheme',
    defaultValue: preferredColorScheme,
    getInitialValueInEffect: true,
  })

  const toggleColorScheme = value =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  return (
    <Fragment>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Sama consulting" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme }}>
          <Component {...pageProps} />
        </MantineProvider>
      </ColorSchemeProvider>
    </Fragment>
  )
}
