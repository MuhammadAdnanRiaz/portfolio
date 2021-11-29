import React from 'react';
import ProjectCard from './project-card';

const projects = [
  {
    title: 'Blood Moon NFT',
    url: 'https://bloodmoon.club/',
    tech: ['reactjs', 'tailwindcss'],
  },

  {
    title: 'Blood Moon NFT',
    url: 'https://bloodmoon.club/',
    tech: ['reactjs', 'tailwindcss'],
  },

  {
    title: 'Blood Moon NFT',
    url: 'https://bloodmoon.club/',
    tech: ['reactjs', 'tailwindcss'],
  },
  {
    title: 'Blood Moon NFT',
    url: 'https://bloodmoon.club/',
    tech: ['reactjs', 'tailwindcss'],
  },
];

export default function Contact() {
  return (
    <section id="contact" className="px-10 sm:px-40 py-10">
      <span className="block text-gray-600 text-sm font-semibold py-4">
        CONTACT —
      </span>
      <span className="block text-4xl pb-6">Look Who’s Here 😁</span>
      <div className="flex flex-col sm:flex-row sm:space-x-80 mt-11">
        <div className="flex flex-col">
          <span className="block uppercase text-gray-500 text-sm">Email</span>
          <a href="mailto:andanriaz511@gmail.com">
            <span className="block text-lg">andanriaz511@gmail.com</span>
          </a>
        </div>

        <div className="flex flex-col">
          <span className="block uppercase text-gray-500 text-sm">phone</span>
          <span className="block text-lg">+(923) 426 291 865</span>
        </div>
      </div>
    </section>
  );
}
