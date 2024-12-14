import React from 'react'

export default function Header({settings}) {
  return (
    <div className="container-fluid" style={{ backgroundColor: '#f3ddcd' }}>
    <div className="row">
      <div className="col-12 col-lg-5 order-2 order-lg-1 py-4">
        <h4 style={{ color: '#ff7000', fontWeight: 600, fontSize: '28px' }}>
          {settings.header_title}
        </h4>
        <strong style={{ fontSize: '20px' }}>101+ Services in a Single App</strong>
        <p style={{fontSize: '18px', lineHeight: '26px'}}>
          Our GoJek Clone Super App is a game-changing app designed to help you
          achieve financial success quickly and effortlessly. This Super App offers
          over 101 essential and outstanding services, including taxi rides,
          transportation, logistics, doorstep delivery of food and groceries, online
          video consultations with experts, money transfers, service bidding, carpooling,
          real estate transactions (buy, sell, rent), medical services, and much more.
          These exceptional services are organized into 14 categories, with 4 being
          core components and 10 additional ones. Our GoJek Clone Super App is built
          with cutting-edge features that are immensely popular worldwide, attracting
          a growing number of users daily. More users mean more bookings per hour,
          which translates to increased commissions and profits for you. If your goal
          is to launch a GoJek-like business in just 14 days and pave your way to becoming
          a billionaire, we’d be thrilled to collaborate with you on this incredible
          journey. Let’s make your dream project a reality!
        </p>
        <div className="btns-items">
          <div className="mt-2 d-flex flex-column flex-sm-row">
            <button className="btn-header me-2 mb-2 mb-sm-0">Application Flow</button>
            <button className="btn-header me-2">Live Demo</button>
          </div>
          <div className="mt-lg-3 mt-2 d-flex flex-column flex-sm-row">
            <button className="btn-header me-2 mb-2 mb-sm-0">Pricing</button>
            <button className="btn-header me-2">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-7 order-1 order-lg-2 py-4 d-flex align-items-center justify-content-between">
        <img src="Images/header.png" alt="Gojek Clone App" style={{ width: '100%' }} />
      </div>
    </div>
  </div>
  )
}
