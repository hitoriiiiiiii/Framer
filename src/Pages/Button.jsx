import React from 'react';
import { motion } from 'framer-motion';

const Button= () => {
  return (
    <div
      className="h-screen w-full bg-neutral-950 flex flex-col items-center justify-center space-y-6 px-4"
      style={{
        backgroundImage:
          'radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212, 0.2) 1px, transparent 1px)',
        backgroundSize: '8px 8px',
        backgroundRepeat: 'repeat',
        perspective: '1000px', // 🎯 Enables 3D transform
      }}
    >
      <h1 className="text-white text-4xl font-semibold">Hello World!!</h1>

      <motion.button
        whileHover={{
          rotateX: 25,
          rotateY: 15,
          scale: 1.08,
          translateZ: 80,
          y: -5,
          boxShadow: '0px 30px 60px rgba(6,182,212,0.4), 0px 0px 30px rgba(6,182,212,0.7)',
        }}
        whileTap={{
            y:0,
        }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.8, 0.25, 1], // ease-in-out
        }}
        className="group relative text-neutral-300 px-10 py-3 rounded-lg bg-black shadow-[inset_0_1px_4px_rgba(255,255,255,0.1),inset_0_-1px_4px_rgba(255,255,255,0.1)] transition duration-300 will-change-transform"
        style={{
          transformStyle: 'preserve-3d', // Needed to make Z-translate visible
        }}
      >
        Subscribe

        {/* Underline on hover */}
        <span className="absolute inset-x-0 bottom-px h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-3/4 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

        {/* Blurred glowing underline on hover */}
        <span className="absolute inset-x-0 bottom-0 h-[4px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-3/4 mx-auto opacity-0 group-hover:opacity-40 blur-sm transition-opacity duration-300"></span>
      </motion.button>
    </div>
  );
};

export default Button;
