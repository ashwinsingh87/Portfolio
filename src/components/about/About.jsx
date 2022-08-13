import React from 'react'
import './about.css'
import ME from '../../assests/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id = "about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
    <div className="container about__container">
    <div className="about__me">
      <div className="about__me-image">
        <img src={ME} alt="About Image" />
      </div>
    </div>
    <div className="about__content">
      <div className="about__cards">

        <article className='about__card'>
          <FaAward className="about__icon"/>
          <h5>Experience</h5>
          <small>0 Year Working</small>
        </article> 
        
        <article className='about__card'>
          <FaUsers className="about__icon"/>
          <h5>Clients</h5>
          <small>0 Worldwide</small>
        </article> 
        
        <article className='about__card'>
          <VscFolderLibrary className="about__icon"/>
          <h5>Projects</h5>
          <small>5+ Projects Submitted</small>
        </article>
      </div>
    <p>
    After being highly curious in technologies, i have tried many things and science behind that made me into the algorithms and website development which are now the part of my life. I will be using these knowledge to move in a positive direction for the company.    
    </p>
    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
    </div>

    </section>
  )
}

export default about