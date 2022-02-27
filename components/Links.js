import { FaExternalLinkAlt } from "react-icons/fa";

export default function Links() {
    return (
        <div className='flex justify-center text-3xl'>
            <a href="/resume_technical.pdf" className='flex flex-row justify-between m-4 underline decoration-dotted'>
                Resume
            </a>
            <a className="flex flex-row justify-between m-4">
                Projects <FaExternalLinkAlt className="ml-2 mt-1 text-2xl" />
            </a>
            <a className='flex flex-row justify-between m-4'>
                Tools & Gear
            </a>
            <a className='flex flex-row justify-between m-4'>
                Site Navigation
            </a>
        </div>
    )
}
