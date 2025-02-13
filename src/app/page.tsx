"use client";

import { useState } from "react";
import Image from "next/image";

export default function ValentinePage() {
  const [noButtonPos, setNoButtonPos] = useState({ top: "50%", left: "50%" });
  const [showVideo, setShowVideo] = useState(false);

  // Function to randomly move the "No" button
  const moveNoButton = () => {
    const newX = Math.random() * 80 + 10;
    const newY = Math.random() * 60 + 20;
    setNoButtonPos({ top: `${newY}%`, left: `${newX}%` });
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-pink-400 text-center">
      {/* Falling Roses Animation */}
      {!showVideo && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <Image
              key={i}
              src="/rose.jpg"
              alt="Rose"
              width={50}
              height={50}
              className="absolute opacity-75 animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 5 + 5}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Valentine Proposal Section */}
      {!showVideo ? (
        <>
          {/* Animated Cat */}
          <div className="w-40 h-40 mb-4">
            <Image
              src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif"
              alt="Cute Smiling Cat"
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Proposal Message */}
          <h1 className="text-xl md:text-3xl font-bold text-gray-800">
            Idara 💖, Will you be my Valentine? 🥺🥺🥺
          </h1>

          {/* Yes & No Buttons */}
          <div className="mt-6">
            <button
              className="px-6 py-2 text-lg font-semibold text-white bg-red-500 rounded-lg shadow-lg hover:bg-red-600 transition"
              onClick={() => setShowVideo(true)}
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
        <div className="flex flex-col items-center w-[90%] md:w-[70%] mx-auto">
          <p className="text-lg md:text-xl font-bold text-gray-800 mb-4 leading-relaxed">
            Happy Valentine's Day to the love of my life, my forever sweetheart, my idara 💘💕  
            You're the sunshine that brightens up my day ☀, the calm in every storm 🌪,  
            and the safe haven where I can always be myself. 🏠  
            Your love is my guiding light 💡, my shelter 🏕, and my home. 🏡  

            Every moment I spend with you is a gift 🎁, every kiss a treasure 💋,  
            and every whispered promise a vow to cherish and adore you forever. 💏  
            I love you more with each passing day 📆, more with each shared laugh 😂,  
            and more with each tender touch. ❤️  

            You're the melody that fills my heart with joy 🎶, the rhythm that makes me whole. 🎵  
            Forever and always, my love, my heart belongs to you. 💗  

            **Happy Valentine's Day, babe!** 🎉💕❤️🥰  
          </p>

          {/* Video */}
          <video
            className="w-full  md:w-[70%] rounded-lg shadow-lg"
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
