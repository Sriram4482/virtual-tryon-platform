// components/UploadBox.js
import React from "react";

const UploadBox = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Upload Your Photo</h2>
      <input
        type="file"
        accept="image/*"
        className="border border-gray-300 p-2 w-full rounded-md"
      />
    </div>
  );
};

export default UploadBox;
