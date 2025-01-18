'use client'; 

import React from 'react';
import '../../styles/button.css'; 

export default function Home() {
  const handleLoginClick = () => {
    window.location.href = 'http://localhost:3000/MyOcean';
  };

  return (
    <div
      className='flex flex-col justify-center items-center h-screen'
      style={{ backgroundImage: 'url(/oceanbg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="text-8xl font-extrabold animate-surf pb-10">Surf or Sink</div>
      
      <div className="flex space-x-4 mt-4">
        <button className="button-27" role="button" onClick={handleLoginClick}>Log in</button>
        <button className="button-27" role="button">Sign up</button>
      </div>
    </div>
  );
}
