import React from 'react'
import Navbar from './Navbar'
import InstagramSVG from "../assets/instagram.svg";
import TiktokSVG from "../assets/tiktok.svg";
import FacebookSVG from "../assets/facebook.svg";

const Footer = () => {
  return (
    <footer className="bg-[#222] text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white">Yendo!</h2>
            <p className="mt-2 text-sm">Conectamos tus sueños con destinos inolvidables, creando aventuras a la medida de tu pasión por descubrir.</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://www.instagram.com/yendotandil/" className="hover:opacity-80 transition-opacity" target="_blank" rel="noopener noreferrer">
              <span className="sr-only">Instagram</span>
              <img src={InstagramSVG} alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com" className="hover:opacity-80 transition-opacity" target="_blank" rel="noopener noreferrer">
              <span className="sr-only">Facebook</span>
              <img src={FacebookSVG} alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="https://www.tiktok.com/@yendotandil" className="hover:opacity-80 transition-opacity" target="_blank" rel="noopener noreferrer">
              <span className="sr-only">TikTok</span>
              <img src={TiktokSVG} alt="TikTok" className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <nav className="flex flex-wrap justify-center space-x-6 mb-4 md:mb-0">
          </nav>
          <p className="text-sm">&copy; {new Date().getFullYear()} Yendo!, Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer