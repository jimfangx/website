import Head from 'next/head'
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import '../styles/index.module.css'
import Image from 'next/image'
import Socials from '../components/Socials'
import Links from '../components/Links'

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['I am a developer', 'I am a student', 'I am an engineer', 'I am a creator'], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      cursorChar: '_',
      loop: true
    });
    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className=''>
      <Head>
        <title>Jim Fang</title>
      </Head>

      <div className='m-auto w-255 h-256 block text-center'>
        <Image
          src='/white.svg'
          alt='logo'
          width={255}
          height={256}
        >
        </Image>
      </div>


      <div className='text-center space-y-4 font-sans'>
        <h2 className='text-9xl'>Jim Fang</h2>
        <span ref={el} className='text-7xl'></span>
      </div>


      <div>
        <Socials>
        </Socials>
      </div>

      <div>
        <Links>
        </Links>
      </div>
    </div>
  )
}
