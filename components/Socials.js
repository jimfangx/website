import { FaGithub, FaLinkedinIn, FaDiscord, FaTwitter } from "react-icons/fa";
import { SiEyeem } from "react-icons/si";
import Tooltip from '@mui/material/Tooltip';

export default function Socials() {
    return (
        <div className='flex justify-center text-6xl animate-fade'>

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
                <Tooltip title="AirFusion#1706" arrow>
                    <a href='https://www.discordapp.com/users/280148284826189827' target='_blank' rel='noreferrer'>
                        <FaDiscord data-tooltip-target="tooltip" />
                    </a>
                </Tooltip>
            </div>

            <div className='flex flex-row justify-between m-4'>
                <Tooltip title="airfusion" arrow>
                    <a href='https://www.eyeem.com/u/airfusion' target='_blank' rel='noreferrer'>
                        <SiEyeem />
                    </a>
                </Tooltip>
            </div>
        </div >
    )
}
