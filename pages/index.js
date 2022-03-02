import Head from 'next/head'
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import '../styles/index.module.css'
import Image from 'next/image'
import Socials from '../components/Socials'
import Links from '../components/Links'
import About from '../components/About'
import Contact from '../components/Contact'
import SiteNavigation from '../components/SiteNavigation'
import { FaArrowDown, FaExternalLinkAlt } from "react-icons/fa";

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['I am a developer', 'I am a student', 'I am an engineer', 'I am a creator', 'I am a dreamer.'], // Strings to display
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
          <title>Jim Fang</title>
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
          <h2 className='text-9xl animate-fade'>Jim Fang</h2>
          <span ref={el} className='text-7xl animate-fade'></span>
        </div>


        <div>
          <Socials>
          </Socials>
        </div>

        <div>
          <Links>
          </Links>
        </div>


        <a href='#about' className='pt-4 text-7xl animate-fade'>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
            className='pt-4 text-7xl animate-fade'
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

      <div className='flex flex-col w-9/12 mt-[5.5rem]' id='site-navigation'>
        <SiteNavigation>
        </SiteNavigation>
      </div>

      <footer className='pt-[7rem] text-xl'>
        <div className='text-center'>
          <p>
            © 2022 Jim Fang
          </p>
          <p>
            Code open-sourced under the MIT license: <a href="https://github.com/AirFusion45/website" target='_blank' rel='noreferrer' className="flex inline-flex flex-wrap underline decoration-dotted">GitHub/AirFusion45/website<FaExternalLinkAlt className="ml-2 mt-1 text-xl" /></a>
          </p>
          <p>
            Emergency Webmaster Contact: <a href="mailto:jfang.cv.ca.us@gmail.com" className="underline decoration-dotted">jfang.cv.ca.us@gmail.com</a>
          </p>
        </div>
      </footer>

    </div>
  )
}
