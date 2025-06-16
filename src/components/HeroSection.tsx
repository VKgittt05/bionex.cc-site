
import React from 'react';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(46, 125, 50, 0.7), rgba(46, 125, 50, 0.7)), url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=2000')`
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            🌿 Transforme seu lixo em vida!
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in">
            Nós coletamos seu lixo orgânico e o transformamos em adubo 100% natural.
          </p>
          <button className="bg-lime-400 text-green-900 px-8 py-4 rounded-lg text-xl font-bold hover:bg-lime-300 transition-all transform hover:scale-105 animate-fade-in shadow-lg">
            👉 Cadastre-se para receber seu baldinho!
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
