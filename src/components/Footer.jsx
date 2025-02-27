import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import logo from "../../assets/logo.png";


const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'About', href: '#' },
      { name: 'Terms of Use', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'How it Works', href: '#' },
      { name: 'Contact Us', href: '#' },
    ],
    getHelp: [
      { name: 'Support Carrer', href: '#' },
      { name: '24h Service', href: '#' },
      { name: 'Quick Chat', href: '#' },
    ],
    support: [
      { name: 'FAQ', href: '#' },
      { name: 'Policy', href: '#' },
      { name: 'Business', href: '#' },
    ],
    contact: [
      { name: 'WhatsApp', href: '#' },
      { name: 'Support 24', href: '#' },
    ],
  }

  return (
    <footer 
      
      initial="hidden"
      whileInView="show"
      className="bg-gray-50 py-16 mt-16 px-6"
    >
      <div className="section-container">
        <div 
          
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12"
        >
          {/* Brand Column */}
          <div 
           
            className="lg:col-span-4 "
          >
            <div 
              
              className="flex items-center gap-1 mb-6"
            >
              <img className='w-46 ' src={logo} alt="" />
            </div>
            <p 
              
              className="text-gray-600 mb-6"
            >
              The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times.
            </p>
            <div 
              
              className="flex gap-4"
            >
              <a 
                
                href="#" 
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-lime-600 hover:text-white transition-colors"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a 
               
                href="#" 
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-lime-400 hover:text-white transition-colors"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a 
                
                href="#" 
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-lime-700 hover:text-white transition-colors"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div 
            
            className="lg:col-span-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                <div 
                  key={category}
                  
                >
                  <h3 
                    
                    className="text-lg font-medium mb-4"
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </h3>
                  <ul 
                    
                    className="space-y-3"
                  >
                    {links.map((link, index) => (
                      <li 
                        key={index}
                      
                      >
                        <a 
                          whileHover={{ x: 5 }}
                          href={link.href} 
                          className="text-gray-600 hover:text-gray-900"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div 
          
          className="border-t border-gray-200 mt-2 pt-2"
        >
          <div 
            
            className="flex flex-col md:flex-row justify-center items-center gap-4"
          >
            <p 
              
              className="text-gray-600 text-sm text-center md:text-left"
            >
              Copyright © {new Date().getFullYear()} !$4@🤙
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer