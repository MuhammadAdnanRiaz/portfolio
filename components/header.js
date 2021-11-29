import React from 'react';

export default function Header() {
  return (
    <header
      className="min-h-screen bg-home-bg 
    bg-contain sm:bg-cover bg-repeat-space sm:bg-no-repeat text-white px-5 sm:px-36"
    >
      <div className="flex flex-col h-screen justify-center py-8 tracking-wider	">
        <span>Hi there👋, I’m</span>
        <div className="relative w-96 h-24">
          <span className="block text-7xl absolute top-0 left-0 font-semibold">
            adnan.
          </span>
        </div>
        <span className="block py-2 text-primary font-semibold min-w-full tracking-wider	 ">
          DESIGNER + DEVELOPER 👨‍💻
        </span>
        <span className="block pb-4 text-gray-500 sm:text-sm w-64">
          I’m a design minded front-end developer based in Lagos, Nigeria.
        </span>
        <a
          href="#contact"
          className="block uppercase bg-primary text-black 
        text-sm py-2 px-12 rounded-full self-start hover:bg-black hover:text-white hover:border 
        hover:border-white"
        >
          hire me
        </a>
      </div>
    </header>
  );
}
