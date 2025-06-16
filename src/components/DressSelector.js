// components/DressSelector.js
import React from 'react';
import dress1 from '../assets/clothes/red.png';
import dress2 from '../assets/clothes/blue.png';

const dresses = [
  { name: 'Red Dress', src: dress1 },
  { name: 'Blue Dress', src: dress2 },
];

function DressSelector({ onDressSelect }) {
  return (
    <div className="mt-6 grid grid-cols-2 gap-4">
      {dresses.map((dress) => (
        <img
          key={dress.name}
          src={dress.src}
          alt={dress.name}
          onClick={() => onDressSelect(dress.src)}
          className="cursor-pointer border border-gray-200 rounded-lg hover:border-purple-500"
        />
      ))}
    </div>
  );
}

export default DressSelector;
