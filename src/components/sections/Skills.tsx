import React from 'react';
import { Code2, Database, Globe, Server, Brain, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code2 className="w-8 h-8 text-blue-500" />,
    skills: ["Python", "JavaScript/TypeScript", "Java", "C++", "Go"]
  },
  {
    title: "Web Development",
    icon: <Globe className="w-8 h-8 text-green-500" />,
    skills: ["React", "Node.js", "Next.js", "TailwindCSS", "GraphQL"]
  },
  {
    title: "AI & ML",
    icon: <Brain className="w-8 h-8 text-purple-500" />,
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Computer Vision", "NLP"]
  },
  {
    title: "Databases",
    icon: <Database className="w-8 h-8 text-yellow-500" />,
    skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL"]
  },
  {
    title: "Cloud & DevOps",
    icon: <Server className="w-8 h-8 text-red-500" />,
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Linux"]
  },
  {
    title: "Tools & Others",
    icon: <Wrench className="w-8 h-8 text-indigo-500" />,
    skills: ["Git", "Jira", "Figma", "VS Code", "Postman"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold ml-3 dark:text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}