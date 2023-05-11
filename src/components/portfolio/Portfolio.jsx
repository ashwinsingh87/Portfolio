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
    id: 6,
    image: IMG3,
    title: 'Amazon Clone',
    github: 'https://github.com/ashwinsingh87/Amazon-clone.git',
    demo: false
  },

  {
    id: 3,
    image: IMG2,
    title: 'IMDB-Clone',
    github: 'https://github.com/ashwinsingh87/imdb-clone',
    demo: 'https://imdb-ashwin.netlify.app/'
  },
  {
    id: 4,
    image: IMG1,
    title: 'Video Application',
    github: 'https://github.com/ashwinsingh87/youtube-app.git',
    demo: 'https://ytvideoapp.netlify.app/'
  },
  {
    id: 5,
    image: IMG6,
    title: 'Food App',
    github: 'https://github.com/ashwinsingh87/FoodApp.git',
    demo: false
  },
  {
    id: 1,
    image: IMG4,
    title: 'Tesla-Clone',
    github: 'https://github.com/ashwinsingh87/tesla-redux',
    demo: 'https://tesla-ashwin.netlify.app/'
  },
  {
    id: 2,
    image: IMG5,
    title: 'Portfolio Website',
    github: 'https://github.com/ashwinsingh87/Portfolio',
    demo: 'https://ashwinsingh87.github.io/Portfolio/'
  },


]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                  {demo ? <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a> : null}
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