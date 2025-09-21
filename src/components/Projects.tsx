import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';

const projects = [
  {
    title: 'SyncUp - Video Calling Application using real time Chat',
    description: 'Full-stack Video Calling app with React, Node.js, Tailwing, WebRTC. Features include user authentication, Screen Share, Mute with chat integration.',
    image: 'https://images.pexels.com/photos/4099099/pexels-photo-4099099.jpeg',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'WebRTC', 'TypeScript', 'Tailwind'],
    githubUrl: 'https://github.com/satishnikale/SyncUp-frontend',
    liveUrl: 'https://syncup-app.netlify.app/',
    featured: true,
  },
  {
    title: 'Excalidraw',
    description: 'Collaborative White-Board tool with real-time updates, draw shapes functionality, and team collaboration features using webSocket.',
    image: 'https://images.pexels.com/photos/4348342/pexels-photo-4348342.jpeg',
    technologies: ['React', 'TypeScript', 'WebSocket', 'Postgress', 'Prisma', 'Turborepo'],
    githubUrl: 'https://github.com/satishnikale/excalidraw',
    liveUrl: '#',
    featured: false,
  },
  {
    title: 'Rate-Store',
    description: 'A store rating platform with React, Express.js, and PostgreSQL, allowing users to submit and manage ratings (1–5) and admin, owner Dashboards',
    image: 'https://images.pexels.com/photos/7948058/pexels-photo-7948058.jpeg',
    technologies: ['Node.js', 'React.js', 'TypeScript', 'Prisma', 'Postgress'],
    githubUrl: '#',
    liveUrl: '#',
    featured: true,
  },
  {
    title: 'Allen',
    description: 'Beautiful Allen clone using react.js, Tailwind, TypeScript',
    image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg',
    technologies: ['React', 'TypeScript','Tailwind'],
    githubUrl: 'https://github.com/satishnikale/allen.in-clone',
    liveUrl: 'https://allen-clone-satish-nikale.netlify.app/',
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A collection of my recent work showcasing different technologies
            and problem-solving approaches.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`bg-gray-50 dark:bg-dark-surface rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${project.featured ? 'ring-2 ring-blue-500/20' : ''
                }`}
            >
              {project.featured && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="absolute top-4 left-4 z-10 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1"
                >
                  <Star size={12} fill="currentColor" />
                  Featured
                </motion.div>
              )}

              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <motion.a
                    href={project.githubUrl}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    href={project.liveUrl}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs px-2 py-1 rounded-md"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <motion.a
                    href={project.githubUrl}
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                    whileHover={{ x: 5 }}
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    href={project.liveUrl}
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                    whileHover={{ x: 5 }}
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="#"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View All Projects</span>
            <ExternalLink size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}