
import React from 'react';

const PlansSection = () => {
  const plans = [
    {
      icon: "🌱",
      name: "Plano Horta",
      description: "Para quem quer plantar em casa",
      price: "R$ 29,90/mês",
      features: ["Coleta quinzenal", "Balde de 10L", "1kg de adubo/mês"]
    },
    {
      icon: "🪴",
      name: "Plano Família",
      description: "Coleta semanal para até 4 pessoas",
      price: "R$ 49,90/mês",
      features: ["Coleta semanal", "Balde de 20L", "2kg de adubo/mês"],
      popular: true
    },
    {
      icon: "🌿",
      name: "Plano Bairro",
      description: "Ideal para condomínios ou vizinhanças",
      price: "R$ 199,90/mês",
      features: ["Coleta 2x semana", "Múltiplos baldes", "10kg de adubo/mês"]
    },
    {
      icon: "♻️",
      name: "Essencial",
      description: "Coleta quinzenal + 1kg de adubo/mês",
      price: "R$ 19,90/mês",
      features: ["Coleta quinzenal", "Balde de 5L", "1kg de adubo/mês"]
    },
    {
      icon: "🌾",
      name: "Produtor",
      description: "Grandes volumes para sítios ou hortas",
      price: "R$ 299,90/mês",
      features: ["Coleta diária", "Containers grandes", "20kg de adubo/mês"]
    }
  ];

  return (
    <section id="planos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Nossos Planos
          </h2>
          <p className="text-xl text-green-700 max-w-2xl mx-auto">
            Escolha o plano ideal para sua necessidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 ${
                plan.popular 
                  ? 'bg-green-800 text-white border-4 border-lime-400' 
                  : 'bg-white border-2 border-green-200'
              }`}
            >
              {plan.popular && (
                <div className="bg-lime-400 text-green-900 px-4 py-1 rounded-full text-sm font-bold inline-block mb-4">
                  Mais Popular
                </div>
              )}
              <div className="text-4xl mb-4">{plan.icon}</div>
              <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-green-800'}`}>
                {plan.name}
              </h3>
              <p className={`mb-4 ${plan.popular ? 'text-green-100' : 'text-green-700'}`}>
                {plan.description}
              </p>
              <div className={`text-3xl font-bold mb-6 ${plan.popular ? 'text-lime-400' : 'text-green-800'}`}>
                {plan.price}
              </div>
              <ul className="space-y-2 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className={`flex items-center ${plan.popular ? 'text-green-100' : 'text-green-700'}`}>
                    <span className="mr-2">✅</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-lg font-bold transition-colors ${
                plan.popular 
                  ? 'bg-lime-400 text-green-900 hover:bg-lime-300' 
                  : 'bg-green-800 text-white hover:bg-green-700'
              }`}>
                Escolher Plano
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
