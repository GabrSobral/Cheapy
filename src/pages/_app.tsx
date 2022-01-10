import type { AppProps } from 'next/app'
import Head from 'next/head'
import { UserProvider } from '../contexts/user'
import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head><title>Cheapy</title></Head>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </>
  )
}

export default MyApp
