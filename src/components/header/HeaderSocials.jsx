import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/ashwin-singh-552025208/" target="_blank "><BsLinkedin/></a>
        <a href="https://github.com/ashwinsingh87" target = "_blank"><FaGithub/></a>
        <a href="https://www.instagram.com/ashwinsingh0807/" target = "_blank"><BsInstagram/></a>

    </div>
  )
}

export default HeaderSocials