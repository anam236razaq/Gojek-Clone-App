import React from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import {Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { ImStarFull } from 'react-icons/im';

const testimonials= [
      {
        "img": "Images/testimonialmgs/img-1.jpg",
        "quote": "I’ve been using it for my business trips, and I’ve been thoroughly impressed. The service is always on time, and the drivers know the best routes to avoid heavy traffic.",
        "rating": 5,
        "name": "John Doe"
      },
      {
        "img": "Images/testimonialmgs/img-2.jpg",
        "quote": "As a frequent traveler, it has been a huge help. The ease of booking a ride, the cleanliness of the cars, and the professionalism of the drivers make it my top choice every time.",
        "rating": 5,
        "name": "James Anderson"
      },
      {
        "img": "Images/testimonialmgs/img-3.jpg",
        "quote": "It offers more than just a ride; they provide an experience. The vehicles are comfortable, and the drivers are courteous. Plus, their flexible payment options make it more convenient.",
        "rating": 5,
        "name": "Michael Davis"
      },
      {
        "img": "Images/testimonialmgs/img-5.jpg",
        "quote": "I’ve been using it for months now, and the experience has been fantastic. The cars are always clean, and the drivers are professional. I love the flexibility they offer.",
        "rating": 5,
        "name": "Emily Johnson"
      },
      {
        "img": "Images/testimonialmgs/img-6.jpg",
        "quote": "It offers an incredible service! Their app is user-friendly, and the ability to track your ride in real time gives me peace of mind. It is a game-changer for me to book a ride at any time.",
        "rating": 5,
        "name": "Sarah Williams"
      },
      {
        "img": "Images/testimonialmgs/img-4.jpg",
        "quote": "I’ve tried several taxi services, but it stands out for its reliability. The seamless app interface, along with excellent customer support, has made me a loyal customer.",
        "rating": 5,
        "name": "William Harris"
      },
      {
        "img": "Images/testimonialmgs/img-7.png",
        "quote": "The customer service on it is top-notch. Every time I need assistance, they’re quick to respond and resolve any issues. It’s rare to find such a reliable service these days!",
        "rating": 5,
        "name": "Ava Thompson"
      },
      {
        "img": "Images/testimonialmgs/img-8.png",
        "quote": "It has made my daily commute so much easier. I never have to worry about hailing a cab or waiting in long lines. And I can rely on it no matter where I'm headed.",
        "rating": 5,
        "name": "Olivia Martinez"
      }
]
  
export default function Testimonials() {
  return (
    <div className="my-5">
        <h4 className="heading-4">Client Testimonials</h4>
        <p className="paragraph text-center">Hear what our clients have to say about our services and the quality of our products right here. Please note that these testimonials have only been posted after appropriate permissions from them.</p>
        <Swiper className="mySwiper" slidesPerView={4} spaceBetween={20} loop={true}
            pagination={{el: '.swiper-pagination', clickable: true}}
            navigation={{nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'}}
            autoplay={{delay: 20000, disableOnInteraction: false}}
            breakpoints={{0: {slidesPerView: 1, spaceBetween: 20},
                576: {slidesPerView: 2}, 768: {slidesPerView: 3}, 992: {slidesPerView: 4}}}
            modules={[Navigation, Pagination, Autoplay]}>
            {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                    <div className="testimonial-item">
                        <img src={testimonial.img} className="testimonial-img" alt={testimonial.name} />
                        <div className="d-flex flex-column align-items-center justify-content-center text-black">
                            <p className="paragraph mx-2 text-center">
                                <FaQuoteLeft className='me-1 mb-1' style={{ color: '#ff7000' }}/>
                                    {testimonial.quote}
                                <FaQuoteRight className='ms-1 mt-1' style={{ color: '#ff7000' }}/>
                            </p>
                            <div style={{ color: '#FFD700', fontSize: '14px' }}>
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <ImStarFull key={i} />
                                ))}
                            </div>
                            <h5 className="mb-3 mt-1" style={{ color: '#ff7000', fontWeight: 600, fontSize: '17px' }}>{testimonial.name}</h5>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
            <div className="swiper-pagination"></div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
        </Swiper>
    </div>
    )
}
