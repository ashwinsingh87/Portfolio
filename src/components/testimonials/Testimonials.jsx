import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assests/avatar1.jpg'
import AVTR2 from '../../assests/avatar2.jpg'
import AVTR3 from '../../assests/avatar3.jpg'
import AVTR4 from '../../assests/avatar4.jpg'

import { Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


const data =[
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae animi adipisci, unde, consequuntur optio perferendis minima placeat enim sint, deserunt odio tempore dolores illo temporibus mollitia nostrum a voluptas debitis!'
  },
  {
    avatar: AVTR2,
    name: 'Lisa Munac',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae animi adipisci, unde, consequuntur optio perferendis minima placeat enim sint, deserunt odio tempore dolores illo temporibus mollitia nostrum a voluptas debitis!'
  },
  {
    avatar: AVTR3,
    name: 'James Rodrigues',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae animi adipisci, unde, consequuntur optio perferendis minima placeat enim sint, deserunt odio tempore dolores illo temporibus mollitia nostrum a voluptas debitis!'
  },
  {
    avatar: AVTR4,
    name: 'Alex Pandlar',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae animi adipisci, unde, consequuntur optio perferendis minima placeat enim sint, deserunt odio tempore dolores illo temporibus mollitia nostrum a voluptas debitis!'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
      {
          data.map(({avatar, name ,review},index)=> {
            return (
              <SwiperSlide key={index} className='testimonial'>
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
              <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
            </SwiperSlide>
            )
          })
     
}
      </Swiper>

    </section>
  )
}

export default Testimonials