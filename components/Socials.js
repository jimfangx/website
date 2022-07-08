import { FaGithub, FaLinkedinIn, FaDiscord, FaTwitter, FaUnsplash } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';

export default function Socials() {
    return (
        <div className='flex justify-center text-4xl animate-fade'>

            <div className='flex flex-row justify-between m-4'>
                <Tooltip title="AirFusion45" arrow>
                    <a href='https://github.com/AirFusion45' target='_blank' rel='noreferrer'>
                        <FaGithub />
                    </a>
                </Tooltip>
            </div>

            <div className='flex flex-row justify-between m-4'>
                <Tooltip title="jim-fang" arrow>
                    <a href='https://www.linkedin.com/in/jim-fang/' target='_blank' rel='noreferrer'>
                        <FaLinkedinIn />
                    </a>
                </Tooltip>
            </div>

            <div className='flex flex-row justify-between m-4'>
                <Tooltip title="airfusionjfa" arrow>
                    <a href='https://twitter.com/airfusionjfa' target='_blank' rel='noreferrer'>
                        <FaTwitter />
                    </a>
                </Tooltip>
            </div>

            <div className='flex flex-row justify-between m-4'>
                <Tooltip title="AirFusion#5112" arrow>
                    <a href='https://www.discordapp.com/users/528197530656440320' target='_blank' rel='noreferrer'>
                        <FaDiscord data-tooltip-target="tooltip" />
                    </a>
                </Tooltip>
            </div>

            <div className='flex flex-row justify-between m-4'>
                <Tooltip title="@airfusion" arrow>
                    <a href='https://unsplash.com/@airfusion' target='_blank' rel='noreferrer'>
                        <FaUnsplash />
                    </a>
                </Tooltip>
            </div>
        </div >
    )
}
