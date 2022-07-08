import { FaExternalLinkAlt } from "react-icons/fa";
export default function About() {
    return (
        <div>
            <h1 className="text-5xl underline decoration-double pb-5">Contact</h1>
            <div className="text-xl">
                <p className="pb-3">
                    Don&#39;t hesitate to reach out! I would love to hear from you!
                </p>
                <p className="pb-2">
                    Email: <a href="mailto:jim@airfusion.dev" className="underline decoration-dotted">jim@airfusion.dev</a>
                </p>
                <p className="pb-2">
                    Twitter: <a href="https://twitter.com/airfusionjfa" target='_blank' rel='noreferrer' className="flex inline-flex flex-wrap underline decoration-dotted">airfusionjfa<FaExternalLinkAlt className="ml-2 mt-1 text-xl" /></a>
                </p>
                <p className="pb-2">
                    Discord: AirFusion#5112
                </p>
                <p>
                    Open an issue in my home repo: <a href="https://github.com/AirFusion45/AirFusion45" target='_blank' rel='noreferrer' className="flex inline-flex flex-wrap underline decoration-dotted">GitHub/AirFusion45/AirFusion45<FaExternalLinkAlt className="ml-2 mt-1 text-xl" /></a>
                </p>
            </div>
        </div>
    )
}