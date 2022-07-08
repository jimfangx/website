import { FaExternalLinkAlt } from "react-icons/fa";
import { Link, animateScroll as scroll } from "react-scroll";
import LinkNext from 'next/link'

export default function Links() {
    return (
        <div className='flex justify-center text-lg animate-fade'>
            {/* <a href="/resume-Jim-Fang.pdf" className='flex flex-row justify-between m-4 underline decoration-dotted'>
                Resume
            </a> */}
            <a href="https://github.com/AirFusion45?tab=repositories" className="flex flex-row justify-between m-4 underline decoration-dotted" target='_blank' rel='noreferrer'>
                Projects <FaExternalLinkAlt className="ml-2 mt-2 text-sm" />
            </a>
            <LinkNext href="/uses">
                <a className='flex flex-row justify-between m-4 underline decoration-dotted'>
                    Tech Stack
                </a>
            </LinkNext>
            <a href="#site-subpages">
                <Link
                    activeClass="active"
                    to="site-subpages"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1500}
                    className='flex flex-row justify-between m-4 underline decoration-dotted'
                >Site Subpages</Link>
            </a>
        </div>
    )
}
