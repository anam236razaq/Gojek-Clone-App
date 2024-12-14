import React, { useState } from 'react'

const tabData = [
    {
        id: "user-app",
        label: "User App",
        images: [
            "Images/User Imgs/1.jpg",
            "Images/User Imgs/2.jpg",
            "Images/User Imgs/3.jpg",
            "Images/User Imgs/4.jpg",
      ],
    },
    {
        id: "driver-app",
        label: "Driver/Provider App",
        images: [
            "Images/Driver Imgs/1.jpg",
            "Images/Driver Imgs/2.jpg",
            "Images/Driver Imgs/3.jpg",
            "Images/Driver Imgs/4.jpg",
      ],
    },
    {
        id: "store-app",
        label: "Store App",
        images: [
            "Images/Store Imgs/1.jpg",
            "Images/Store Imgs/2.jpg",
            "Images/Store Imgs/3.jpg",
            "Images/Store Imgs/4.jpg",
        ],
      },
    ];

export default function TabbedComponent() {
  const [activeTab, setActiveTab] = useState("user-app");
  return (
    <div className="container-fluid">
    <div className="my-5">
      <h4 className="heading-4">How Does the Gojek Clone Multi-Services App Work?</h4>
      <p className="paragraph text-center mb-4">
        You don’t have to deal with the technical complexities of acquiring the
        best app on the market anymore! With our advanced, fully-equipped
        Super App, we've simplified the process for you. This all-in-one
        solution has been meticulously crafted after years of refining
        industry needs, resulting in an intuitive and efficient Gojek clone
        Super app script. It caters seamlessly to users, service providers,
        and app owners alike. To give you a clearer understanding, let’s
        explore the wide range of services included in this app. Let’s dive
        in!
      </p>

      <ul className="nav justify-content-center">
        {tabData.map(({ id, label }) => (
          <li className="nav-item" key={id}>
            <button
              className={`btn-tab nav-link me-3 ${activeTab === id ? "active" : ""}`}
              onClick={() => setActiveTab(id)}
            >
              {label}
            </button>
            </li>
          ))}
      </ul>

      <div className="tab-content">
        {tabData.map(({ id, images }) => (
            <div key={id} className={`container-fluid tab-pane fade ${activeTab === id ? "show active" : ""}`}>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 my-3">
                {images.map((src, index) => (
                  <div className="col mt-4" key={index}>
                    <div className="img-tab mt-4 mt-sm-0">
                      <img src={src} alt="" style={{ width: "100%" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}
