import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { AppProps } from 'next/app'
import React from 'react'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Component {...pageProps} />
      <style jsx global>{`
        body {
          font-family: 'Spinnaker';
          height: 100%;
          margin: 0;
          padding: 0;
        }
      `}</style>
    </div>
  )
}
export default MyApp
