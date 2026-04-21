import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  {
    name: 'Home',
    href: '#home'
  },
  {
    name: 'About',
    href: '#about'
  },
  {
    name: 'Skills',
    href: '#skills'
  },
  {
    name: 'Projects',
    href: '#projects'
  },
  {
    name: 'Experience',
    href: '#experience'
  },
  {
    name: 'Contact',
    href: '#contact'
  }
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const navbarOffset = 120;
      const scrollPosition = window.scrollY + navbarOffset;
      const pageBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      if (pageBottom) {
        setActiveLink(navLinks[navLinks.length - 1].href);
        return;
      }

      let currentLink = navLinks[0].href;
      navLinks.forEach((link) => {
        const section = document.getElementById(link.href.substring(1));
        if (section && section.offsetTop <= scrollPosition) {
          currentLink = link.href;
        }
      });

      setActiveLink(currentLink);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-teal-900 shadow-lg py-3' : 'bg-teal-900 py-5'}`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a
              href="#home"
              className="text-white font-bold text-xl tracking-wider">
              
              RON NAMCHHEAV
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`text-sm font-medium transition-colors ${activeLink === link.href ? 'text-amber-500' : 'text-gray-300'} hover:text-amber-500`}>
              
                {link.name}
              </a>
            )}
            <a
              href="#contact"
              className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-md text-sm font-medium transition-colors">
              
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none">
              
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen &&
      <div className="md:hidden bg-teal-800 shadow-xl absolute top-full left-0 w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) =>
          <a
            key={link.name}
            href={link.href}
            onClick={() => { setActiveLink(link.href); setMobileMenuOpen(false); }}
            className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${activeLink === link.href ? 'text-amber-500 bg-teal-700' : 'text-gray-300'} hover:text-amber-500 hover:bg-teal-700`}>
            
                {link.name}
              </a>
          )}
          </div>
        </div>
      }
    </nav>);

}
