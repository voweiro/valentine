"use client"

import { useState } from "react";
import Image from "next/image";


export default function ValentinePage() {
  const [noButtonPos, setNoButtonPos] = useState({ top: "50%", left: "50%" });
  const [showVideo, setShowVideo] = useState(false);

  // Function to move the "No" button randomly
  const moveNoButton = () => {
    const newX = Math.random() * 80 + 10; // Keeps it within screen
    const newY = Math.random() * 60 + 20;
    setNoButtonPos({ top: `${newY}%`, left: `${newX}%` });
  };

  return (
    <div className="relative flex flex-col   items-center justify-center min-h-screen overflow-hidden bg-pink-400 text-center">
      {/* Falling Roses Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <Image
            key={i}
            src="rose.jpg"
            alt="Rose"
            className="absolute w-20 h-20 opacity-75 animate-fall"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 5 + 5}s`,
            }}
          />
        ))}
      </div>

      {!showVideo ? (
        <>
          {/* Animated Cat */}
          <div className="w-40 h-40 mb-4">
            <Image
              src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif"
              alt="Cute Smiling Cat"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Text Box */}
          <h1 className="text-xl md:text-3xl font-bold text-gray-800">
            Will you be my Valentine, my cute Idara? 💖
          </h1>

          {/* Buttons */}
          <div className="mt-6">
            <button
              className="px-6 py-2 text-lg font-semibold text-white bg-red-500 rounded-lg shadow-lg hover:bg-red-600 transition"
              onClick={() => setShowVideo(true)} // Show video when "Yes" is clicked
            >
              Yes
            </button>
            <button
              className="absolute px-6 py-2 text-lg font-semibold text-white bg-gray-500 rounded-lg shadow-lg transition"
              style={{ top: noButtonPos.top, left: noButtonPos.left }}
              onMouseEnter={moveNoButton}
              onClick={moveNoButton}
            >
              No
            </button>
          </div>
        </>
      ) : (
        // Video Section
        <div className="flex flex-col items-center">
          <h1 className="text-xl md:text-3xl font-bold text-gray-800 mb-4">
            Yay! Happy Valentine's Day, My Love! ❤️🥰
          </h1>
          <video
            className="w-[90%] md:w-[60%] rounded-lg shadow-lg"
            controls
            autoPlay
          >
            <source src="/val.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
}
