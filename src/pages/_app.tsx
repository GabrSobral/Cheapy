import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ShoppingCartPopup } from '../components/ShoppingCartPopup'
import { MyCartProvider } from '../contexts/MyCartContext'
import { UserProvider } from '../contexts/user'
import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head><title>Cheapy</title></Head>
      <UserProvider>
        <MyCartProvider>
          <Component {...pageProps} />
          <ShoppingCartPopup/>
        </MyCartProvider>
      </UserProvider>
    </>
  )
}

export default MyApp
