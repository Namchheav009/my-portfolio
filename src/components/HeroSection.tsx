import React from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronRight } from 'lucide-react';
export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen pt-20 flex items-center bg-white">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.8
            }}
            className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            <div className="relative mb-8">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-teal-900 shadow-xl">
                <img
                  src="/chheav.png"
                  alt="Ron Namchheav"
                  className="w-full h-full object-cover" />
                
              </div>
              <div className="absolute -bottom-4 -right-4 bg-amber-500 text-white p-3 rounded-full shadow-lg">
                <ChevronRight size={24} />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-teal-900 mb-2">
              RON NAMCHHEAV
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-600 mb-6">
              software developer & IT support specialist
            </h2>

            <p className="text-gray-600 mb-8 max-w-lg leading-relaxed">
              Business IT student at ACLEDA University of Business with
              experience in C#, Django, SQL Server, and IT support. Capable of
              building small applications and handling technical tasks. Seeking
              an entry-level IT role to contribute to system operations and
              reliability.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="bg-teal-900 hover:bg-teal-800 text-white px-8 py-3 rounded-md font-medium transition-colors shadow-md flex items-center gap-2">
                
                Contact Me
              </a>
              <a
                href="/CV.pdf"
                download="Ron_Namchheav.pdf"
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-md font-medium transition-colors shadow-md flex items-center gap-2">
                
                <Download size={18} />
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Right Content - Decorative */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}
            className="w-full lg:w-1/2 bg-teal-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl min-h-[400px] flex flex-col justify-center">
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-800 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>

            <div className="relative z-10 text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                My Coding :
              </h3>
              <h4 className="text-2xl md:text-3xl text-amber-500 font-semibold mb-8">
                Ron Namchheav
              </h4>

              <div className="space-y-6 text-left max-w-md mx-auto">
                <div className="flex items-center gap-4 bg-teal-800/50 p-4 rounded-xl backdrop-blur-sm border border-teal-700">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    C#
                  </div>
                  <div>
                    <p className="font-medium">Desktop & Web Apps</p>
                    <p className="text-sm text-gray-300">
                      ASP.NET & Windows Forms
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-teal-800/50 p-4 rounded-xl backdrop-blur-sm border border-teal-700">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    tsx
                  </div>
                  <div>
                    <p className="font-medium">Frontend Development</p>
                    <p className="text-sm text-gray-300">
                      Typescript, Tailwind CSS, Framer Motion
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-teal-800/50 p-4 rounded-xl backdrop-blur-sm border border-teal-700">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    Dj
                  </div>
                  <div>
                    <p className="font-medium">Backend Development</p>
                    <p className="text-sm text-gray-300">
                      Python Django Framework
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-teal-800/50 p-4 rounded-xl backdrop-blur-sm border border-teal-700">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    SQL
                  </div>
                  <div>
                    <p className="font-medium">Database Management</p>
                    <p className="text-sm text-gray-300">
                      SQL Server Architecture and Queries 
                    </p>
                  </div>
                </div>

                {/* <div className="flex items-center gap-4 bg-teal-800/50 p-4 rounded-xl backdrop-blur-sm border border-teal-700">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    IT
                  </div>
                  <div>
                    <p className="font-medium">IT Operations</p>
                    <p className="text-sm text-gray-300">
                      Windows Environments & Network Support
                    </p>
                  </div>
                </div> */}

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}