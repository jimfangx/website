import { FaGithub, FaLinkedinIn, FaDiscord, FaTwitter } from "react-icons/fa";
import { SiEyeem } from "react-icons/si";
import Tooltip from '@mui/material/Tooltip';

export default function Socials() {
    return (
        <div className='flex justify-center text-6xl'>
            <a href='https://github.com/AirFusion45' target='_blank' rel='noreferrer' className='flex flex-row justify-between m-4'>
                <FaGithub />
            </a>
            <a href='https://www.linkedin.com/in/jim-fang/' target='_blank' rel='noreferrer' className='flex flex-row justify-between m-4'>
                <FaLinkedinIn />
            </a>
            <a href='https://twitter.com/airfusionjfa' target='_blank' rel='noreferrer' className='flex flex-row justify-between m-4'>
                <FaTwitter />
            </a>
            <div className='flex flex-row justify-between m-4'>
                <Tooltip title="AirFusion#1706" arrow>
                    <a href='#'>
                        <FaDiscord data-tooltip-target="tooltip" />
                    </a>
                </Tooltip>
            </div>
            <a href='https://www.eyeem.com/u/airfusion' target='_blank' rel='noreferrer' className='flex flex-row justify-between m-4'>
                <SiEyeem />
            </a>
        </div>
    )
}
