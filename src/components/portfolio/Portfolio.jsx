import React from 'react'
import './portfolio.css'
import IMG1 from '../../assests/portfolio1.jpg'
import IMG2 from '../../assests/portfolio2.jpg'
import IMG3 from '../../assests/portfolio3.jpg'
import IMG4 from '../../assests/portfolio4.jpg'
import IMG5 from '../../assests/portfolio5.png'
import IMG6 from '../../assests/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Vehicle Detection',
    github: 'https://github.com/ashwinsingh87/VehicleDetection',
    demo: 'https://github.com/ashwinsingh87/VehicleDetection'
  },
  {
    id: 5,
    image: IMG6,
    title: 'File Organizer',
    github: 'https://github.com/ashwinsingh87/file-organizer',
    demo: 'https://github.com/ashwinsingh87/file-organizer'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Brick-Breaker-Game',
    github: 'https://github.com/ashwinsingh87/Brick-Breaker-',
    demo: 'https://github.com/ashwinsingh87/Brick-Breaker-'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Tesla Clone',
    github: 'https://github.com/ashwinsingh87/Tesla-clone',
    demo: 'https://github.com/ashwinsingh87/Tesla-clone'
  },
  {
    id: 2,
    image: IMG5,
    title: 'Portfolio Website',
    github: 'https://github.com/ashwinsingh87/Portfolio',
    demo: 'https://github.com/ashwinsingh87/Portfolio'
  },
  {
    id: 6,
    image: IMG2,
    title: 'Music Player Clone',
    github: 'https://github.com/ashwinsingh87/Musicplayer',
    demo: 'https://github.com/ashwinsingh87/Musicplayer'
  }
]

const Portfolio = () => {
  return (
    <section id ='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo})=>{
            return(
        <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
          <img src={image} alt={title} />
          </div>
            <h3>{title}</h3>
           <div className="portfolio__item-cta">
           <a href={github} className='btn' target= '_blank'>Github</a>
            <a href={demo} className='btn btn-primary'target= '_blank'>Live Demo</a>
           </div>
         
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio