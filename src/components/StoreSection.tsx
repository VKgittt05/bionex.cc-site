
import React from 'react';

const StoreSection = () => {
  const products = [
    {
      name: "Compostagem Comum",
      price: "R$ 15/kg",
      description: "Adubo orgânico básico para plantas em geral",
      image: "🌱"
    },
    {
      name: "Húmus de Minhoca",
      price: "R$ 25/kg",
      description: "Rico em nutrientes, ideal para hortas",
      image: "🪱"
    },
    {
      name: "Terra Preta",
      price: "R$ 30/kg",
      description: "Premium, perfeita para plantas exigentes",
      image: "🌿"
    }
  ];

  return (
    <section id="loja" className="py-20 bg-cream-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Loja de Adubo
          </h2>
          <p className="text-xl text-green-700 max-w-2xl mx-auto">
            Adubos naturais produzidos com compostagem sustentável
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="text-6xl text-center mb-4">{product.image}</div>
              <h3 className="text-xl font-bold text-green-800 mb-2">{product.name}</h3>
              <p className="text-green-700 mb-4">{product.description}</p>
              <div className="text-2xl font-bold text-green-800 mb-6">{product.price}</div>
              <div className="space-y-3">
                <button className="w-full bg-green-800 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
                  🛒 Comprar
                </button>
                <button className="w-full bg-lime-400 text-green-900 py-3 rounded-lg hover:bg-lime-300 transition-colors">
                  ♻️ Resgatar Meu Adubo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoreSection;
