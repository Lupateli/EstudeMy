import React from "react";
 
const Triha = () => {
  return (
    <main className="flex flex-col items-center min-h-screen bg-white p-8 relative my-2">
      {/* Unit Header */}
      <div className="bg-blue-400 text-white p-4 rounded-lg mb-8 flex justify-between items-center w-full max-w-md">
        <div>
          <h2 className="text-xl font-bold">Unidade 1</h2>
          <p>Form basic sentences, greet people</p>
        </div>
        <button className="bg-white text-blue-500 font-bold px-4 py-2 rounded">
          GUIDEBOOK
        </button>
      </div>
 
      {/* Progress Path */}
      <div className="flex flex-col items-center space-y-6">
        {/* Start Button */}
        <button className="bg-blue-400 text-white p-4 rounded-full shadow-md w-16 h-16 flex items-center justify-center text-sm font-bold">
          START
        </button>
 
        {/* Locked Steps */}
        <div className="bg-blue-400 w-12 h-12 rounded-full flex items-center justify-center text-2xl">
          ⭐
        </div>
        <div className="bg-blue-400 w-12 h-12 rounded-full flex items-center justify-center text-2xl">
          ⭐
        </div>
        <div className="bg-blue-400 w-12 h-12 rounded-full flex items-center justify-center text-2xl">
          ⭐
        </div>
        <div className="bg-blue-400 w-12 h-12 rounded-full flex items-center justify-center text-2xl">
          ☆
        </div>
        <div className="bg-blue-400 w-12 h-12 rounded-full flex items-center justify-center text-2xl">
          ☆
        </div>
      </div>
 
 
    </main>
  );
}
 
export default Triha;