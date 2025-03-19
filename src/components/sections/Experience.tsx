import React from 'react';

const experiences = [
  {
    title: "Software Engineering Intern",
    company: "Google",
    period: "Summer 2023",
    description: [
      "Developed and deployed microservices using Go and Google Cloud Platform",
      "Implemented real-time data processing pipeline handling 1M+ events daily",
      "Collaborated with team of 5 engineers on service architecture design"
    ]
  },
  {
    title: "Research Assistant",
    company: "Artificial Intelligence Lab",
    period: "Dec 2023 - Present",
    description: [
      "Researching applications of transformers in computer vision",
      "Implemented and evaluated various attention mechanisms",
      "Co-authored paper accepted at CVPR 2024"
    ]
  },
  {
    title: "Teaching Assistant",
    company: "CS Department, Kisii University",
    period: "Oct 2023 - Feb 2024",
    description: [
      "TA for CS106B: Programming Abstractions",
      "Held office hours and helped 100+ students with assignments",
      "Created and graded programming assignments"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">Experience</h2>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 last:mb-0">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400">{exp.company}</p>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{exp.period}</p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}