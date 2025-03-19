import React from 'react';
import { BookOpen, Code, Coffee } from 'lucide-react';

const highlights = [
  {
    icon: <BookOpen className="w-6 h-6 text-blue-500" />,
    title: "Education",
    description: "Kisii University, B.S. in Computer Science (Expected 2026)"
  },
  {
    icon: <Code className="w-6 h-6 text-green-500" />,
    title: "Focus Areas",
    description: "Artificial Intelligence, Web Development, Cloud Computing, Machine Learning"
  },
  {
    icon: <Coffee className="w-6 h-6 text-orange-500" />,
    title: "Interests",
    description: "Open Source, Hackathons, Tech Blogging"
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {highlights.map((item, index) => (
            <div key={index} className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex items-center mb-4">
                {item.icon}
                <h3 className="text-xl font-semibold ml-3 dark:text-white">{item.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            I'm a passionate computer science student with a strong foundation in both theoretical concepts
            and practical application. My journey in tech started with building simple websites, and now
            I'm developing AI-powered applications and contributing to open-source projects.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            During my time at Kisii University, I've had the opportunity to work on diverse projects, from
            developing machine learning models to creating full-stack web applications. I'm particularly
            interested in the intersection of AI and web technologies, and how they can be used to solve
            real-world problems.
          </p>
        </div>
      </div>
    </section>
  );
}