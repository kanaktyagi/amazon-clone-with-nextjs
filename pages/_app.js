import '../styles/globals.css'
import {Providers as AuthProvider }from "next-auth/providers/Google";

function MyApp({ Component, pageProps }) {
  return (
  
    <Component {...pageProps} />
  
    )
}

export default MyApp
