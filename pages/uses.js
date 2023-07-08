import Head from "next/head"
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";
import { SiJavascript, SiJquery, SiNpm, SiHtml5, SiCss3, SiReact, SiBootstrap, SiTailwindcss, SiNodedotjs, SiExpress, SiDiscord, SiDocker, SiCircleci, SiGooglecloud, SiIpfs, SiSentry, SiNextdotjs, SiVisualstudiocode, SiPostman, SiGooglechrome, SiElectron, SiMongodb, SiWechat, SiGitkraken, SiRedis, SiVercel, SiHeroku, SiCloudflare, SiSignal, SiWhatsapp } from "react-icons/si";
import { DiMaterializecss } from "react-icons/di"
import { FaServer } from 'react-icons/fa'
import { GiChargingBull } from 'react-icons/gi'
import React, { useState, useEffect } from 'react';
import LinkNext from 'next/link'

export default function Uses() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        // only execute all the code below in client side
        if (typeof window !== 'undefined') {
            // Handler to call on window resize
            function handleResize() {
                // Set window width/height to state
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }

            // Add event listener
            window.addEventListener("resize", handleResize);

            // Call handler right away so state gets updated with initial window size
            handleResize();

            // Remove event listener on cleanup
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []); // Empty array ensures that effect is only run on mount


    const isMobile = windowSize.width <= 907;
    return (
        <div className='bg-bgBlack text-white flex items-center flex-col overflow-hidden'>
            <Head>
                <title>Development Stack & Tooling | airfusion.dev</title>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="theme-color" content="#ffffff" />
            </Head>

            <div className="items-center w-9/12">
                {/* TODO: fix arrow position and spacing via padding */}
                <span className="flex inline-flex flex-wrap"><FaArrowLeft className="ml-2 mt-1 text-2xl" /><a className="underline decoration-dotted " href="https://airfusion.dev" rel="noreferrer">airfusion.dev<LinkNext href="/uses"><span className="underline decoration-double">/uses</span></LinkNext></a></span> 
                <p className="text-2xl pb-5">
                    <h1 className="text-7xl underline decoration-double pt-9 pb-5 text-center">Tech Stack & Gear</h1>
                    This page details my dev stack & the hardware/gear I use. This page also contributes to<a href="https://uses.tech/" className="px-2 underline decoration-dotted flex inline-flex flex-wrap" target='_blank' rel='noreferrer'>uses.tech<FaExternalLinkAlt className="ml-2 mt-1 text-2xl" /></a>
                </p>
            </div>

            <div className="w-9/12">
                <h2 className="text-center underline text-5xl pb-3">Software Stack</h2>
                <h3 className="text-left font-bold text-4xl mb-3">Frontend</h3>
                <div className="flex flex-row justify-center mb-3 flex-wrap">
                    <div className={"border-2 w-[320px] h-[300px] border-slate-500 p-3 rounded " + (!isMobile ? "mr-5" : "mb-3")}>
                        <h1 className="text-4xl font-bold flex inline-flex flex-wrap pb-3">JavaScript<SiJavascript className="pl-2" /></h1>
                        <p className="text-xl">
                            - Frontend JavaScript<br></br>
                            <span className="flex inline-flex flex-wrap ">- React <SiReact className="mt-1 ml-2" /></span><br></br>
                            <span className="flex inline-flex flex-wrap ">- Next.js <SiNextdotjs className="mt-1 ml-2" /></span><br></br>
                            <span className="flex inline-flex flex-wrap ">- Electron <SiElectron className="mt-1 ml-2" /></span><br></br>
                            - Google Apps Script <br></br>
                            <span className="flex inline-flex flex-wrap ">- jQuery <SiJquery className="mt-1 ml-2" /></span><br></br>
                            <span className="flex inline-flex flex-wrap ">- NPM via Unpkg <SiNpm className="mt-1 ml-2" /></span>
                        </p>
                    </div>
                    <div className={"border-2 w-[320px] h-[300px] border-slate-500 p-3 rounded " + (!isMobile ? "ml-5" : "")}>
                        <h1 className="text-4xl font-bold flex inline-flex flex-wrap pb-3">HTML & CSS<SiHtml5 className="pl-2" /><SiCss3 className="pl-2" /></h1>
                        <p className="text-xl">
                            - Frontend HTML & CSS <br></br>
                            <span className="flex inline-flex flex-wrap ">- React <SiReact className="mt-1 ml-2" /></span><br></br>
                            <span className="flex inline-flex flex-wrap ">- Bootstrap <SiBootstrap className="mt-1 ml-2" /></span><br></br>
                            <span className="flex inline-flex flex-wrap ">- MaterializeCSS <DiMaterializecss className="mt-1 ml-2" /></span><br />
                            <span className="flex inline-flex flex-wrap ">- TailwindCSS <SiTailwindcss className="mt-1 ml-2" /></span>
                        </p>
                    </div>
                </div>
                <h3 className="text-left font-bold text-4xl mb-3">Backend</h3>
                <div className="flex flex-row justify-center mb-3">
                    <div className="border-2 w-[320px] h-[390px] border-slate-500 p-3 rounded">
                        <h1 className="text-4xl font-bold flex inline-flex flex-wrap pb-3">Node.JS<SiNodedotjs className="pl-2" /></h1>
                        <p className="text-xl">
                            - JavaScript <br></br>
                            - TypeScript <br></br>
                            <span className="flex inline-flex flex-wrap ">- ExpressJS <SiExpress className="mt-1 ml-2" /></span><br></br>
                            <span className="flex inline-flex flex-wrap ">- Bull Queue Manager <GiChargingBull className="mt-1 ml-2" /></span><br></br>
                            - Cheerio & Puppeteer <br></br>
                            - Superagent/Axios/Fetch <br></br>
                            <span className="flex inline-flex flex-wrap ">- Discord.js <SiDiscord className="mt-1 ml-2" /></span><br></br>
                            <span className="flex inline-flex flex-wrap ">- IPFS <SiIpfs className="mt-1 ml-2" /></span><br />
                            <span className="flex inline-flex flex-wrap ">- MongoDB <SiMongodb className="mt-1 ml-2" /></span><br />
                            <span className="flex inline-flex flex-wrap ">- Redis <SiRedis className="mt-1 ml-2" /></span><br />
                            <span className="flex inline-flex flex-wrap ">- NPM <SiNpm className="mt-1 ml-2" /></span>
                        </p>
                    </div>
                </div>
                <h3 className="text-left font-bold text-4xl mb-3">CI/CD & Deployment</h3>
                <div className="flex flex-row justify-center mb-3">
                    <div className="border-2 w-[320px] h-[330px] border-slate-500 p-3 rounded">
                        <h1 className="text-4xl font-bold flex inline-flex flex-wrap pb-3">CI/CD & VPS<FaServer className="pl-2" /></h1>
                        <p className="text-xl">
                            <span className="flex inline-flex flex-wrap ">- Docker <SiDocker className="mt-1 ml-2" /></span><br></br>
                            <span className="flex inline-flex flex-wrap ">- CircleCI <SiCircleci className="mt-1 ml-2" /></span><br></br>
                            <span className="flex inline-flex flex-wrap ">- Google Cloud Compute<SiGooglecloud className="mt-1 ml-2" /></span><br />
                            - Google Cloud Functions/Run & App Engine <br />
                            <span className="flex inline-flex flex-wrap ">- Vercel <SiVercel className="mt-1 ml-2" /></span><br></br>
                            <span className="flex inline-flex flex-wrap ">- Heroku <SiHeroku className="mt-1 ml-2" /></span><br></br>
                            <span className="flex inline-flex flex-wrap ">- Cloudflare Workers <SiCloudflare className="mt-1 ml-2" /></span><br></br>
                            <span className="flex inline-flex flex-wrap ">- Sentry<SiSentry className="mt-1 ml-2" /></span>
                        </p>
                    </div>
                </div>
                <h3 className="text-left font-bold text-4xl mb-3">Mobile</h3>
                <div className="flex flex-row justify-center mb-3">
                    <div className="border-2 w-[320px] h-[300px] border-slate-500 p-3 rounded">
                        <h1 className="text-4xl font-bold flex inline-flex flex-wrap pb-3">JSX<SiJavascript className="pl-2" /></h1>
                        <p className="text-xl">
                            <span className="flex inline-flex flex-wrap ">- React Native <SiReact className="mt-1 ml-2" /></span><br></br>
                            <span className="flex inline-flex flex-wrap ">- Tencent MMKV <SiWechat className="mt-1 ml-2" /></span><br></br>
                        </p>
                    </div>
                </div>
                <h3 className="text-left font-bold text-4xl mb-3">Editors & Development Utilitis</h3>
                <div>
                    <p className="text-xl">
                        <span className="flex inline-flex flex-wrap ">- VSCode Insiders<SiVisualstudiocode className="mt-1 ml-2" /></span> <br />
                        <span className="flex inline-flex flex-wrap ">- GitKraken Pro<SiGitkraken className="mt-1 ml-2" /></span> <br />
                        <span className="flex inline-flex flex-wrap ">- Postman<SiPostman className="mt-1 ml-2" /></span> <br />
                        <span className="flex inline-flex flex-wrap ">- Google Chrome Canary<SiGooglechrome className="mt-1 ml-2" /></span>
                    </p>
                </div>
                <br />
                <h3 className="text-left font-bold text-4xl mb-3">Main Communications</h3>
                <div>
                    <p className="text-xl">
                        <span className="flex inline-flex flex-wrap ">- Discord Canary<SiDiscord className="mt-1 ml-2" /></span> <br />
                        <span className="flex inline-flex flex-wrap ">- Signal<SiSignal className="mt-1 ml-2" /></span> <br />
                        <span className="flex inline-flex flex-wrap ">- WhatsApp<SiWhatsapp className="mt-1 ml-2" /></span> <br />
                        <span className="flex inline-flex flex-wrap ">- WeChat<SiWechat className="mt-1 ml-2" /></span> <br />
                    </p>
                </div>
                <h2 className="text-center underline text-5xl pb-3">Hardware</h2>
                <div>
                    <p className="text-xl">
                        - iPhone 14 Pro, iOS 16 Dev Beta <br />
                        - iPad Air A2588, iPadOS 16 Dev Beta <br />
                        - MacBook Pro A1708, MacOS 13 Dev Beta (Ex-Organization) <br />
                        - MacBook Pro A1989, MacOS 13 Dev Beta (Personal) <br />
                        - Custom PC: i7-7700k (Overclocked @ 4.8 GHz), 32GB (2x16) DDR4-3200, NVIDIA GTX 1080 8G, Windows 11 Insiders Dev Build
                    </p>
                </div>
            </div>
            <footer className='pt-[7rem] text-xl'>
                <div className='text-center'>
                    <p>
                        © 2023 Jim Fang
                    </p>
                    <p>
                        Code open-sourced under the MIT license: <a href="https://github.com/AirFusion45/website" target='_blank' rel='noreferrer' className="flex inline-flex flex-wrap underline decoration-dotted">GitHub/AirFusion45/website<FaExternalLinkAlt className="ml-2 mt-1 text-xl" /></a>
                    </p>
                    <p>
                        Emergency Webmaster Contact: <a href="mailto:jim@airfusion.dev" className="underline decoration-dotted">jim@airfusion.dev</a>
                    </p>
                </div>
            </footer>
        </div>
    )
}