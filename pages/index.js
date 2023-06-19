import Head from 'next/head'
import Image from 'next/image'
// import { Analytics } from '@vercel/analytics/react';
import { useEffect, useRef, useState } from 'react'
// import { FaBeer } from 'react-icons/fa'

export default function Home() {

  return (
    <div className='overflow-hidden'>
      <Head>
        <title>Home | airfusion.dev</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className='p-6 min-h-screen bg-bgBlack flex flex-col'>
        {/* <div className='md:h-12 lg:h-28 xl:32' /> */}
        {/* name, pfp + disc + socials */}
        <div className='py-10 px-16'>
          {/* name bar */}
          <div className='text-white flow-root'>
            <div className='float-left flex'>
              {/* pfpirl + name */}
              <Image
                src='/irlpfp.jpeg'
                width='60'
                height='60'
                className='rounded-full'
              />
              <div className='items-center justify-center flex flex-col pl-3'>
                <div className='text-xl font-bold'>Jim Fang</div>
                <div className='text-base font-light'>he/him</div>
              </div>
            </div>
            <div className='float-right flex'>
              {/* pfpvir + netname */}
              <span className='items-center flex pr-3 text-xl font-bold'>airfusion</span>
              <Image
                src='/virpfp.png'
                width='60'
                height='60'
                className='rounded-full'
              />
            </div>
          </div>

          {/* Intro */}
          <div className='text-white py-6 text-lg'>
            <p>
              👋 Hi there! Welcome to my corner of the Internet!
            </p>
            <p className='mt-4'>
              I am currently working on <a href="https://db8bot.app" target='_blank' className='underline decoration-dotted'>db8bot</a>, a Discord application that aims to make academic journals, forensics debate, and digital learning accessible to all.
            </p>
            <p className='mt-1'>
              My other side projects include <a href="https://github.com/AirFusion45/SARS-CoV-2-Dashboard" target='_blank' className='underline decoration-dotted'>COVID-19</a> <a href="https://github.com/AirFusion45/CPS-COVID-19-Dashboard" target='_blank' className='underline decoration-dotted'>dashboards</a>, Spotify <a href="https://github.com/AirFusion45/Spotify-Top-50-Playlist" target='_blank' className='underline decoration-dotted'>playlist</a> <a href="https://github.com/AirFusion45/Spotify-Compilation-Playlist" target='_blank' className='underline decoration-dotted'>automations</a>, <a href="" target='_blank' className='underline decoration-dotted'>Debate intel scrapers</a>, and <a href="" target='_blank' className='underline decoration-dotted'>more</a>.
            </p>
            <p className='mt-1'>
              Recently, I've began to experiment with anti-censorship technologies developed from data gathered in studies of Internet censorship across the world.
            </p>
            <p className='mt-4'>
              My ultimate goal is to make the Web more accessible through all my projects.
            </p>
            <p className='mt-4'>
              When I am not working on projects or digging into new tech, you can find me taking photos and <a href="">crowdsourcing on Google Maps.</a>
            </p>

            {/* current & prev institutions */}
            <div className='flex items-center mt-5'>
              <div className='pr-4 italic text-zinc-400'>
                Education
              </div>
              <div>
                <p>
                  <span className='font-bold'>
                    Current:
                  </span>
                  &nbsp;
                  <span>
                    EECS @ UC Berkeley '27
                  </span>
                </p>
                <p>
                  <span className='font-bold'>
                    Previous:
                  </span>
                  &nbsp;
                  <span>
                    The College Preparatory School '23, Canyon Middle School '19
                  </span>
                </p>
              </div>
            </div>

            <p className='mt-4'>
              Feel free to reach out to me at the places below! I'd love to hear from you!
            </p>

            {/* Links bar */}
            <div className='mt-4 w-4/6'>
              <div className='grid gap-2 grid-cols-6 grid-rows-1'>
                <div>
                  <a href="">GitHub</a>
                </div>
                <div>
                  <a href="">Twitter</a>
                </div>
                <div>
                  <a href="">Discord</a>
                </div>
                <div>
                  <a href="">Instagram</a>
                </div>
                <div>
                  <a href="">Unsplash</a>
                </div>
                <div>
                  <a href="">Keybase</a>
                </div>
              </div>
            </div>

            {/* Emails */}
            <div className='flex items-center mt-2'>
              <div className='pr-4 italic text-zinc-400'>
                Emails
              </div>
              <div>
                <p>
                  <span className='font-bold'>
                    Berkeley Mail:
                  </span>
                  &nbsp;
                  <span>
                    <a href="">yf328@berkeley.edu</a>
                  </span>
                </p>
                <p>
                  <span className='font-bold'>
                    db8bot Mail:
                  </span>
                  &nbsp;
                  <span>
                    <a href="">jim@db8bot.app</a>
                  </span>
                </p>
                <p>
                  <span className='font-bold'>
                    Personal Mail:
                  </span>
                  &nbsp;
                  <span>
                    <a href="">jim@airfusion.dev</a>
                  </span>
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

// todo: pgp keys (keybase), berkeley email for berkeley peeps, past schools, link list of project resources in home repo