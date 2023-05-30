import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavbarComponent from '../components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavbarComponent/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
