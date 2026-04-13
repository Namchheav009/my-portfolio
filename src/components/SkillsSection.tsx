import React from 'react';
import { motion } from 'framer-motion';
export function SkillsSection() {
  const mainSkills = [
  {
    name: 'HTML & CSS',
    percentage: 63
  },
  {
    name: 'Django',
    percentage: 61
  },
  {
    name: 'Bootstrap',
    percentage: 46
  },
  {
    name: 'C#',
    percentage: 35
  },
  {
    name: 'SQL Server',
    percentage: 35
  },
  {
    name: 'Java',
    percentage: 20
  }];

  const otherSkills = [
  'Design: Canva, CapCut, Filmora, Figma',
  'IT Ops: Windows Server Setup, Kali Linux',
  'Soft Skills: Positive attitude, Fast learner'];

  return (
    <section id="skills" className="py-20 bg-teal-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-teal-100 max-w-2xl mx-auto">
            My technical expertise spans across frontend, backend, and IT
            operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Main 3 Highlight */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            className="flex flex-col justify-center items-center md:items-start">
            
            <div className="text-center md:text-left space-y-6">
              <h3 className="text-6xl md:text-8xl font-bold text-amber-500 tracking-tighter">
                C#
              </h3>
              <h3 className="text-5xl md:text-6xl font-bold text-white tracking-tight ml-0 md:ml-8">
                Django
              </h3>
              <h3 className="text-4xl md:text-5xl font-bold text-teal-300 tracking-tight ml-0 md:ml-16">
                SQL Server
              </h3>
            </div>

            <div className="mt-12 bg-teal-800/50 p-6 rounded-xl border border-teal-700 backdrop-blur-sm w-full max-w-md">
              <h4 className="text-xl font-semibold mb-4 text-amber-400">
                Other Capabilities
              </h4>
              <ul className="space-y-3">
                {otherSkills.map((skill, index) =>
                <li key={index} className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span className="text-teal-100">{skill}</span>
                  </li>
                )}
              </ul>
            </div>
          </motion.div>

          {/* Skill Bars */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6,
              delay: 0.2
            }}
            className="bg-white rounded-2xl p-8 shadow-xl text-gray-800">
            
            <h3 className="text-2xl font-bold text-teal-900 mb-8">
              Programming Languages
            </h3>

            <div className="space-y-6">
              {mainSkills.map((skill, index) =>
              <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">
                      {skill.name}
                    </span>
                    <span className="text-sm font-semibold text-teal-900">
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <motion.div
                    initial={{
                      width: 0
                    }}
                    whileInView={{
                      width: `${skill.percentage}%`
                    }}
                    viewport={{
                      once: true
                    }}
                    transition={{
                      duration: 1,
                      delay: 0.3 + index * 0.1
                    }}
                    className="bg-teal-900 h-2.5 rounded-full">
                  </motion.div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}