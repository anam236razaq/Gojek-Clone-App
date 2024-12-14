import React from 'react';
import { IoMdMenu } from 'react-icons/io';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">
                <img src='Images/logo.jpeg' alt="Super Apps" style={{ width: '100%', height: '50px' }}/>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler"
                aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <IoMdMenu className='menu'/>
            </button>
            <div className="collapse navbar-collapse" id="navbarToggler">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item nav-links me-0 me-lg-5 mb-2 mb-lg-0">
                        <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/">Home</NavLink>
                    </li>
                    <li className="nav-item nav-links me-0 me-lg-5 mb-2 mb-lg-0">
                        <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/gojek-clone-apps">Gojek Clone Apps</NavLink>
                    </li>
                    <li className="nav-item nav-links me-0 me-lg-5 mb-2 mb-lg-0">
                        <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/pricing">Pricing</NavLink>
                    </li>
                </ul>
                <div className="nav-btn me-0 me-lg-3 mb-2 mb-lg-0">
                    <Link to="/enquire">Enquire Now</Link>
                </div>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;
