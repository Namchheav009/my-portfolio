import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
export function AboutSection() {
  const education = [
  {
    id: 1,
    title: 'Bachelor of Business IT',
    institution: 'ACLEDA University of Business (AUB)',
    period: '2024 to Present',
    details: 'Year 3, Sem 2',
    icon: <GraduationCap className="text-white" size={24} />
  },
  {
    id: 2,
    title: 'Bridging Course Computer',
    institution: 'ACLEDA University of Business (AUB)',
    period: '2024',
    details: '40 hours course in Phnom Penh',
    icon: <BookOpen className="text-white" size={24} />
  },
  {
    id: 3,
    title: 'Diploma Bacc II',
    institution: 'Taing Krasang High School',
    period: '2018 - 2023',
    details: 'Kompong Thom Province',
    icon: <Award className="text-white" size={24} />
  }];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6
          }}
          className="text-center mb-16">
          
          <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-4">
            My Story
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            My educational journey that has shaped my skills and passion for
            software development and IT operations.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-teal-200 hidden md:block"></div>

          <div className="space-y-12">
            {education.map((item, index) =>
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.2
              }}
              className={`flex flex-col md:flex-row items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
                {/* Empty space for alternating layout */}
                <div className="hidden md:block w-5/12"></div>

                {/* Timeline Icon */}
                <div className="z-10 flex items-center justify-center w-14 h-14 bg-teal-900 rounded-full border-4 border-white shadow-lg mb-4 md:mb-0">
                  {item.icon}
                </div>

                {/* Content Card */}
                <div className="w-full md:w-5/12">
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow relative">
                    {/* Arrow pointing to timeline */}
                    <div
                    className={`hidden md:block absolute top-6 w-4 h-4 bg-white border-t border-l border-gray-100 transform rotate-45 ${index % 2 === 0 ? '-left-2 -rotate-45 border-r-0 border-b-0' : '-right-2 rotate-135 border-l-0 border-t-0'}`}>
                  </div>

                    <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-semibold rounded-full mb-3">
                      {item.period}
                    </span>
                    <h3 className="text-xl font-bold text-teal-900 mb-1">
                      {item.title}
                    </h3>
                    <h4 className="text-md font-medium text-gray-700 mb-2">
                      {item.institution}
                    </h4>
                    <p className="text-gray-500 text-sm">{item.details}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

}