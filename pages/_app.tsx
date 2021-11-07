import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { NextPage } from 'next'
import { AppProps } from 'next/app'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
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
