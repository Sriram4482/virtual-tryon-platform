// components/ImageUpload.js
import React from 'react';

function ImageUpload({ onImageUpload }) {
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onImageUpload(URL.createObjectURL(file));
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Upload Your Photo</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="border border-gray-300 p-2 w-full rounded-md"
      />
    </div>
  );
}

export default ImageUpload;
