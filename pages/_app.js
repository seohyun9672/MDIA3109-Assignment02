import '../styles/globals.css'
import Logobar from '../comp/Logobar'

export default function App({ Component, pageProps }) {
  return <>
    <Logobar />
    <Component {...pageProps} /> 
  </>
}
