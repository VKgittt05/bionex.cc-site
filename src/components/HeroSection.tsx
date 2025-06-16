
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(46, 125, 50, 0.7), rgba(46, 125, 50, 0.7)), url('/lovable-uploads/c81098a0-ed29-4a27-a849-02fce7a5bfaa.png')`
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            🌿 Seu lixo vira vida, sua horta agradece!
          </h1>
          <p className="text-xl md:text-2xl mb-4 animate-fade-in leading-relaxed">
            Com a Bionex, seus resíduos orgânicos se transformam em adubo 100% natural. 
            É fácil participar, a natureza agradece e Maringá fica mais verde! 
          </p>
          <p className="text-lg md:text-xl mb-8 animate-fade-in text-lime-200 font-semibold">
            Faça parte do movimento que está transformando nossa cidade em um lugar mais sustentável, 
            uma composteira de cada vez. 🍃
          </p>
          <Link to="/auth">
            <button className="bg-lime-400 text-green-900 px-8 py-4 rounded-lg text-xl font-bold hover:bg-lime-300 transition-all transform hover:scale-105 animate-fade-in shadow-lg">
              Cadastre-se para receber seu baldinho!
            </button>
          </Link>
          
          <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-6 text-lime-100">
            <div className="flex items-center">
              <span className="text-2xl mr-2">🌱</span>
              <span className="text-sm md:text-base">Coleta em sua casa</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">♻️</span>
              <span className="text-sm md:text-base">Compostagem profissional</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">🌿</span>
              <span className="text-sm md:text-base">Adubo de volta pra você</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
