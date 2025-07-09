import React from 'react';
import Card from '../components/card'; // ✅ Use uppercase

const CardPage = () => {
  return (
    <div className="min-h-screen bg-white text-white flex items-center justify-center">
      <Card /> 
    </div>
  );
};

export default CardPage;
