import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="bg-[#414079] text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <FontAwesomeIcon icon={faFilm} className='text-2xl text-[#F9A826]'/>
          <span className="text-2xl font-bold">PriMovies</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 font-medium">
          <NavLink to="/" className="">Home</NavLink>
          <NavLink to="/about" className="">About</NavLink>
          <NavLink to="/contact" className="">Contact</NavLink>
          <NavLink to="/services" className="">Services</NavLink>
        </nav>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden mt-4 flex flex-col gap-4 px-4">
          <NavLink
            to="/"
            onClick={toggleMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={toggleMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            onClick={toggleMenu}
          >
            Contact
          </NavLink>
          <NavLink
            to="/services"
            onClick={toggleMenu}
          >
            Services
          </NavLink>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
