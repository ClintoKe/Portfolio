import React from 'react';
import { Github, Linkedin, Twitter, FileText } from 'lucide-react';
import { SOCIAL_LINKS, RESUME_LINK } from '../../utils/constants';

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <img
          src="https://i.postimg.cc/Kvwtbp7b/Me.jpg"
          alt="Clinton Omondi"
          className="w-32 h-32 rounded-full mx-auto mb-8 shadow-lg"
        />
        <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">Clinton Omondi</h1>
        <p className="text-2xl text-gray-600 dark:text-gray-300 mb-8">Computer Science Student @ Kisii University</p>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          CS student specializing in Artificial Intelligence and Full-Stack Development.
          Currently working on ML-powered web applications and contributing to open-source projects.
        </p>
        
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href={SOCIAL_LINKS.github}
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-7 h-7" />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-7 h-7" />
          </a>
          <a
            href={SOCIAL_LINKS.twitter}
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="w-7 h-7" />
          </a>
        </div>

        <a
          href={RESUME_LINK}
          className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white rounded-lg transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FileText className="w-5 h-5 mr-2" />
          Download Resume
        </a>
      </div>
    </div>
  );
}