import Header from '../components/Header'
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps}/>
    </>
  ) 
}

export default MyApp
