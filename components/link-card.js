import React from 'react';

export default function WebLinkCard({ url, name }) {
  return (
    <a href={url} target="_blank">
      <div className="w-72 h-16 border border-gray-500 relative">
        <span className="block px-6 mt-6">{name}</span>
        <span className="absolute bottom-0 left-0 w-full h-1 bg-primary"></span>
      </div>
    </a>
  );
}
