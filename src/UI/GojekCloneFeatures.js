import React, { useState } from 'react'
import { FaEye } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function GojekCloneFeatures() {
const[dynamicImg, setDynamicImg] = useState('Images/gojek-clone-app_.png');

function handleImageChange(newImageSrc){
    setDynamicImg(newImageSrc);
}

  return (
    <div className="container-fluid">
      <div className="mt-5">
        <h4 className="heading-4">Explore Every Feature Gojek Super App</h4>
        <p className="paragraph text-center mb-4">
          Watch the videos below to learn about the Gojek Clone Super App. The center
          video gives an overview, while the left and right videos explain the seven
          main components in detail, with subtitles for better understanding.
        </p>
        <div className="row">

          {/* Left Section */}
          <div className="col-12 col-lg-4 order-lg-1 order-2">
            <div className="d-flex align-items-center justify-content-center flex-column mt-4 mt-lg-0">
              <h5 style={{ color: "#ff7000", fontSize: "20px", fontWeight: 600 }}>
                Gojek Super App
              </h5>
              <strong>Base 4 Components</strong>
            </div>
            <div>
              {[
                { text: "Taxi – Uber-style ride-hailing and rentals.", img: "Images/FeatureImgs/taxi-booking.png" },
                { text: "Store Deliveries – Food, groceries, and more.", img: "Images/FeatureImgs/store-deliveries.png" },
                { text: "Parcel Delivery – Transport to any location.", img: "Images/FeatureImgs/parcel-delivery.png" },
                { text: "Over 50 On-Demand Services", img: "Images/FeatureImgs/on-demand-services.png" },
              ].map((item, index) => (
                <div className="card card-padding" key={index}>
                  <div className="card-body">
                    <p className="card-text aspect-paragraph">{item.text}</p>
                  </div>
                  <Link to="/" className="eye-img img-right" onClick={(e)=>{
                    e.preventDefault();
                    handleImageChange(item.img); }}>
                    <FaEye style={{fontSize: '19px'}}/>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Center Section */}
          <div className="col-12 col-lg-4 d-flex align-items-center justify-content-start flex-column mt-4 mt-lg-0 order-1 order-lg-2">
            <h5 style={{ color: "#ff7000", fontSize: "20px", fontWeight: 600 }}>
              Gojek Super App
            </h5>
            <strong>Multi-Billion Dollar Enterprise</strong>
            <div style={{ marginTop: "0.80rem" }}>
                <img src={dynamicImg} alt="Gojek Clone App" style={{ width: "310px", height: "auto" }}/>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-12 col-lg-4 order-3 order-lg-3">
            <div className="d-flex align-items-center justify-content-center flex-column mt-4 mt-lg-0">
              <h5 style={{ color: "#ff7000", fontSize: "20px", fontWeight: 600 }}>
                Gojek Super App
              </h5>
              <strong>Paid 10 Components</strong>
            </div>
            <div>
              {[
                { text: "Delivery Genie & Runner - Personal Shopper", img: "Images/FeatureImgs/genie-or-runner.png" },
                { text: "Online Video Consultations for Over 10 Services", img: "Images/FeatureImgs/video-consult.png" },
                { text: "Real-Time Bidding for Over 10 Services", img: "Images/FeatureImgs/bid-for-services.png" },
                { text: "Purchase, Lease, and Rent Properties", img: "Images/FeatureImgs/rent-real-estate.png" },
                { text: "Purchase, Lease, and Trade Vehicles", img: "Images/FeatureImgs/rent-cars.png" },
                { text: "Purchase, Sell, and Rent Various Goods", img: "Images/FeatureImgs/rent-general-items.png" },
                { text: "Medical Services", img: "Images/FeatureImgs/medical-services.png" },
                { text: "Track Family and Employees", img: "Images/FeatureImgs/track-your-family.png" },
                { text: "Ride Share-Car Pool", img: "Images/FeatureImgs/car-pool.png" },
                { text: "Nearby Businesses", img: "Images/FeatureImgs/nearby-businesses.png" },
              ].map((item, index) => (
                <div className="card" key={index}>
                  <div className="card-body pt-2 pb-2">
                    <p className="card-text aspect-paragraph">{item.text}</p>
                  </div>
                  <Link to="/" className="eye-img img-left" onClick={(e) => {
                    e.preventDefault();
                    handleImageChange(item.img);}}>
                    <FaEye  style={{fontSize: '19px'}}/>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
