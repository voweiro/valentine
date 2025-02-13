"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

function LoadingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 md:px-8 bg-pink-400">
      <div className="w-12 h-12 md:w-16 md:h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-md md:text-lg lg:text-xl font-bold text-center text-white">
        Loading, please wait...
      </p>
    </div>
  );
}

export default function ValentinePage() {
  const [noButtonPos, setNoButtonPos] = useState({ top: "50%", left: "50%" });
  const [showVideo, setShowVideo] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isValentine, setIsValentine] = useState(false);

  useEffect(() => {
    const today = new Date();
    const valentineDate = new Date(today.getFullYear(), 1, 14); // February 14th
    setIsValentine(today.toDateString() === valentineDate.toDateString());

    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simulating loading delay
  }, []);

  const moveNoButton = () => {
    const newX = Math.random() * 80 + 10;
    const newY = Math.random() * 60 + 20;
    setNoButtonPos({ top: `${newY}%`, left: `${newX}%` });
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  if (!isValentine) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-pink-400 text-center">
        <h1 className="text-xl md:text-3xl font-bold text-gray-800">
          Haha! You have to wait until tomorrow! 😂🎉
        </h1>
        <Image
          src="https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif"
          alt="Laughing Cat"
          width={200}
          height={200}
          className="mt-4"
        />
      </div>
    );
  }

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-pink-400 text-center">
      {/* Falling Roses Animation */}
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

          {/* Text Box */}
          <h1 className="text-xl md:text-3xl font-bold text-gray-800">
            Idara 💖, Will you be my Valentine? 🥺🥺🥺
          </h1>

          {/* Buttons */}
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
        <div className="flex flex-col items-center">
          <p className="text-xl md:text-3xl font-bold text-gray-800 mb-4">
            Happy Valentine's Day to the love of my life, my forever sweetheart! 💘💕
          </p>
          <video
            className="w-[70%] rounded-lg shadow-lg"
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
