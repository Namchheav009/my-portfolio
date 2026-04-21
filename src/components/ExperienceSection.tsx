import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Server, Code } from 'lucide-react';
export function ExperienceSection() {
  const experiences = [
    {
    id: 3,
    role: 'IT Support',
    company: 'EBM',
    period: 'Jan 2026 - Present',
    description: 'Providing ongoing IT support and technical assistance.',
    icon: <Briefcase size={20} className="text-white" />
  },
  {
    id: 1,
    role: 'Software Developer Intern',
    company: 'ACLEDA University of Business',
    period: '2025 - 2026',
    description:
    'Working as a Software Developer focusing on C# and ASP.NET technologies.',
    icon: <Code size={20} className="text-white" />
  },
  {
    id: 2,
    role: 'IT Support Intern',
    company: 'ACLEDA University of Business',
    period: 'Dec 2025 - Jan 2026',
    description:
    'Set up Windows environments, configured operating systems, and managed network printers, support students and teachers.',
    icon: <Server size={20} className="text-white" />
  },

  {
    id: 4,
    role: 'Digital Marketer & Salesperson',
    company: 'Product 3 PLus',
    period: '2024 (8 months)',
    description:
    'Managed digital marketing campaigns and handled sales responsibilities, especially in managing social media platforms and engaging with customers. ',
    icon: <Briefcase size={20} className="text-white" />
  }];

  return (
    <section id="experience" className="py-20 bg-white">
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
            Experience
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative border-l-4 border-teal-100 ml-4 md:ml-8">
          {experiences.map((exp, index) =>
          <motion.div
            key={exp.id}
            initial={{
              opacity: 0,
              x: -20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.15
            }}
            className="mb-10 ml-8 md:ml-12 relative">
            
              {/* Timeline Dot */}
              <div className="absolute -left-[42px] md:-left-[58px] top-1 w-10 h-10 bg-teal-900 rounded-full border-4 border-white shadow flex items-center justify-center">
                {exp.icon}
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-bold text-teal-900">
                    {exp.role}
                  </h3>
                  <span className="inline-block bg-teal-100 text-teal-800 text-sm font-semibold px-3 py-1 rounded-full mt-2 md:mt-0 w-max">
                    {exp.period}
                  </span>
                </div>
                <h4 className="text-lg font-medium text-amber-600 mb-3">
                  {exp.company}
                </h4>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            </motion.div>
          )}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block bg-teal-900 hover:bg-teal-800 text-white px-8 py-3 rounded-md font-medium transition-colors shadow-md">
            
            View Full CV
          </a>
        </div>
      </div>
    </section>);

}