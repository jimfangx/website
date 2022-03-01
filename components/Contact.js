import { FaExternalLinkAlt } from "react-icons/fa";
export default function About() {
    return (
        <div>
            <h1 className="text-7xl underline decoration-double pb-5">Contact</h1>
            <div className="text-4xl">
                <p className="pb-3">
                    Don't hesitate to reach out! I would love to hear from you!
                </p>
                <p className="pb-2">
                    Email: <a href="mailto:jfang.cv.ca.us@gmail.com" className="underline decoration-dotted">jfang.cv.ca.us@gmail.com</a>
                </p>
                <p className="pb-2">
                    Twitter: <a href="https://twitter.com/airfusionjfa" target='_blank' rel='noreferrer' className="flex inline-flex flex-wrap underline decoration-dotted">airfusionjfa<FaExternalLinkAlt className="ml-2 mt-1 text-2xl" /></a>
                </p>
                <p className="pb-2">
                    Discord: AirFusion#1706
                </p>
                <p>
                    Open an issue in my home repo: <a href="https://github.com/AirFusion45/AirFusion45" target='_blank' rel='noreferrer' className="flex inline-flex flex-wrap underline decoration-dotted">GitHub/AirFusion45/AirFusion45<FaExternalLinkAlt className="ml-2 mt-1 text-2xl" /></a>
                </p>
            </div>
        </div>
    )
}