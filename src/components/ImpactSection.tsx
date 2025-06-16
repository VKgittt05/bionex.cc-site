
import React from 'react';

const ImpactSection = () => {
  return (
    <section className="py-20 bg-green-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nosso Impacto Ambiental
          </h2>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Juntos estamos transformando o mundo em um lugar mais sustentável
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-green-700 rounded-xl p-8">
            <div className="text-5xl mb-4">🌎</div>
            <div className="text-4xl font-bold mb-2">4,8 toneladas</div>
            <p className="text-green-100">de lixo orgânico reciclado</p>
          </div>
          
          <div className="bg-green-700 rounded-xl p-8">
            <div className="text-5xl mb-4">🌬️</div>
            <div className="text-4xl font-bold mb-2">2.200 kg</div>
            <p className="text-green-100">de CO₂ evitados</p>
          </div>
          
          <div className="bg-green-700 rounded-xl p-8">
            <div className="text-5xl mb-4">🧍</div>
            <div className="text-4xl font-bold mb-2">1,4kg</div>
            <p className="text-green-100">sua contribuição em adubo</p>
          </div>
        </div>

        <div className="mt-16 bg-green-700 rounded-xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Áreas de Atuação</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex items-center justify-center space-x-2">
              <span>📍</span>
              <span>Vila Verde</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span>📍</span>
              <span>Centro</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span>📍</span>
              <span>Jardim das Árvores</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span>📍</span>
              <span>Bairro Sustentável</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
