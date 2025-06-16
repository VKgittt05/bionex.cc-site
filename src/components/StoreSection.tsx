
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
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

        {/* Seção com imagem do caminhão de coleta */}
        <div className="bg-green-800 rounded-xl p-8 shadow-lg text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                🚛 Nossa Frota de Coleta
              </h3>
              <p className="mb-4">
                Contamos com veículos especializados para a coleta de resíduos orgânicos. 
                Nossa frota está equipada com tambores especiais da Bionex para garantir 
                o transporte seguro e eficiente dos materiais.
              </p>
              <p>
                Cada coleta é realizada de forma profissional, respeitando o meio ambiente 
                e garantindo a qualidade do processo de compostagem.
              </p>
            </div>
            <div className="text-center">
              <img 
                src="/lovable-uploads/158ce044-ae65-4e6e-b170-bdb6f343e827.png" 
                alt="Caminhão de coleta Bionex" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreSection;
