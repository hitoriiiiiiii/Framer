import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const HomePage = () => {
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const newRipple = {
      id: Date.now(),
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 1200);
  };

  return (
    <div
      onClick={handleClick}
      className="relative overflow-hidden min-h-screen w-full bg-black flex flex-col items-center justify-center px-4 cursor-pointer"
    >
      {/* Ripple Effect */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            className="absolute bg-pink-400/20 rounded-full pointer-events-none"
            initial={{
              scale: 0,
              opacity: 0.5,
              left: ripple.x,
              top: ripple.y,
            }}
            animate={{ scale: 20, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.3, ease: 'easeOut' }}
            style={{
              width: 200,
              height: 200,
              translateX: '-50%',
              translateY: '-50%',
              zIndex: 0,
            }}
          />
        ))}
      </AnimatePresence>

      {/* Title */}
      <h1 className="text-4xl font-cursive font-semibold text-center bg-gradient-to-r from-pink-500 via-rose-400 to-violet-500 bg-clip-text text-transparent z-10 mb-10">
        hitorii's framer projects 💖
      </h1>

      {/* Buttons */}
      <div className="flex flex-col items-center space-y-6 z-10">
        {[
          { label: 'Button', to: '/button' },
          { label: 'Card', to: '/card' },
          { label: 'Contact Page', to: '/contact' },
        ].map((btn, idx) => (
          <Link
            key={idx}
            to={btn.to}
            className="bg-gradient-to-r from-rose-600 to-purple-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-pink-400/50 transition-all duration-300 hover:scale-105 font-medium"
          >
            {btn.label}
          </Link>
        ))}
      </div>
    
    </div>
  );
};

export default HomePage;
