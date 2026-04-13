import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
  {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  const FORMSPREE_URL = 'https://formspree.io/f/xgorwbrq';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (FORMSPREE_URL.includes('your-form-id')) {
      alert('Please replace the Formspree endpoint with your actual form ID before submitting.');
      return;
    }

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        const errorText = await response.text();
        console.error('Formspree error:', errorText);
        alert('Failed to send message. Please check your Formspree endpoint and try again.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    }
  };
  return (
    <section
      id="contact"
      className="py-20 bg-teal-900 text-white relative overflow-hidden">
      
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-700 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-teal-100 max-w-2xl mx-auto">
            Interested in working together? Feel free to reach out for any
            inquiries or opportunities.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
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
            className="w-full lg:w-1/3 space-y-8">
            
            <div className="bg-teal-800/50 p-8 rounded-2xl border border-teal-700 backdrop-blur-sm h-full">
              <h3 className="text-2xl font-bold mb-8 text-amber-500">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-teal-700 p-3 rounded-full text-amber-400 shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-teal-200 mb-1">Phone</p>
                    <p className="font-medium">+885 96 316 0977</p>
                    <p className="font-medium">+885 90 807 819</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-teal-700 p-3 rounded-full text-amber-400 shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-teal-200 mb-1">Email</p>
                    <a
                      href="mailto:namchheavron.info@gmail.com"
                      className="font-medium hover:text-amber-400 transition-colors break-all">
                      
                      namchheavron.info@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-teal-700 p-3 rounded-full text-amber-400 shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-teal-200 mb-1">Location</p>
                    <p className="font-medium">
                      Sangkat TuekThla, SenSokDistrict
                    </p>
                    <p className="font-medium">Phnom Penh City</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
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
            className="w-full lg:w-2/3">
            
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-2xl shadow-xl text-gray-800">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2">
                    
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-900 focus:border-transparent transition-all outline-none"
                    placeholder="Your Name" />
                  
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2">
                    
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-900 focus:border-transparent transition-all outline-none"
                    placeholder="your.email@example.com" />
                  
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2">
                    
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-900 focus:border-transparent transition-all outline-none"
                    placeholder="Your Phone Number" />
                  
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2">
                    
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-900 focus:border-transparent transition-all outline-none"
                    placeholder="Subject of your message" />
                  
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2">
                  
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-900 focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Write your message here...">
                </textarea>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md">
                
                <Send size={18} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>);

}