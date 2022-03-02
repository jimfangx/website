import { FaExternalLinkAlt } from "react-icons/fa";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Links() {
    return (
        <div className='flex justify-center text-3xl animate-fade'>
            <a href="/resume_technical.pdf" className='flex flex-row justify-between m-4 underline decoration-dotted'>
                Resume
            </a>
            <a href="https://github.com/AirFusion45?tab=repositories" className="flex flex-row justify-between m-4 underline decoration-dotted" target='_blank' rel='noreferrer'>
                Projects <FaExternalLinkAlt className="ml-2 mt-1 text-2xl" />
            </a>
            <a href="/uses" className='flex flex-row justify-between m-4 underline decoration-dotted'>
                Main Stack & Gear
            </a>
            <a href="#site-navigation">
                <Link
                    activeClass="active"
                    to="site-navigation"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1500}
                    className='flex flex-row justify-between m-4 underline decoration-dotted'
                >Site Navigation</Link>
            </a>
        </div>
    )
}
