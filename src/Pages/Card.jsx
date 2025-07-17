import React from 'react';
import Card from '../components/card'; // ✅ Use uppercase

const CardPage = () => {
  return (
    <div className="min-h-screen w-full relative bg-black">
      {/* Arctic Lights Background with Top Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(34, 197, 94, 0.25), transparent 70%), #000000",
        }}
      />
      {/* Your Content/Components */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <Card />
      </div>
    </div>
  );
};

export default CardPage;
