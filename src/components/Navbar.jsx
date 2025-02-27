import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeLink, setActiveLink] = useState('#home')

    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About Us" },
        { href: "#services", label: "Our Service" },
        { href: "#testimonials", label: "Testimonials" },
      ]

    return (
        <div className='fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm'>
            <div className='w-full flex justify-between items-center container mx-auto px-4 sm:px-6 lg:px-8 md:h-20 h-16'>
                <div className='flex items-center gap-1 cursor-pointer w-46'>
                   <img src={logo} alt="" />
                </div>
                <div className='hidden md:flex items-center gap-10'> 
                {navLinks.map((link, index) => ( <a key={index}  href={link.href} onClick={() => setActiveLink(link.href)} className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-lime-500 after:transition-all
                ${activeLink === link.href ? 'text-lime-500 after:w-full  ' : 'text-black hover:text-black-900'}`}
                 >
                 {link.label}
                 </a>
                 ))}
                </div>
                <button className="hidden md:block bg-lime-600 text-white px-6 py-2.5 rounded-lg hover:bg-lime-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-lime-100" >
                <a href="#newsletter">Get in touch</a>
                </button>
            </div>
        </div>
    );
};

export default Navbar;