"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Helper function to format numbers
const formatNumber = (num) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k';
  }
  return num;
};

// Number animation hook
const useCountUp = (end, duration) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 50); // Calculate the increment

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 50);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
};

export default function Home() {
  const followers = useCountUp(50, 2000); // Adjust the numbers as needed
  const likes = useCountUp(123, 2000);
  const posts = useCountUp(3, 2000);

  // Function to handle clicking on a meme (redirecting to Instagram)
  const handleClickMeme = () => {
    window.open('https://www.instagram.com/avesham_memes', '_blank');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Instagram Link */}
      <a
        href="https://www.instagram.com/avesham_memes"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center mt-10"
      >
        <Image
          className="w-32 h-32 sm:w-48 sm:h-48 rounded-full object-cover shadow-lg"
          src="/logo.jpg" // Replace with your meme image path
          alt="Meme Profile"
          width={100} height={100}
        />
        <h1 className="text-3xl sm:text-5xl font-bold mt-4 sm:mt-6 mb-2 sm:mb-4 text-center cursor-pointer">
          avesham_memes
        </h1>
      </a>

      {/* Statistics */}
      <div className="flex flex-row justify-around w-full max-w-lg mt-6 sm:mt-8">
        <div className="flex flex-col items-center">
          <span className="text-2xl sm:text-3xl font-semibold">{formatNumber(followers)}</span>
          <span className="text-sm sm:text-base">Followers</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl sm:text-3xl font-semibold">{formatNumber(likes)}</span>
          <span className="text-sm sm:text-base">Likes</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl sm:text-3xl font-semibold">{formatNumber(posts)}</span>
          <span className="text-sm sm:text-base">Posts</span>
        </div>
      </div>

      {/* Separator Line */}
      <hr className="w-full my-8 border-gray-700" />

      {/* Bio Section */}
      <div className="text-center space-y-4 px-4 sm:px-0">
        <p className="text-lg sm:text-xl">Passionate about creating and sharing memes.</p>
        <p className="text-lg sm:text-xl">Love to bring smiles to people's faces.</p>
        <p className="text-lg sm:text-xl">Always looking for the next big meme trend.</p>
      </div>
      
      {/* Latest Posts Section */}
      <div className="mt-10">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Latest Memes</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {/* Example Memes */}
          <a href="https://www.instagram.com/avesham_memes" target="_blank" rel="noopener noreferrer" onClick={handleClickMeme}>
            <Image src="/logo.jpg" width={100} height={100} alt="Meme 1" className="w-full h-32 sm:h-48 object-cover rounded-lg shadow-md cursor-pointer" />
          </a>
          <a href="https://www.instagram.com/avesham_memes" target="_blank" rel="noopener noreferrer" onClick={handleClickMeme}>
            <Image src="/logo.jpg" width={100} height={100} alt="Meme 2" className="w-full h-32 sm:h-48 object-cover rounded-lg shadow-md cursor-pointer" />
          </a>
          <a href="https://www.instagram.com/avesham_memes" target="_blank" rel="noopener noreferrer" onClick={handleClickMeme}>
            <Image src="/logo.jpg" width={100} height={100} alt="Meme 3" className="w-full h-32 sm:h-48 object-cover rounded-lg shadow-md cursor-pointer" />
          </a>
          {/* Add more memes as needed */}
        </div>
      </div>

      {/* Footer */}
      <footer className="flex flex-col items-center mt-12 mb-6 text-sm text-gray-400">
        <a
          href="https://www.instagram.com/avesham_memes"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <i className="fab fa-instagram text-2xl mr-2"></i> Follow us on Instagram
        </a>
        <p>&copy; 2024 avesham_memes. All rights reserved.</p>
      </footer>
    </div>
  );
}
