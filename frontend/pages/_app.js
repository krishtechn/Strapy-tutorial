import Navbar from '../Components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
  <Navbar title="My shop"/>
  <Component {...pageProps} />
  </>
}

export default MyApp
