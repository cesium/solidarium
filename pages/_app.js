import Header from '../components/Header'
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps}/>
    </>
  ) 
}

export default MyApp
