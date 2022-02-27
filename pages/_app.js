import '../styles/globals.css'
import Nav from '../globalCompoents/Nav'

function MyApp({ Component, pageProps }) {
  return (
    <div className='h-screen bg-black text-white'>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
