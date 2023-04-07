import Head from 'next/head'
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import Image from 'next/image'
import Socials from '../components/Socials'
import Links from '../components/Links'
import About from '../components/About'
import Contact from '../components/Contact'
import SiteSubpages from '../components/SiteSubpages'
import { FaArrowDown, FaExternalLinkAlt } from "react-icons/fa";

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['I am a developer', 'I am an engineer', 'I am a student', 'I am a creator.'], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      cursorChar: '_',
      loop: false
    });
    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className='bg-bgBlack text-white overflow-hidden flex items-center flex-col'>
      <div className='h-screen flex flex-col justify-center items-center w-9/12'>
        <Head>
          <title>Home | Jim Fang</title>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="theme-color" content="#ffffff" />
        </Head>

        <div className='w-255 h-256 block text-center'>
          <Image
            src='/white.svg'
            alt='logo'
            width={255}
            height={256}
            className='animate-fade'
          >
          </Image>
        </div>


        <div className='text-center space-y-4 font-sans'>
          <h2 className='text-7xl animate-fade'>Jim Fang</h2>
          <span ref={el} className='text-4xl animate-fade'></span>
        </div>


        <div>
          <Socials>
          </Socials>
        </div>

        <div>
          <Links>
          </Links>
        </div>


        <a href='#about' className='pt-4 text-5xl animate-fade'>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
            className='pt-4 text-5xl animate-fade'
          ><FaArrowDown /></Link>
        </a>
      </div>


      <div className='flex flex-col w-9/12 mt-[5.5rem]' id='about'>
        <About>
        </About>
      </div>

      <div className='flex flex-col w-9/12 mt-[5.5rem]'>
        <Contact>
        </Contact>
      </div>

      <div className='flex flex-col w-9/12 mt-[5.5rem]' id='site-subpages'>
        <SiteSubpages>
        </SiteSubpages>
      </div>

      <footer className='pt-[7rem] text-lg'>
        <div className='text-center'>
          <p>
            © 2023 Jim Fang
          </p>
          <p>
            Code open-sourced under the MIT license: <a href="https://github.com/AirFusion45/website" target='_blank' rel='noreferrer' className="flex inline-flex flex-wrap underline decoration-dotted">GitHub/AirFusion45/website<FaExternalLinkAlt className="ml-2 mt-1 text-lg" /></a>
          </p>
          <p>
            Emergency Webmaster Contact: <a href="mailto:jfang.cv.ca.us@gmail.com" className="underline decoration-dotted">jfang.cv.ca.us@gmail.com</a>
          </p>
        </div>
      </footer>

    </div>
  )
}
