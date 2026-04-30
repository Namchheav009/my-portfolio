import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  images: string[];
  tags: string[];
  githubUrl: string;
  demoUrl: string;
};

export function ProjectsSection() {
  const projects = [
  {
    id: 1,
    title: 'Library Management System',
    description:
    'Using ASP.NET MVC, this project is a comprehensive library management system that allows users to manage books, members, and borrowing transactions efficiently. It features a user-friendly interface and robust backend functionality.',
    images: [
      '/media/library/library1.png',
      '/media/library/library2.png',
      '/media/library/library3.png'
    ],
    tags: ['C#','jQuery','CSS','ASP.NET','JavaScript', 'SQL'],
    githubUrl: 'https://github.com/Rattnakvisal/Library-Management-system',
    demoUrl: '#'
  },
  {
    id: 2,
    title: 'Expense Tracker Web App',
    description:
    'A personal finance & expense tracking web application built with Laravel 12 (PHP 8.2) and React + Inertia (TypeScript). It enables users to track transactions, create budgets, categorize spending, and manage multiple users (admin role).',
    images: [
    '/media/expense/1.png',
    '/media/expense/2.png',
    '/media/expense/3.png'
    ],
    tags: ['Laravel', 'CSS', 'PHP', 'TypeScript', 'Supabase'],
    githubUrl: 'https://github.com/Namchheav009/Expenses_tracker',
    demoUrl: 'https://expenses-tracker-1-2d9m.onrender.com/'
  },
  {
    id: 3,
    title: 'Login_secure-flutter',
    description:
    'This project is a secure login system built with Flutter, utilizing Firebase for authentication and MySQL for data storage. It provides a robust and user-friendly interface for users to register, log in, otp verification, and manage their accounts securely. ',
    images: [
    'https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    tags: ['Flutter', 'Firebase', 'SQLite', 'Dart'],
    githubUrl: 'https://github.com/Namchheav009/Login_secure-flutter-',
    demoUrl: '#'
  },
  {
    id: 4,
    title: 'Hotel Management System',
    description:
    'This is a simple hotel management web application built with Django. It provides functionality for guests to browse rooms, services, make reservations, manage their cart, and book services. Administrators can manage rooms, services, bookings, users, and view reports.',
    images: [
    '/media/hotel/1.png',
    '/media/hotel/2.png',
    '/media/hotel/3.png'
    ],
    tags: ['Django', 'Python', 'Bootstrap', 'jQuery', 'JavaScript', 'CSS', 'HTML', 'SQLite', 'Django REST Framework', 'SweetAlert2'],
    githubUrl: 'https://github.com/Namchheav009/django-hotel',
    demoUrl: '#'
  },
  {
    id: 5,
    title: 'Restuerant Menu',
    description:
    'A comprehensive ASP.NET Core web application for managing restaurant menus, bookings, and administrative operations.',
    images: [
    '/media/menu/1.png',
    '/media/menu/2.png',
    '/media/menu/3.png'
    ],
    tags: ['ASP.NET Core', 'C#', 'SQL Server', 'Bootstrap', 'jQuery', 'JavaScript', 'CSS', 'HTML','SignalR','Telegram Bot API'],
    githubUrl: 'https://github.com/Namchheav009/Resturant_menu',
    demoUrl: '#'
  },
  {
    id: 6,
    title: 'IT Support Dashboard',
    description:
    'Internal tool for tracking IT support tickets and hardware inventory.',
    images: [
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ],
    tags: ['C#', 'SQL Server'],
    githubUrl: 'https://github.com/yourusername/it-support-dashboard',
    demoUrl: '#'
  }];

  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (activeProject) {
      setCurrentImageIndex((prev) => (prev + 1) % activeProject.images.length);
    }
  };

  const prevImage = () => {
    if (activeProject) {
      setCurrentImageIndex((prev) => (prev - 1 + activeProject.images.length) % activeProject.images.length);
    }
  };

  const openProjectModal = (project: Project) => {
    setActiveProject(project);
    setCurrentImageIndex(0);
  };

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
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
              
                <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 bg-white/90 rounded-full text-teal-900 hover:text-amber-500 hover:bg-white transition-colors">
                    <Github size={18} />
                  </a>
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); setActiveProject(project); }}
                    role="button"
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
                    href="#"
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); openProjectModal(project); }}
                    role="button"
                    className="text-amber-600 hover:text-amber-700 text-sm font-semibold flex items-center gap-1">
                    Read more <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-dialog-title"
          onClick={() => setActiveProject(null)}>
          <div
            className="flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
              <div>
                <h3 id="project-dialog-title" className="text-xl font-semibold text-teal-900">
                  {activeProject.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500">Project details and demo preview</p>
              </div>
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="rounded-full bg-gray-100 px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-200">
                Close
              </button>
            </div>
            <div className="overflow-y-auto px-6 py-6 sm:px-8">
              <div className="relative mb-6 rounded-3xl bg-gray-950">
                <img
                  src={activeProject.images[currentImageIndex]}
                  alt={activeProject.title}
                  className="h-[60vh] max-h-[680px] min-h-[320px] w-full rounded-3xl object-contain" />
                {activeProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-teal-900 hover:bg-white shadow-lg transition-colors">
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-teal-900 hover:bg-white shadow-lg transition-colors">
                      <ChevronRight size={20} />
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {activeProject.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`h-2 w-2 rounded-full transition-colors ${
                            index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
              <p className="text-gray-700">{activeProject.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {activeProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-teal-900 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-800">
                  View GitHub
                </a>
                {activeProject.demoUrl !== '#' ? (
                  <a
                    href={activeProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-teal-900 px-4 py-2 text-sm font-semibold text-teal-900 hover:bg-teal-50">
                    Open demo in new tab
                  </a>
                ) : (
                  <span className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-500">
                    Demo unavailable
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>);

}
