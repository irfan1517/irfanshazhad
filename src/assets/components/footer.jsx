import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full min-h-10 bg-gray-900 text-gray-300 py-6 px-10 gap-3 justify-center flex">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left Side: Copyright */}
        <div className="flex items-center space-x-1">
          <span>&copy;</span>
          <span>{currentYear} Govt. Associate College Bhera. All rights reserved.</span>
        </div>

        {/* Middle: Social Icons */}
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white transition-colors">
            <Facebook size={20} />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <Twitter size={20} />
          </a>
        </div>

        {/* Right Side: Developer Name */}
        <div className="">
          <p className="text-sm">
            Developed by <span className="font-semibold text-white">Muhammad Irfan Shahzad</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;