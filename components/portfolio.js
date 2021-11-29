import React from 'react';
import ProjectCard from './project-card';

const projects = [
  {
    title: 'Blood Moon NFT',
    url: 'https://bloodmoon.club/',
    tech: ['reactjs', 'tailwindcss'],
  },

  {
    title: 'Enroute.ai',
    url: 'https://enroute.ai/',
    tech: ['gatsby', 'css3'],
  },

  {
    title: 'Taxionspot',
    url: 'https://www.taxionspot.nl/',
    tech: ['gatsby', 'css3'],
  },

  {
    title: 'Opensea',
    url: 'https://juicesqueezer-opensea.vercel.app/assets',
    tech: ['nextjs', 'tailwindcss'],
  },
  {
    title: 'Suhsi Online',
    url: 'https://onlinesushi.be/en',
    tech: ['nextjs', 'styled-components'],
  },
  {
    title: 'crusaders of crypto',
    url: 'https://crusaders-of-crypt-o-hi2yz8q2b-mspkteam.vercel.app/',
    tech: ['nextjs', 'css'],
  },
  {
    title: 'Swipe your bite',
    url: 'https://peaceful-dubinsky-dc7a76.netlify.app/',
    tech: ['create-react-app', 'tailwindcss'],
  },
  {
    title: 'Enrouteai Android App',
    url: 'https://play.google.com/store/apps/details?id=com.enrouteai.mobile',
    tech: ['react-native', 'redux', 'redux-persist'],
  },
  {
    title: 'Enrouteai iOS App',
    url: 'https://apps.apple.com/us/app/enroute-ai/id1512957208#?platform=iphone',
    tech: ['react-native', 'redux', 'redux-persist'],
  },
  {
    title: 'Homi Chef Android App',
    url: 'https://play.google.com/store/apps/details?id=com.morosoft.homi.chef&hl=ur',
    tech: ['react-native', 'redux', 'redux-saga'],
  },
  {
    title: 'Portfolio',
    url: 'https://adnan.vercel.app/',
    tech: ['nextjs', 'tailwindcss'],
  },
];

export default function Portfolio() {
  return (
    <section className="px-10 sm:px-40 py-10">
      <span className="block text-gray-600 text-sm font-semibold py-4">
        FEATURED PROJECTS -
      </span>
      <span className="block text-3xl sm:text-4xl pb-6">
        Stuff I’ve Worked On 📁
      </span>
      <div className="flex flex-wrap flex-grow ">
        {projects.map((project) => (
          <ProjectCard
            title={project.title}
            url={project.url}
            tech={project.tech}
          />
        ))}
      </div>
    </section>
  );
}
