import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-zinc-100 text-zinc-800 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand Info */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <a href="#" className="text-3xl md:text-4xl font-extrabold text-zinc-900 mb-4">
              Fresh<span className="text-orange-500 uppercase">m</span>art
            </a>

            <p className="text-zinc-600 text-sm md:text-base leading-relaxed mb-6">
              Bringing farm-fresh produce and wholesome essentials packed with
              flavor, nutrition, and quality directly to your table.
            </p>

          </div>

          {/* Company Links */}
          <div className="text-center sm:text-left">
            <h5 className="text-zinc-900 text-xl font-bold mb-6">
              Company
            </h5>

            <ul className="space-y-4">
              {['About Us', 'Our Story', 'Careers', 'Privacy Policy'].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-zinc-700 hover:text-orange-500 transition-colors duration-300 flex items-center justify-center sm:justify-start group"
                    >
                      <IoIosArrowForward className="mr-2 text-orange-500 group-hover:translate-x-1 transition-transform duration-300" />
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Support Links */}
          <div className="text-center sm:text-left">
            <h5 className="text-zinc-900 text-xl font-bold mb-6">
              Support
            </h5>

            <ul className="space-y-4">
              {[
                'Help Center',
                "FAQ's",
                'Shipping & Returns',
                'Contact Us',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-zinc-700 hover:text-orange-500 transition-colors duration-300 flex items-center justify-center sm:justify-start group"
                  >
                    <IoIosArrowForward className="mr-2 text-orange-500 group-hover:translate-x-1 transition-transform duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-center sm:text-left">
            <h5 className="text-zinc-900 text-xl font-bold mb-6">
              Stay Connected
            </h5>

            <p className="mb-6 text-zinc-600 text-sm md:text-base">
              Join our newsletter for fresh updates, exclusive offers, and
              healthy recipes!
            </p>

            <div className="flex flex-col sm:flex-row bg-white p-1 rounded-xl border border-zinc-300 gap-2 sm:gap-0">
              <input
                type="email"
                placeholder="Your Email Address"
                className="h-12 px-4 flex-1 bg-transparent focus:outline-none text-sm"
              />

              <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 h-12 sm:w-14 rounded-lg text-white text-xl flex items-center justify-center transition-all duration-300">
                <IoIosArrowForward />
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center sm:justify-start gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-zinc-500 hover:text-orange-500 hover:shadow-md transition-all duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-zinc-500 hover:text-orange-500 hover:shadow-md transition-all duration-300"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-zinc-500 hover:text-orange-500 hover:shadow-md transition-all duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-zinc-500 hover:text-orange-500 hover:shadow-md transition-all duration-300"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-300 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <p>
            © {new Date().getFullYear()} Freshmart. All Rights Reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-orange-500 transition">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-orange-500 transition">
              Privacy Policy
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;