import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "AI Image Generator",
    description: "Web application that generates images from text descriptions",
    image: "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?w=600&h=400&fit=crop",
    tech: ["React", "Node.js", "OpenAI API", "TailwindCSS"],
    github: "https://github.com/alexchen/ai-image-gen",
    live: "https://ai-image-gen.demo.com"
  },
  {
    title: "SmartTask",
    description: "AI-powered task management system with natural language processing",
    image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?w=600&h=400&fit=crop",
    tech: ["Python", "Flask", "React", "PostgreSQL"],
    github: "https://github.com/alexchen/smarttask",
    live: "https://smarttask.demo.com"
  },
  {
    title: "CodeReview AI",
    description: "Automated code review tool using machine learning to detect potential bugs",
    image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=600&h=400&fit=crop",
    tech: ["Python", "TensorFlow", "GitHub API"],
    github: "https://github.com/alexchen/codereview-ai",
    live: "https://codereview-ai.demo.com"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href={project.live}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}