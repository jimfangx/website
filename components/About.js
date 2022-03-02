import { FaExternalLinkAlt } from "react-icons/fa";
export default function About() {
    return (
        <div>
            <h1 className="text-5xl underline decoration-double pb-5">Who am I?</h1>
            <p className="text-xl pb-3">
                👋 Hi there! I am Jim, a tech-enthusiast exploring the world-wide-web, the world of consumer electrons & manufacturing, the role of tech in education & the world of aviation. When I am not focused on tech or engineering, you can find me outdoors taking photos.
            </p>
            <div className="text-xl flex inline-flex flex-wrap">
                <p className="pr-2 flex inline-flex flex-wrap">
                    I am currently a junior at <a href="https://college-prep.org" className="px-2 underline decoration-dotted flex inline-flex flex-wrap" target='_blank' rel='noreferrer'>The College Preparatory School<FaExternalLinkAlt className="ml-2 mt-1 text-xl" /></a> in Oakland, California.
                </p>
            </div>
        </div>
    )
}