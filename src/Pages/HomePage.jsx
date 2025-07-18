import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { SiGithub, SiX } from "react-icons/si";
import { buttonLinks } from "../components/buttonlinks";

const GITHUB_URL = "https://github.com/hitoriiiiiiii/Framer.git";
const TWITTER_URL = "https://twitter.com/panic_coder";

export default function HomePage() {
  const [glow, setGlow] = useState(false);
  const controls = useAnimation();

  const handleHeaderClick = () => {
    setGlow(true);
    controls.start({
      z: [0, 80, 0],
      transition: { duration: 0.8, times: [0, 0.5, 1], ease: "easeInOut" },
    });
    setTimeout(() => setGlow(false), 1200);
  };

  return (
    <div className="relative min-h-screen w-full">
      {/* Background Gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 90%, #fff 40%, #7c3aed 100%)",
        }}
      />
      <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-4">
        <section
          className="relative z-10 mt-8 mb-12 flex flex-col items-center"
          style={{ perspective: 1000 }}
        >
          <motion.h1
            className={`xs:text-xl mt-12 mb-12 px-2 text-center text-lg leading-tight font-extrabold break-words drop-shadow-lg transition-colors duration-300 sm:px-0 sm:text-2xl md:text-4xl lg:text-4xl ${
              glow ? "magenta-pink-gradient animate-gradient-x" : "text-black"
            }`}
            onClick={handleHeaderClick}
            style={{ cursor: "pointer" }}
            animate={controls}
            initial={{ z: 0, scale: 1.5 }}
          >
            Hitorii&apos;s Framer Projects 💖
          </motion.h1>

          <div className="my-12 flex flex-col items-center justify-center gap-6">
            {/* flower*/}
            <div
              className="btn mx-auto w-full max-w-5xl"
              style={{
                position: "relative",
                width: "100%",
                height: "clamp(4em, 18vw, 6em)",
                marginBottom: "2.5em",
                minHeight: "3em",
              }}
            >
              <div className="hidden h-full w-full sm:block">
                {/* Desktop flowers positions... */}
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
              </div>
              <MobileFlowers />
            </div>

            {/* Mobile Text Section */}
            <div className="block sm:hidden mx-auto w-full max-w-xs px-4">
              <span className="text font-bold text-black block text-center text-sm leading-normal">
                Explore playful, interactive UI experiments with Framer Motion.
                <br />
                Get inspired, remix your favorites!
              </span>
            </div>

            {/* Desktop Text Section */}
            <div className="hidden sm:block mx-auto w-full max-w-2xl md:max-w-4xl lg:max-w-5xl px-2">
              <span className="text font-bold text-black block text-center text-base sm:text-lg md:text-xl leading-normal">
                Explore a collection of playful, interactive UI experiments and components built with Framer Motion.
                <br />
                Dive in, get inspired, and remix your favorites!
              </span>
            </div>
          </div>

          <div className="mt-1 flex space-x-6">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-purple-950"
              aria-label="GitHub"
            >
              <SiGithub size={38} />
            </a>
            <a
              href={TWITTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-purple-950"
              aria-label="Twitter"
            >
              <SiX size={38} />
            </a>
          </div>
        </section>

        {/* Buttons */}
        <div className="z-10 grid w-full max-w-4xl grid-cols-1 gap-x-8 gap-y-8 pt-8 pb-12 sm:grid-cols-2">
          {buttonLinks.map((btn) => (
            <div key={btn.label} className="flex justify-center">
              <div className="card flex flex-col items-center">
                <Link to={btn.to} style={{ textDecoration: "none" }}>
                  <button className="uiverse-btn m-4">
                    <span>{btn.label}</span>
                  </button>
                </Link>
                <div className="card-body w-full">
                  <div className="card-description text-center">
                    {btn.desc}
                  </div>
                </div>
              </div>
            </div>
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
      className={
        "flex h-full w-full flex-wrap items-center justify-center gap-4 sm:hidden"
      }
      onTouchStart={() => setBloom(true)}
      onTouchEnd={() => setTimeout(() => setBloom(false), 600)}
      onMouseDown={() => setBloom(true)}
      onMouseUp={() => setTimeout(() => setBloom(false), 600)}
    >
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="flower"
          style={{ width: "1.2em", height: "1.2em" }}
        >
          <div
            className={`petal one${bloom ? "bloom" : ""}`}
            style={{ transform: "rotate(0deg) translateY(-0.2em)" }}
          ></div>
          <div
            className={`petal two${bloom ? "bloom" : ""}`}
            style={{ transform: "rotate(60deg) translateY(-0.2em)" }}
          ></div>
          <div
            className={`petal three${bloom ? "bloom" : ""}`}
            style={{ transform: "rotate(120deg) translateY(-0.2em)" }}
          ></div>
          <div
            className={`petal four${bloom ? "bloom" : ""}`}
            style={{ transform: "rotate(180deg) translateY(-0.2em)" }}
          ></div>
          <div
            className={`petal five${bloom ? "bloom" : ""}`}
            style={{ transform: "rotate(240deg) translateY(-0.2em)" }}
          ></div>
          <div
            className={`petal six${bloom ? "bloom" : ""}`}
            style={{ transform: "rotate(300deg) translateY(-0.2em)" }}
          ></div>
        </div>
      ))}
    </div>
  );
}
