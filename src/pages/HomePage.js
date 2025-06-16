// pages/HomePage.js
import React, { useState } from 'react';
import ImageUpload from '../components/ImageUpload';
import DressSelector from '../components/DressSelector';
import PreviewArea from '../components/PreviewArea';

function HomePage() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [selectedDress, setSelectedDress] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-center text-purple-700">
        Virtual Try-On Platform 👗
      </h1>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
        <ImageUpload onImageUpload={setUploadedImage} />
        <PreviewArea imageSrc={uploadedImage} dressSrc={selectedDress} />
      </div>

      <DressSelector onDressSelect={setSelectedDress} />
    </div>
  );
}

export default HomePage;
