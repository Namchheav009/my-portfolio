import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
export function ProjectsSection() {
  const projects = [
  {
    id: 1,
    title: 'Library Management System v1',
    description:
    'Desktop application for managing library inventory, built with C# and Windows Forms.',
    image:
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['C#', 'WinForms', 'SQL'],
    githubUrl: 'https://github.com/yourusername/library-management-v1',
    demoUrl: '#'
  },
  {
    id: 2,
    title: 'Library Management System v2',
    description:
    'Web-based library system with improved UI and user authentication.',
    image:
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Django', 'Python', 'Bootstrap'],
    githubUrl: 'https://github.com/yourusername/library-management-v2',
    demoUrl: 'https://library-demo.herokuapp.com'
  },
  {
    id: 3,
    title: 'Library Management System v3',
    description:
    'Advanced library management with reporting and analytics features.',
    image:
    'https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['C#', 'ASP.NET', 'SQL Server'],
    githubUrl: 'https://github.com/yourusername/library-management-v3',
    demoUrl: '#'
  },
  {
    id: 4,
    title: 'Project Campus Website',
    description:
    'Informational portal for university campus activities and news.',
    image:
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['HTML', 'CSS', 'JS'],
    githubUrl: 'https://github.com/yourusername/campus-website',
    demoUrl: 'https://campus-website.netlify.app'
  },
  {
    id: 5,
    title: 'Budget Tracker App',
    description:
    'Personal finance application to track daily expenses and income.',
    image:
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Django', 'SQL', 'Bootstrap'],
    githubUrl: 'https://github.com/yourusername/budget-tracker',
    demoUrl: 'https://budget-tracker-demo.herokuapp.com'
  },
  {
    id: 6,
    title: 'IT Support Dashboard',
    description:
    'Internal tool for tracking IT support tickets and hardware inventory.',
    image:
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['C#', 'SQL Server'],
    githubUrl: 'https://github.com/yourusername/it-support-dashboard',
    demoUrl: '#'
  }];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Projects in Action
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            A showcase of my software development projects, focusing on
            functional applications and systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) =>
          <motion.div
            key={project.id}
            initial={{
              opacity: 0,
              y: 30
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
              delay: index * 0.1
            }}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100">
            
              <div className="relative h-48 overflow-hidden bg-teal-900">
                <div className="absolute inset-0 bg-teal-900/40 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
              
                <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/90 rounded-full text-teal-900 hover:text-amber-500 hover:bg-white transition-colors">
                    <Github size={18} />
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/90 rounded-full text-teal-900 hover:text-amber-500 hover:bg-white transition-colors">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-teal-900 mb-2 group-hover:text-amber-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) =>
                <span
                  key={tag}
                  className="px-2 py-1 bg-teal-50 text-teal-800 text-xs font-medium rounded">
                  
                      {tag}
                    </span>
                )}
                </div>

                <div className="mt-6">
                  <a
                  href={project.demoUrl !== '#' ? project.demoUrl : `/project/${project.id}`}
                  target={project.demoUrl !== '#' ? "_blank" : "_self"}
                  rel={project.demoUrl !== '#' ? "noopener noreferrer" : undefined}
                  className="text-amber-600 hover:text-amber-700 text-sm font-semibold flex items-center gap-1">
                  
                    Read more <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}