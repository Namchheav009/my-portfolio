import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, Briefcase } from 'lucide-react';
export function ReferenceSection() {
  return (
    <section className="py-16 bg-teal-50">
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
          className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-teal-100">
          
          <h2 className="text-2xl md:text-3xl font-bold text-teal-900 mb-6 border-b border-gray-100 pb-4">
            Reference
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-teal-100 p-3 rounded-full text-teal-900 mt-1">
                  <User size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Professor</p>
                  <p className="text-lg font-bold text-gray-800">
                    Reach Makara
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-teal-100 p-3 rounded-full text-teal-900 mt-1">
                  <Briefcase size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Position</p>
                  <p className="text-md font-medium text-gray-800">
                    Junior Head of Department
                  </p>
                  <p className="text-sm text-gray-600">
                    Information Technology
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-full text-amber-600 mt-1">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Email</p>
                  <a
                    href="mailto:reach.makara@aub.edu.kh"
                    className="text-md font-medium text-teal-700 hover:text-amber-600 transition-colors">
                    
                    reach.makara@aub.edu.kh
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-full text-amber-600 mt-1">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Phone</p>
                  <a
                    href="tel:015400242"
                    className="text-md font-medium text-teal-700 hover:text-amber-600 transition-colors">
                    
                    015 400 242
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}