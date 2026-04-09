import React from 'react';

const AuthLayout = ({ children, videoSrc }) => {
  return (
    <div className="relative h-screen w-screen bg-black overflow-hidden flex justify-center items-center">
      {/* Full screen video background */}
      <video 
        src={videoSrc || "/videos/hero-4.mp4"} 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center opacity-50 pointer-events-none"
      />
      
      {/* Dynamic dark glowing overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30 z-10" />

      {/* Floating dynamic glass container centered in the middle */}
      <div className="relative z-20 w-full max-w-lg px-4 sm:px-6 animate-fade-in-up">
        {/* Glow behind the card */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2.5rem] blur-xl opacity-20 sm:opacity-30" />
        
        <div className="relative bg-white/5 backdrop-blur-[30px] rounded-3xl p-6 sm:p-10 lg:p-12 border border-white/10 shadow-2xl">
           {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
