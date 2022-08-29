import './ContactMePage.css'
import { FiInstagram } from 'react-icons/fi'
import { AiFillLinkedin } from "react-icons/ai"
import { AiFillGithub } from "react-icons/ai"
import { SiGmail } from "react-icons/si"

const ContacMePage = () => {
    return (
        <div className="contactMe">
            <h1 className='contactMe_title'>if you need me, i'm here</h1>
            <a className='contactMe_box' href="https://www.linkedin.com/in/arian-najafi-01980b211/">
                <AiFillLinkedin className='contactMe_icons' /> linkden
            </a>
            <a className='contactMe_box' href="https://github.com/ArianNajafi">
                <AiFillGithub className='contactMe_icons' /> github
            </a>
            <a className='contactMe_box' href=''>
                <SiGmail className='contactMe_icons' /> gmail
            </a>
            <a className='contactMe_box' href='https://instagram/arian_najafii'>
                <FiInstagram className='contactMe_icons' /> instagram
            </a>
        </div>
    );
}

export default ContacMePage;