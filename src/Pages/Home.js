import React from 'react'
import Navbar from '../UI/Navbar'
import Header from '../UI/Header'
import Footer from '../UI/Footer'
import Copyright from '../UI/Copyright'
import TabbedComponent from '../UI/TabbedComponent'
import GojekCloneFeatures from '../UI/GojekCloneFeatures'
import FAQs from '../UI/FAQs'
import Testimonials from '../UI/Testimonials'
import { IoChevronDownSharp } from 'react-icons/io5'

export default function Home({settings}) {
  return (
    <>
        <Navbar />
        <Header settings={settings}/>
        <BaseComponents />
        <AdvancedComponents />
        <GojekClonePackage />
        <TabbedComponent />
        <BusinessModels />
        <GojekCloneFeatures />
        <FAQs />
        <Testimonials />
        <AccordionParagraph />
        <Footer settings={settings}/>
        <Copyright settings={settings}/>
    </>
  )
}

const cardData = [
  {
    backgroundColor: "#f5f9ff",
    imgSrc: "Images/baseComponentsImgs/taxi-booking.png",
    heading: "Taxi Booking",
    description:
      "Our app provides a seamless way for users to book taxi rides, rentals, and taxi pool services, offering a convenient experience similar to Uber.",
  },
  {
    backgroundColor: "#fdf5f5",
    imgSrc: "Images/baseComponentsImgs/parcel-delivery.png",
    heading: "Send Anything",
    description:
      "Our app allows users to easily send parcels, whether it's documents, furniture, or cement bags, from one location to another within city.",
  },
  {
    backgroundColor: "#f5fffa",
    imgSrc: "Images/baseComponentsImgs/store-delivery.png",
    heading: "Store Deliveries",
    description:
      "Users can conveniently order a wide range of items online, including food, groceries, and stationery, for the doorstep delivery.",
  },
  {
    backgroundColor: "#f6f5ff",
    imgSrc: "Images/baseComponentsImgs/ondemand-service.png",
    heading: "On-Demand Services",
    description:
      "Users can schedule on-demand services for a future date and time, such as professional car washes, beauticians, and babysitters.",
  },
];

function BaseComponents(){
  return (
    <div className="container-fluid my-5">
      <h4 className="heading-4">What App includes</h4>
      <div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 d-flex mt-4">
        {cardData.map((card, index) => (
          <div key={index} className="col mt-4 mt-lg-0">
              <div className="card-items" style={{ backgroundColor: card.backgroundColor}}>
                <div className="card-imgs">
                  <div className="round position-absolute m-auto"></div>
                  <img src={card.imgSrc} alt={card.heading} style={{ width: "100%" }} />
                </div>
                <strong className="card-heading">{card.heading}</strong>
                <p className="card-paragraph">{card.description}</p>
              </div>
          </div>
        ))}
      </div>
  </div>
  )
}

const advancedCardData = [
  {
    backgroundColor: "#f9fff4",
    imgSrc: "Images/advanceComponentImgs/genie.png",
    heading: "Delivery Genie & Runner",
    description:
      "Try our Delivery Genie service, where we deliver items to your doorstep, or opt for our Runner service to handle your errands.",
  },
  {
    backgroundColor: "#f4fdff",
    imgSrc: "Images/advanceComponentImgs/video-consult.png",
    heading: "Online Video Consultation",
    description:
      "Book video consultations with experts such as tutors, yoga instructors, lawyers, and astrologers through our app easily.",
  },
  {
    backgroundColor: "#fcf9f2",
    imgSrc: "Images/advanceComponentImgs/bidding.png",
    heading: "Bid for Services",
    description:
      "Handymen can bid in real-time on tasks posted by users, creating a competitive marketplace. Users can choose the best one based on bids.",
  },
  {
    backgroundColor: "#f5f9ff",
    imgSrc: "Images/advanceComponentImgs/real_estate.png",
    heading: "Buy, Sell, & Rent Real Estate",
    description:
      "Want to sell or rent your property? List it on our app to reach potential buyers or renters easily.",
  },
  {
    backgroundColor: "#fdf5f5",
    imgSrc: "Images/advanceComponentImgs/car-rental.png",
    heading: "Buy, Sell, & Rent Cars",
    description:
      "Our app offers a platform for anyone looking to sell or rent their cars, making it easy to post listings and connect with buyers or renters.",
  },
  {
    backgroundColor: "#f6f5ff",
    imgSrc: "Images/advanceComponentImgs/furniture.png",
    heading: "Buy, Sell, & Rent General Items",
    description:
      "Looking to sell or rent furniture, lawn tools, or heavy machinery? List them on our app and connect with potential buyers.",
  },
  {
    backgroundColor: "#f5fffa",
    imgSrc: "Images/advanceComponentImgs/car-pool.png",
    heading: "CarPool",
    description:
      "Share your ride by offering CarPool seats to others heading to the same destination and earn money for each online booking.",
  },
  {
    backgroundColor: "#f9fff4",
    imgSrc: "Images/advanceComponentImgs/health-care.png",
    heading: "Medical Services",
    description:
      "Easily book video consultations with doctors, schedule appointments, order medicines, or arrange an ambulance—all in one click.",
  },
  {
    backgroundColor: "#f4fdff",
    imgSrc: "Images/advanceComponentImgs/way.png",
    heading: "Track Family & Employees",
    description:
      "Monitor the real-time locations of your family members and employees on the map, ensuring you stay updated on their whereabouts at all times.",
  },
  {
    backgroundColor: "#f5f9ff",
    imgSrc: "Images/advanceComponentImgs/nearby-businesses.png",
    heading: "Nearby Businesses",
    description:
      "Discover nearby cafes, malls, salons, hospitals, and more, and easily find them on the map, just like using 'The Real Yellow Pages.'",
  },
];

function AdvancedComponents(){
  return (
    <div className="container-fluid my-5">
      <h4 className="heading-4">Advanced Gojek Clone Super App Components</h4>
      <div className="row row-cols-1 row-cols-lg-5 row-cols-sm-2 d-flex mt-4">
        {advancedCardData.map((card, index) => (
            <div key={index} className="col mt-4">
              <div className="card-items" style={{ backgroundColor: card.backgroundColor }}>
                <div className="card-imgs">
                  <div className="round position-absolute m-auto"></div>
                  <img src={card.imgSrc} alt={card.heading} style={{ width: "100%" }} />
                </div>
                <strong className="card-heading">{card.heading}</strong>
                <p className="card-paragraph">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
  </div>
  )
}


function GojekClonePackage(){
  return (
  <div className="container-fluid py-5" style={{ backgroundColor: 'rgb(243, 242, 242)' }}>
    <h4 className="heading-4">What do We Provide with Our Gojek Clone SuperApp Script?</h4>
    <p className="paragraph text-center mb-4">
      If you have been wondering what should make you trust us, look at everything we offer you and then decide for yourself.
    </p>
    <div className="row row-cols-1 row-cols-lg-5 row-cols-sm-2 row-cols-md-3 d-flex align-items-center justify-content-center mt-4">
      <div className="col">
        <div className="card">
          <div className="d-flex align-items-center justify-content-center">
            <img className="my-3" src="Images/PackageImgs/cat_user.svg" alt="User" style={{ width: '25%' }} />
          </div>
          <strong className="card-heading">User App</strong>
          <ul className="mt-3 card-list-items">
            <li>IOS App for User</li>
            <li>Android App for User</li>
            <li>Web Panel for User</li>
            <li>Android Kiosk App for Taxi Booking</li>
            <li>iWatch App for Taxi Booking</li>
          </ul>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <div className="d-flex align-items-center justify-content-center">
            <img className="my-3" src="Images/PackageImgs/mechanic.svg" alt="Driver" style={{ width: '25%' }} />
          </div>
          <strong className="card-heading">Driver/Service Provider App</strong>
          <ul className="mt-3 card-list-items">
            <li>IOS App for Driver Provider</li>
            <li>Android App for Provider</li>
            <li>Web Panel for Provider</li>
          </ul>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <div className="d-flex align-items-center justify-content-center">
            <img className="my-3" src="Images/PackageImgs/store.svg" alt="Store" style={{ width: '25%' }} />
          </div>
          <strong className="card-heading">Store Apps</strong>
          <ul className="mt-3 card-list-items">
            <li>IOS App for Store</li>
            <li>Android App for Store</li>
            <li>Web Panel for Store</li>
            <li>Android Kiosk App for Restaurants for Food Ordering</li>
          </ul>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <div className="d-flex align-items-center justify-content-center">
            <img className="my-3" src="Images/PackageImgs/cat_user.svg" alt="Admin" style={{ width: '25%' }} />
          </div>
          <strong className="card-heading">Website & Admin Panel</strong>
          <ul className="mt-3 card-list-items">
            <li>Main Website</li>
            <li>Dispatcher Panel</li>
            <li>Billing Accounts Panel</li>
            <li>Administrator Panel</li>
          </ul>
        </div>
      </div>
      <div className="col">
        <div className="card d-flex align-items-center">
          <div className="d-flex align-items-center justify-content-center">
            <img className="my-3" src="Images/PackageImgs/support-team.svg" alt="Support" style={{ width: '25%' }} />
          </div>
          <strong className="card-heading">Supporting Panels</strong>
          <ul className="mt-3 card-list-items">
            <li>Corporate Organization Panel</li>
            <li>Hotel-Tourist Taxi Booking Panel</li>
            <li>Service Provider Company Owner Panel</li>
            <li>User Web-based panel for Taxi Booking & Food & Grocery Delivery</li>
            <li>Tracking Android App</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  )
}

function BusinessModels(){
  return(
  <div className="container-fluid py-5" style={{ backgroundColor: '#f3ddcd' }}>
    <h4 className="heading-4">WHY OPT FOR OUR GOJEK CLONE SUPER APP SCRIPT?</h4>
    <p className="paragraph text-center mb-4">
      The core goal of any business is to generate substantial revenue, but our white-labeled on-demand multi-services Gojek Clone Super App Script offers more. This Super App Clone is designed not only to help you earn but also to empower local service providers, fostering prosperity within your community and region. By doing so, you actively contribute to the growth and betterment of your community, region, and country.
    </p>
    <div className="row">
      <div className="paragraph col-12 col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
        <strong>The business model is as below:</strong>
        <ol type="A" className="models-list">
          <li>The app offers multiple income provisions</li>
          <li>The core model operates on commission generation, meaning every time a service provider is booked through your app, you earn a commission.</li>
          <li>There are additional ways to generate income as well.</li>
          <li>If you own your own services business, you can also set it up in the app and continue to offer services and earn money.</li>
          <li>
            The app benefits everyone: service providers gain a new digital platform to grow their business without investing in their own app, customers enjoy seamless service with fewer registrations and logins, and the app owner thrives as the platform attracts more service providers and customers booking services.
          </li>
        </ol>
      </div>
      <div className="col-12 col-lg-6 order-1 order-lg-2 d-flex align-items-center justify-content-center">
        <img src="Images/business-model-img.png" alt="Business Model" style={{ width: '80%' }} />
      </div>
    </div>
  </div>
  )
}

function AccordionParagraph(){
  return (
  <div className="accordion">
    <div className="accordion-item d-flex align-items-center justify-content-center flex-column border-0">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed collapsePgh-btn me-3"
          style={{ backgroundColor: '#3a6b9b', color: 'white' }} type="button"
          data-bs-toggle="collapse" data-bs-target="#collapsePgh"
          aria-expanded="false" aria-controls="collapsePgh">
            Gojek Clone Multi-Service App: The Secret to a Successful Business
            <IoChevronDownSharp className='accordion-icon' style={{fontSize: '22px'}}/>
        </button>
      </h2>
      <div id="collapsePgh" className="accordion-collapse collapse">
        <div className="accordion-body" style={{ backgroundColor: 'rgb(241, 241, 241)' }}>
          <p className="paragraph mb-1">
            In today’s digitally-driven world, the demand for doorstep deliveries and quick services has surged, and it’s easy to understand why. Whether it’s a taxi ride, a delivery, or professional services, having everything available at your fingertips can truly be a game-changer.
            <br />
            With the growing on-demand market, mobile apps have evolved beyond mere convenience; they now focus on delivering enhanced and personalized user experiences. Research shows that the demand for home services is projected to rise significantly between 2023 and 2027, with its market value reaching USD 7.70 billion. Another study suggests that the on-demand ride-hailing market will reach a valuation of USD 202.20 billion by 2027.
            <br />
            These statistics clearly indicate that on-demand apps like Gojek will soon become an essential part of daily life. So, if you're considering a business venture or wondering whether to launch a multi-service app like Gojek, this is the perfect time to invest in a pre-built app solution.
          </p>
          <br />
          <h4 style={{ fontSize: '18px', fontWeight: 600 }}>Simplify Lives with a Single App</h4>
          <p className="paragraph">
            Managing multiple apps for different services can be overwhelming. From taxi rides to food delivery, it’s like juggling a digital circus. A multi-service app consolidates all "on-demand" needs into one convenient platform, making life easier for your users.
          </p>
          <h4 style={{ fontSize: '18px', fontWeight: 600 }}>What is a Gojek Clone Super App?</h4>
          <p className="paragraph">
            Gojek is a popular on-demand app in Southeast Asia, offering 20+ services like transport, delivery, and payments. Known as a “Super App,” it dominates markets in countries like Indonesia, Thailand, and Vietnam. However, much of the global market remains untapped—creating a golden opportunity for you! Launching your multi-service app lets you expand your reach and take advantage of this vast potential.
          </p>
          <h4 style={{ fontSize: '18px', fontWeight: 600 }}>How Does a Multi-Service App Benefit Your Business?</h4>
          <ul className="paragraph custom-list">
            <li>
              <strong>Boost Revenue Streams:</strong>
              <p className="mb-1">Earn through commissions, subscription fees, surge pricing, and more.</p>
            </li>
            <li>
              <strong>Attract More Users:</strong>
              <p className="mb-1">Offer a variety of services—ride-hailing, food delivery, video consultations, and more—to appeal to diverse audiences.</p>
            </li>
            <li>
              <strong>Enhance Brand Visibility:</strong>
              <p className="mb-1"> A super app establishes your business as a trustworthy, recognizable brand.</p>
            </li>
            <li>
              <strong>Increase Customer Loyalty:</strong>
              <p className="mb-1">Simplify life for users by combining multiple services in one place.</p>
            </li>
            <li>
              <strong>Streamline Operations:</strong>
              <p className="mb-1">Automate key tasks like order management, notifications, and user handling to save time and resources.</p>
            </li>
          </ul>
          <h4 style={{ fontSize: '18px', fontWeight: 600 }}>Go Beyond Booking Convenience</h4>
          <ul className="paragraph custom-list">
            <li>
              <strong>Live Tracking:</strong>
              <p className="mb-1">Real-time ride and delivery updates on lock screens (iOS).</p>
            </li>
            <li>
              <strong>Gift Cards:</strong>
              <p className="mb-1">Allow users to share redeemable gift cards.</p>
            </li>
            <li>
              <strong>Biometric Login:</strong>
              <p className="mb-1">Simplify access with Face ID or fingerprint recognition.</p>
            </li>
            <li>
              <strong>Task Verification:</strong>
              <p className="mb-1">Start tasks only with an OTP for added security.</p>
            </li>
            <li>
              <strong>User Rewards:</strong>
              <p className="mb-1">Let users earn and redeem coins for their next bookings.</p>
            </li>
          </ul>
          <h4 style={{ fontSize: '18px', fontWeight: 600 }}>Services Offered in Our Multi-Service App</h4>
          <ul className="paragraph custom-list">
            <li>
              <strong>Real Estate: Buy, Sell, Rent:</strong>
              <p className="mb-1">Facilitate direct transactions for residential and commercial properties, avoiding middlemen.</p>
            </li>
            <li>
              <strong>Cars: Buy, Sell, Rent:</strong>
              <p className="mb-1">Enable users to trade or rent cars effortlessly, cutting out agent commissions.</p>
            </li>
            <li>
              <strong>General Items: Buy, Sell, Rent:</strong>
              <p className="mb-1">Offer a platform to trade or rent items like furniture, electronics, and appliances.</p>
            </li>
            <li>
              <strong>Carpooling:</strong>
              <p className="mb-1">Let users find or offer shared rides, book online, and track drivers in real time.</p>
            </li>
            <li>
              <strong>On-Demand Medical Services:</strong>
              <p className="mb-1">Provide access to services like doctor consultations, medicine delivery, and ambulances.</p>
            </li>
            <li>
              <strong>Family and Employee Tracking:</strong>
              <p className="mb-1">Allow real-time tracking for security and efficiency monitoring.</p>
            </li>
            <li>
              <strong>Nearby Businesses:</strong>
              <p className="mb-1">Help users discover local businesses with essential details like location and hours.</p>
            </li>
          </ul>
          <h4 style={{ fontSize: '18px', fontWeight: 600 }}>Essential Modules in the Package</h4>
          <ul className="paragraph custom-list">
            <li>
              <strong>User App:</strong>
              <p className="mb-1">Facilitate direct transactions for residential and commercial properties, avoiding middlemen.</p>
            </li>
            <li>
              <strong>Provider/Driver App:</strong>
              <p className="mb-1">Manage bookings, earnings, and schedules.</p>
            </li>
            <li>
              <strong>Store Apps:</strong>
              <p className="mb-1">For businesses to handle orders, inventory, and reports.</p>
            </li>
            <li>
              <strong>Website:</strong>
              <p className="mb-1">Enables users to book services online.</p>
            </li>
            <li>
              <strong>Admin Panel:</strong>
              <p className="mb-1">A centralized dashboard for all business activities.</p>
            </li>
          </ul>
          <h4 style={{ fontSize: '18px', fontWeight: 600 }}>Ready to Launch Your Gojek-Like App?</h4>
          <ul className="paragraph custom-list">
            <li>
              <strong>Test the Demo:</strong>
              <p className="mb-1">Experience the app’s functionality firsthand—no time limits!</p>
            </li>
            <li>
              <strong>White-label the Solution:</strong>
              <p className="mb-1">Customize with your branding, preferred features, and payment methods.</p>
            </li>
            <li>
              <strong>Deploy and Launch:</strong>
              <p className="mb-1">We’ll submit your app to App Stores and servers under your accounts, giving you full control.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  )
}