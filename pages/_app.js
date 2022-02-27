import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='h-screen bg-bgBlack text-white flex justify-center items-center'>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
