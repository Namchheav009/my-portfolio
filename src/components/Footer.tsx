import React from 'react';
import { Github, Linkedin, Facebook } from 'lucide-react';
export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-teal-950 text-teal-200 py-12 border-t border-teal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold text-white tracking-wider mb-2">
              RON NAMCHHEAV
            </h2>
            <p className="text-sm text-teal-400">Software Developer</p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            <a
              href="#"
              className="text-teal-400 hover:text-amber-500 transition-colors">
              
              <span className="sr-only">GitHub</span>
              <Github size={24} />
            </a>
            <a
              href="#"
              className="text-teal-400 hover:text-amber-500 transition-colors">
              
              <span className="sr-only">LinkedIn</span>
              <Linkedin size={24} />
            </a>
            <a
              href="#"
              className="text-teal-400 hover:text-amber-500 transition-colors">
              
              <span className="sr-only">Facebook</span>
              <Facebook size={24} />
            </a>
          </div>
        </div>

        <div className="border-t border-teal-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {currentYear} Ron Namchheav. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>);

}