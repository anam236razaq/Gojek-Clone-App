import React from 'react';
import { FaEnvelope, FaFacebook, FaLinkedin, FaPhoneAlt, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function Footer({settings}) {
  return (
    <footer style={{ backgroundColor: 'rgb(230, 230, 230)', color: 'black', padding: '4rem 0 2rem 0' }} 
        className="container-fluid px-4">
        <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-4">
                <div>
                    <h6 style={{ fontSize: '18px', textTransform: 'uppercase', fontWeight: '600' }}>About Us</h6>
                    <p className="paragraph">{settings.about_us}</p>
                </div>
                <div style={{ width: '70%' }} className="d-flex align-items-start align-items-md-center justify-content-md-between justify-content-center">
                    <Link to={settings.facebook} target="_blank" rel="noopener noreferrer" className="footer-social-links">
                        <FaFacebook />
                    </Link>
                    <Link to={settings.x} target="_blank" rel="noopener noreferrer" className="footer-social-links">
                        <FaTwitter />
                    </Link>
                    <Link to={settings.linkedin} target="_blank" rel="noopener noreferrer" className="footer-social-links">
                        <FaLinkedin />
                    </Link>
                    <Link to={settings.youtube} target="_blank" rel="noopener noreferrer" className="footer-social-links">
                        <FaYoutube />
                    </Link>
                    <Link to={settings.pinterest} target="_blank" rel="noopener noreferrer" className="footer-social-links">
                        <FaPinterest />
                    </Link>
                </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-3 mb-4">
                <h6 style={{ fontSize: '18px', textTransform: 'uppercase', fontWeight: '600' }}>Blogs</h6>
                <ul className="list-unstyled paragraph">
                    <li><Link to="/" className="footer-links">What are the different types of services available on the Beauty on Demand app?</Link></li>
                    <li><Link to="/" className="footer-links">What are the monetized features of the Gojek Clone Super app?</Link></li>
                    <li><Link to="/" className="footer-links">Why is the Myride Africa Clone a legitimate app for generating revenue?</Link></li>
                    <li><Link to="/" className="footer-links">What Makes Farid Egypt Taxi Clone So Authentic And Genuine?</Link></li>
                </ul>
            </div>

            <div className="col-12 col-sm-6 col-lg-3 mb-4">
                <h6 style={{ fontSize: '18px', textTransform: 'uppercase', fontWeight: '600' }}>Contact</h6>
                <div style={{ fontSize: '15px', color: 'rgb(11, 11, 11)' }}>
                    <div className="footer-links d-flex align-items-center mb-2">
                        <FaEnvelope style={{width: '17px', height: '17px', flexShrink: 0 }}/>&nbsp;
                        <Link to="/" className="footer-links">{settings.email}</Link>
                    </div>
                    <div className="d-flex mb-2">
                        <div className="footer-links d-flex align-items-center">
                            <FaPhoneAlt style={{width: '17px', height: '17px', flexShrink: 0 }}/>&nbsp;
                            <Link to="/" className="footer-links">{settings.whats_app}</Link>
                        </div>&nbsp;
                        <span>(Whatsapp)</span>
                    </div>
                    <div className="d-flex align-items-center">
                        <MdLocationPin style={{width: '20px', height: '20px', flexShrink: 0 }}/>
                        <p className="mb-0 ms-2">{settings.location}</p>
                    </div>
                </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
                <h6 style={{ fontSize: '18px', textTransform: 'uppercase', fontWeight: '600' }}>Our services cover</h6>
                <img src="Images/map.png" alt="map" style={{ width: '100%' }} className='mt-2'/>
            </div>
        </div>
    </footer>
  );
}

