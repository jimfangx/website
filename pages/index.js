/* TODO:
* Check unsplash profile URL
*/

import Head from 'next/head'
import Image from 'next/image'
// import { Analytics } from '@vercel/analytics/react';
// import { useEffect, useRef, useState } from 'react'
import { AiOutlineCopy } from 'react-icons/ai'
import LinkNext from 'next/link'

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
        <div className='md:pt-10 md:px-16'>
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
          <div className='text-white pt-6 text-lg'>
            <p>
              👋 Hi there! Welcome to my corner of the Internet!
            </p>
            <p className='mt-4'>
              I am currently working on <a href="https://db8bot.app" target='_blank' className='underline decoration-dotted'>db8bot</a>, a Discord application that aims to make academic journals, forensics debate, and digital learning accessible to all.
              My other side projects include <a href="https://github.com/AirFusion45/SARS-CoV-2-Dashboard" target='_blank' className='underline decoration-dotted'>COVID-19</a> <a href="https://github.com/AirFusion45/CPS-COVID-19-Dashboard" target='_blank' className='underline decoration-dotted'>dashboards</a>, Spotify <a href="https://github.com/AirFusion45/Spotify-Top-50-Playlist" target='_blank' className='underline decoration-dotted'>playlist</a> <a href="https://github.com/AirFusion45/Spotify-Compilation-Playlist" target='_blank' className='underline decoration-dotted'>automations</a>, <a href="https://github.com/AirFusion45/College-Prep-Debate-Auto-Intel-Sheet" target='_blank' className='underline decoration-dotted'>Debate</a> <a href="https://github.com/AirFusion45/basecamp" target='_blank'>tools</a>, and <a href="https://github.com/AirFusion45?tab=repositories" target='_blank' className='underline decoration-dotted'>more</a>.
            </p>
            <p className='mt-1'>
            </p>
            <p className='mt-1'>
              Recently, I've began to experiment with anti-censorship technologies developed from data gathered in studies of Internet censorship across the world. See my journey <a href="https://github.com/AirFusion45/vpn-stories" target='_blank' className='underline decoration-dotted'>here</a>.
            </p>
            <p className='mt-4'>
              My ultimate goal is to make the Web more accessible through all my projects.
            </p>
            <p className='mt-4'>
              When I am not working on projects or digging into new tech, you can find me taking photos and <a href="https://www.google.com/maps/contrib/102727725630957348818" target='_blank' className='underline decoration-dotted'>crowdsourcing on Google Maps.</a>
            </p>

            {/* current & prev institutions */}
            <div className='flex items-center mt-5 mb-8'>
              <div className='pr-4 italic text-zinc-400'>
                Education
              </div>
              <div>
                <p className='pb-2 md:p-0'>
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

            <p className='mt-4 text-xl'>
              Feel free to reach out to me at the places below! I'd love to hear from you!
            </p>

            {/* Links bar */}
            <div className='md:mt-4 md:w-4/6'>
              <div className='grid gap-2 md:grid-cols-7 md:grid-rows-1 grid-cols-3 grid-rows-3'>
                <div>
                  <a href="https://github.com/AirFusion45" target='_blank' className='underline'>GitHub</a>
                </div>
                <div>
                  <a href="https://twitter.com/airfusionjfa" target='_blank' className='underline'>Bird App</a>
                </div>
                <div>
                  <a href="https://www.discordapp.com/users/528197530656440320" target='_blank' className='underline'>Discord</a>
                </div>
                <div>
                  <a href="https://www.instagram.com/airfusionx" target='_blank' className='underline'>Instagram</a>
                </div>
                <div>
                  <a href="https://www.linkedin.com/in/jim-fang/" target='_blank' className='underline'>LinkedIn</a>
                </div>
                <div>
                  <a href="https://unsplash.com/@airfusion" target='_blank' className='underline'>Unsplash</a>
                </div>
                <div>
                  <a href="https://keybase.io/airfusion" target='_blank' className='underline'>Keybase</a>
                </div>
              </div>
            </div>

            {/* Emails */}
            <div className='flex items-center mt-2 md:mb-0 mb-4'>
              <div className='pr-4 italic text-zinc-400'>
                Emails
              </div>
              <div>
                <p className='pb-2 md:p-0'>
                  <span className='font-bold'>
                    Berkeley Mail:
                  </span>
                  &nbsp;
                  <span>
                    <a href="mailto:yf328@berkeley.edu">yf328@berkeley.edu</a>
                  </span>
                </p>
                <p className='pb-2 md:p-0'>
                  <span className='font-bold'>
                    db8bot Mail:
                  </span>
                  &nbsp;
                  <span>
                    <a href="mailto:jim@db8bot.app">jim@db8bot.app</a>
                  </span>
                </p>
                <p>
                  <span className='font-bold'>
                    Personal Mail:
                  </span>
                  &nbsp;
                  <span>
                    <a href="mailto:jim@airfusion.dev">jim@airfusion.dev</a>
                  </span>
                </p>
              </div>
            </div>

            {/* pgp keys */}
            <div className='flex items-center mt-2'>
              <div className='pr-4 italic text-zinc-400'>
                PGP Keys
              </div>
              <div>
                <span className='flex pb-2 md:p-0'>
                  <span className='font-bold'>
                    Keybase OpenPGP:
                  </span>
                  &nbsp;
                  <span className='flex items-center'>
                    <div className='select-all'>
                      6A8B 89FD B2A5 56AC 6B8F 1861 B66B 77E7 B2D0 CA60
                    </div>
                    <button className='pl-1'><AiOutlineCopy onClick={() => { navigator.clipboard.writeText('6A8B89FDB2A556AC6B8F1861B66B77E7B2D0CA60') }} /></button>
                  </span>
                </span>
                <span className='flex'>
                  <span className='font-bold'>
                    Alternative Non-Keybase Key:
                  </span>
                  &nbsp;
                  <span className='flex items-center'>
                    <div className='select-all'>02C8 2697 02AB 896B 499F 1BD7 0809 EF6C D42A 638E</div>
                    <button className='pl-1'><AiOutlineCopy onClick={() => { navigator.clipboard.writeText('02C8269702AB896B499F1BD70809EF6CD42A638E') }} /></button>
                  </span>
                </span>
              </div>
            </div>

            {/* list of projects on this site */}
            <div className='text-center pt-7'>
              <p className='text-3xl font-bold pb-1'>Subdomains & Other Bits</p>
              <p className='text-base pb-1'>This domain serves as the main domain for projects that require a domain/subdomain. Apps & sites ran on this domain and other useful utlities I use to help me build are listed below.</p>
              <div className='grid md:grid-rows-1 md:grid-cols-4 grid-cols-2 grid-rows-2 gap-2 color-white'>
                <div>
                  <a href="https://cloud.airfusion.dev" target='_blank' className='underline'>Custom Nextcloud Instance</a>
                </div>
                <div>
                  <a href="https://canvas.airfusion.dev" target='_blank' className='underline'>Canvas by Instructure (Terminated)</a>
                </div>
                <div>
                  <LinkNext href="/uses"> <span className='underline'>Development Stack & Tooling</span>
                  </LinkNext>
                </div>
                <div>
                  <a href="https://github.com/AirFusion45/AirFusion45" target='_blank' className='underline'>Project Boilerplates & Helpers</a>
                </div>
              </div>
            </div>

            {/* footer */}
            <footer className='pt-4 text-lg'>
              <div className='text-center'>
                <p>
                  © 2023 Jim Fang
                </p>
                <p>
                  Code open-sourced under the MIT license: <a href="https://github.com/AirFusion45/website" target='_blank' rel='noreferrer' className="flex inline-flex flex-wrap underline decoration-dotted">GitHub/AirFusion45/website</a>
                </p>
                <p>
                  Emergency Webmaster Contact: <a href="mailto:jim@airfusion.dev" className="underline decoration-dotted">jim@airfusion.dev</a>
                </p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  )
}

// todo: pgp keys (keybase), berkeley email for berkeley peeps, past schools, link list of project resources in home repo