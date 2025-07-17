import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { SiGithub, SiX } from "react-icons/si";

const GITHUB_URL = 'https://github.com/hitoriiiiiiii/Framer.git';
const TWITTER_URL = 'https://twitter.com/panic_coder';

const buttonLinks = [
  { label: 'Button', to: '/button', desc: 'Animated, modern buttons' },
  { label: 'Card', to: '/card', desc: 'Beautiful card layouts' },
  { label: 'Contact Page', to: '/contact', desc: 'Get in touch' },
];

const cardGradients = [
  'from-[#F5F5DC] to-[#D2B48C]',
  'from-[#F5F5DC] to-[#D2B48C]',
  'from-[#F5F5DC] to-[#D2B48C]',
];

export default function HomePage() {
  const [glow, setGlow] = useState(false);
  const controls = useAnimation();

  const handleHeaderClick = () => {
    setGlow(true);
    controls.start({
      z: [0, 80, 0], // Pops out and returns
      transition: { duration: 0.8, times: [0, 0.5, 1], ease: 'easeInOut' }
    });
    setTimeout(() => setGlow(false), 1200);
  };

  return (
    <div className="min-h-screen w-full relative">
      {/* Radial Gradient Background from Bottom */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(125% 125% at 50% 90%, #fff 40%, #7c3aed 100%)",
        }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center px-4 min-h-screen w-full">
        {/* Hero Section */}
        <section className="relative z-10 flex flex-col items-center mb-12 mt-8" style={{ perspective: 1000 }}>
          <motion.h1
            className={`text-lg xs:text-xl sm:text-2xl md:text-4xl lg:text-4xl font-extrabold text-center break-words leading-tight px-2 sm:px-0 drop-shadow-lg mb-4 transition-colors duration-300 ${glow ? 'magenta-pink-gradient animate-gradient-x' : 'text-black'}`}
            onClick={handleHeaderClick}
            style={{ cursor: 'pointer' }}
            animate={controls}
            initial={{ z: 0, scale: 1.5 }}
          >
            Hitorii&apos;s Framer Projects 💖
          </motion.h1>
          <div className="flex flex-col my-12 items-center justify-center gap-6">
            {/* Flower pattern above */}
            <div
              className="btn w-full max-w-5xl mx-auto"
              style={{
                position: "relative",
                width: "100%",
                height: "clamp(4em, 18vw, 6em)",
                marginBottom: "2.5em",
                minHeight: '3em',
              }}
            >
              {/* Desktop/Laptop Flowers */}
              <div className="hidden sm:block w-full h-full">
                {/* Flower 1 (far left, top) */}
                <div className="flower" style={{ position: "absolute", left: "8vw", top: "10%" }}>
                  <div className="petal one" style={{ transform: 'rotate(0deg) translateY(-0.3em)' }}></div>
                  <div className="petal two" style={{ transform: 'rotate(60deg) translateY(-0.3em)' }}></div>
                  <div className="petal three" style={{ transform: 'rotate(120deg) translateY(-0.3em)' }}></div>
                  <div className="petal four" style={{ transform: 'rotate(180deg) translateY(-0.3em)' }}></div>
                  <div className="petal five" style={{ transform: 'rotate(240deg) translateY(-0.3em)' }}></div>
                  <div className="petal six" style={{ transform: 'rotate(300deg) translateY(-0.3em)' }}></div>
                </div>
                {/* Flower 2 (far left, bottom) */}
                <div className="flower" style={{ position: "absolute", left: "16vw", top: "55%" }}>
                  <div className="petal one" style={{ transform: 'rotate(0deg) translateY(-0.3em)' }}></div>
                  <div className="petal two" style={{ transform: 'rotate(60deg) translateY(-0.3em)' }}></div>
                  <div className="petal three" style={{ transform: 'rotate(120deg) translateY(-0.3em)' }}></div>
                  <div className="petal four" style={{ transform: 'rotate(180deg) translateY(-0.3em)' }}></div>
                  <div className="petal five" style={{ transform: 'rotate(240deg) translateY(-0.3em)' }}></div>
                  <div className="petal six" style={{ transform: 'rotate(300deg) translateY(-0.3em)' }}></div>
                </div>
                {/* Flower 3 (center left, top) */}
                <div className="flower" style={{ position: "absolute", left: "24vw", top: "10%" }}>
                  <div className="petal one" style={{ transform: 'rotate(0deg) translateY(-0.3em)' }}></div>
                  <div className="petal two" style={{ transform: 'rotate(60deg) translateY(-0.3em)' }}></div>
                  <div className="petal three" style={{ transform: 'rotate(120deg) translateY(-0.3em)' }}></div>
                  <div className="petal four" style={{ transform: 'rotate(180deg) translateY(-0.3em)' }}></div>
                  <div className="petal five" style={{ transform: 'rotate(240deg) translateY(-0.3em)' }}></div>
                  <div className="petal six" style={{ transform: 'rotate(300deg) translateY(-0.3em)' }}></div>
                </div>
                {/* Flower 4 (center right, bottom) */}
                <div className="flower" style={{ position: "absolute", left: "32vw", top: "55%" }}>
                  <div className="petal one" style={{ transform: 'rotate(0deg) translateY(-0.3em)' }}></div>
                  <div className="petal two" style={{ transform: 'rotate(60deg) translateY(-0.3em)' }}></div>
                  <div className="petal three" style={{ transform: 'rotate(120deg) translateY(-0.3em)' }}></div>
                  <div className="petal four" style={{ transform: 'rotate(180deg) translateY(-0.3em)' }}></div>
                  <div className="petal five" style={{ transform: 'rotate(240deg) translateY(-0.3em)' }}></div>
                  <div className="petal six" style={{ transform: 'rotate(300deg) translateY(-0.3em)' }}></div>
                </div>
                {/* Flower 5 (right, top) */}
                <div className="flower" style={{ position: "absolute", left: "40vw", top: "10%" }}>
                  <div className="petal one" style={{ transform: 'rotate(0deg) translateY(-0.3em)' }}></div>
                  <div className="petal two" style={{ transform: 'rotate(60deg) translateY(-0.3em)' }}></div>
                  <div className="petal three" style={{ transform: 'rotate(120deg) translateY(-0.3em)' }}></div>
                  <div className="petal four" style={{ transform: 'rotate(180deg) translateY(-0.3em)' }}></div>
                  <div className="petal five" style={{ transform: 'rotate(240deg) translateY(-0.3em)' }}></div>
                  <div className="petal six" style={{ transform: 'rotate(300deg) translateY(-0.3em)' }}></div>
                </div>
                {/* Flower 6 (far right, bottom) */}
                <div className="flower" style={{ position: "absolute", left: "48vw", top: "55%" }}>
                  <div className="petal one" style={{ transform: 'rotate(0deg) translateY(-0.3em)' }}></div>
                  <div className="petal two" style={{ transform: 'rotate(60deg) translateY(-0.3em)' }}></div>
                  <div className="petal three" style={{ transform: 'rotate(120deg) translateY(-0.3em)' }}></div>
                  <div className="petal four" style={{ transform: 'rotate(180deg) translateY(-0.3em)' }}></div>
                  <div className="petal five" style={{ transform: 'rotate(240deg) translateY(-0.3em)' }}></div>
                  <div className="petal six" style={{ transform: 'rotate(300deg) translateY(-0.3em)' }}></div>
                </div>
              </div>
              {/* Mobile Flowers with tap-to-bloom */}
              <MobileFlowers />
            </div>
            {/* Text with visible wrapper below */}
            <div className="wrapper mx-auto w-full max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl px-2 sm:px-4" style={{ minWidth: '0', maxWidth: '100%' }}>
              <span className="text font-bold text-black block text-center text-base sm:text-lg md:text-xl">
                Explore a collection of playful, interactive UI experiments and components built with Framer Motion.<br />
                Dive in, get inspired, and remix your favorites!
              </span>
            </div>
          </div>
          <div className="flex space-x-6 mt-1">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-950 transition-colors"
              aria-label="GitHub"
            >
              <SiGithub size={38} />
            </a>
            <a
              href={TWITTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-950 transition-colors"
              aria-label="Twitter"
            >
              <SiX size={38} />
            </a>
          </div>
        </section>

        {/* Buttons */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 z-10 w-full max-w-4xl mt-4">
          {buttonLinks.map((btn, idx) => (
            <motion.div
              key={btn.label}
              whileHover={{ rotate: -2 + idx * 2 }}
              whileTap={{ boxShadow: '0 0 0 8px rgba(236,72,153,0.15)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className={`group relative bg-gradient-to-br ${cardGradients[idx % cardGradients.length]} rounded-2xl p-2 sm:p-4 md:p-6 max-w-[170px] sm:max-w-xs w-full`}
            >
              <Link
                to={btn.to}
                className="block bg-transparent rounded-2xl p-3 sm:p-6 h-full transition-colors duration-300 group-hover:bg-white/60"
              >
                <div className="flex flex-col items-center justify-center h-full">
                  <span className="text-base sm:text-lg md:text-2xl font-bold text-smokey-black mb-1 sm:mb-2">{btn.label}</span>
                  <span className="text-xs sm:text-sm text-center text-smokey-black">{btn.desc}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileFlowers() {
  const [bloom, setBloom] = useState(false);
  return (
    <div
      className={`flex flex-wrap justify-center items-center gap-4 sm:hidden w-full h-full ${bloom ? 'bloom' : ''}`}
      onTouchStart={() => setBloom(true)}
      onTouchEnd={() => setTimeout(() => setBloom(false), 600)}
      onMouseDown={() => setBloom(true)}
      onMouseUp={() => setTimeout(() => setBloom(false), 600)}
    >
      {[...Array(6)].map((_, i) => (
        <div key={i} className="flower" style={{ width: '1.2em', height: '1.2em' }}>
          <div className={`petal one${bloom ? ' bloom' : ''}`} style={{ transform: 'rotate(0deg) translateY(-0.2em)' }}></div>
          <div className={`petal two${bloom ? ' bloom' : ''}`} style={{ transform: 'rotate(60deg) translateY(-0.2em)' }}></div>
          <div className={`petal three${bloom ? ' bloom' : ''}`} style={{ transform: 'rotate(120deg) translateY(-0.2em)' }}></div>
          <div className={`petal four${bloom ? ' bloom' : ''}`} style={{ transform: 'rotate(180deg) translateY(-0.2em)' }}></div>
          <div className={`petal five${bloom ? ' bloom' : ''}`} style={{ transform: 'rotate(240deg) translateY(-0.2em)' }}></div>
          <div className={`petal six${bloom ? ' bloom' : ''}`} style={{ transform: 'rotate(300deg) translateY(-0.2em)' }}></div>
        </div>
      ))}
    </div>
  );
}
