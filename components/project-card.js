import React from 'react';

export default function ProjectCard({ title, url, tech }) {
  const [hovered, setHovered] = React.useState(false);

  const onMouseOver = () => setHovered(true);

  const onMouseOut = () => setHovered(false);

  console.log(hovered);
  return (
    <div
      className="flex flex-col justify-center items-center bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 w-full sm:w-72 h-72 hover:from-black hover:to-black hover:border text-black hover:text-white cursor-pointer
     hover:border-white relative m-1"
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOut}
    >
      <a href={url} target="_blank">
        <img
          src={hovered ? '/link-white.svg' : '/link.svg'}
          alt="link"
          className="absolute top-4 right-4"
        />
      </a>
      <span className="text-3xl font-semibold uppercase text-center">
        {title}
      </span>
      <div className="absolute bottom-4 space-x-2 text-center  ">
        {tech.map((t) => (
          <span className="uppercase text-center">{t}</span>
        ))}
      </div>
    </div>
  );
}
