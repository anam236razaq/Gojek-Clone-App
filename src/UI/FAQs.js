import React, { useState } from 'react'
import { IoChevronDownSharp } from 'react-icons/io5';

const faqData = [
    {
        id:1,
        question: "What is Gojek Clone Super App?",
        answer:"The Multi-Service Super App provides a range of on-demand online services, including taxi rides, parcel/courier delivery, food delivery, grocery delivery, pharmacy delivery, and more. By combining multiple services into a single platform, it streamlines company operations, eliminating the need for separate apps and panels to manage different types of transactions.",
    },
    {
        id:2,
        question: "How much time will it take to launch my app after making the purchase?",
        answer:"As the app is fully ready, it only takes about a week to customize it with your logo, brand name, and company colors. Once that's done, we'll ask you to review it and share your feedback. If everything meets your expectations, we'll proceed with the launch!",
    },
    {
        id:3,
        question: "What is the payment process?",
        answer:"The app's business model enables you to earn a commission each time a service provider is hired through the app. When a user makes an online payment for a booked service, the full amount will be transferred to your account. From there, you'll need to pay the service provider after deducting any cash payments they've received.",
    },
    {
        id:4,
        question: "Is it possible to run multiple businesses with a single app?",
        answer:"We provide you with a licensed copy of the app’s source code, allowing you to launch a business under a single banner or logo with just one purchase.",
    },
    {
        id:5,
        question: "What if I prefer not to launch all 101 services at once?",
        answer:"That's perfectly fine! You can keep any number of services hidden for as long as you wish. Whenever you're ready to launch a new service, simply go to the admin panel and activate the desired services.",
    },
    {
        id:6,
        question: "Is it mandatory to offer services if I own the app?",
        answer:"The choice is entirely yours! You can choose to offer services yourself through the app, or simply earn commissions from the services provided by others. You also have the flexibility to decide the percentage of commission you want to earn per service.",
    },
    {
        id: 7,
        question: 'How can I get full white labeling with the Gojek clone Super app script?',
        answer: 'When you purchase the Gojek script from us, we offer you a comprehensive white labeling solution.',
    },
    {
        id: 8,
        question: 'Is your app listed on CodeCanyon?',
        answer:'No, our apps are not listed on CodeCanyon. If you come across someone selling them there or elsewhere, it is illegal and a scam. Purchasing such products from these scammers is also illegal and could lead to legal complications for you.',
    },
    {
        id: 9,
        question: 'Will the source code be included in the project delivery?',
        answer: 'Yes, you will receive the licensed source code once the project is delivered. It will not be provided while the team is still working on your project.',
    },
    {
        id: 10,
        question: 'Is the Gojek clone super app source code accessible on GitHub?',
        answer: 'No, the licensed code is not available through GitHub.',
    },
    {
        id: 11,
        question: 'What is the cost of the Gojek Clone Super App?',
        answer:'Please complete the inquiry form, and our sales team will provide you with the full list of Gojek Clone Super Apps along with their prices.',
    },
    {
        id: 12,
        question: 'Have you provided services to clients from Southeast Asian countries?',
        answer:'Due to our Non-Disclosure Agreement (NDA), we are unable to share the names of our clients or their application details. However, we have worked with numerous clients across Southeast Asia, particularly from countries such as Indonesia, the Philippines, Vietnam, Thailand, Myanmar (Burma), Malaysia, Cambodia, Laos, and Singapore.',
    },
    ];

export default function FAQs() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const firstHalf = faqData.slice(0, 6);
    const secondHalf = faqData.slice(6);

    return (
        <div className="accordion my-5 container-fluid">
            <h4 className="heading-4">Frequently Asked Questions (FAQs)</h4>
            <p className="paragraph text-center mb-4">
                We encourage our users to ask any questions they have about the app. To help you better understand our business and the app, here’s a list of the most frequently asked questions (FAQs).
            </p>
            <div className="row">
                <div className="col-12 col-lg-6">
                    {firstHalf.map((item) => (
                        <div className="accordion-item" key={item.id}>
                            <h2 className="accordion-header">
                                <button className={`accordion-button faq-button ${activeIndex === item.id ? '' : 'collapsed'}`} type="button"
                                    onClick={() => toggleAccordion(item.id)}>
                                    {item.question}
                                    <IoChevronDownSharp className={`accordion-icon ${activeIndex === item.id ? 'rotate' : ''}`} />
                                </button>
                            </h2>
                            <div className={`accordion-collapse collapse ${activeIndex === item.id ? 'show' : ''}`}
                                style={{ fontSize: '14px', color: 'rgb(11, 11, 11)', lineHeight: '25px' }}>
                                <div className="accordion-body">{item.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="col-12 col-lg-6 mt-lg-0 mt-3">
                    {secondHalf.map((item) => (
                        <div className="accordion-item" key={item.id}>
                            <h2 className="accordion-header">
                                <button className={`accordion-button faq-button ${activeIndex === item.id ? '' : 'collapsed'}`} type="button"
                                    onClick={() => toggleAccordion(item.id)}>
                                    {item.question}
                                    <IoChevronDownSharp className={`accordion-icon ${activeIndex === item.id ? 'rotate' : ''}`} />
                                </button>
                            </h2>
                            <div className={`accordion-collapse collapse ${activeIndex === item.id ? 'show' : ''}`}
                                style={{ fontSize: '14px', color: 'rgb(11, 11, 11)', lineHeight: '25px' }}>
                                <div className="accordion-body">{item.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
