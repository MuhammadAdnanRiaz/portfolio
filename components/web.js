import React from 'react';
import WebLinkCard from './link-card';

const weblinks = [
  {
    name: 'Github',
    url: 'https://github.com/MuhammadAdnanRiaz',
  },

  {
    name: 'Linkedin',
    url: 'www.linkedin.com/in/muhammadadnanriaz',
  },
];

export default function Web() {
  return (
    <section className="px-10 sm:px-40 py-10">
      <span className="block text-gray-600 text-sm font-semibold py-4">
        MORE OF MY WORKS —
      </span>
      <span className="block text-4xl pb-6">On The Web 🌐</span>
      <div className="flex flex-wrap  justify-start space-y-4 sm:space-y-0 sm:space-x-4">
        {weblinks.map((project) => (
          <WebLinkCard name={project.name} url={project.url} />
        ))}
      </div>
    </section>
  );
}
