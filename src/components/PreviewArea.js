// components/PreviewArea.js
import React from 'react';

function PreviewArea({ imageSrc, dressSrc }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md relative h-96 flex justify-center items-center">
      {imageSrc ? (
        <div className="relative">
          <img src={imageSrc} alt="User" className="max-h-96" />
          {dressSrc && (
            <img
              src={dressSrc}
              alt="Dress Overlay"
              className="absolute top-0 left-0 opacity-80"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          )}
        </div>
      ) : (
        <p className="text-gray-500">Preview will appear here</p>
      )}
    </div>
  );
}

export default PreviewArea;
