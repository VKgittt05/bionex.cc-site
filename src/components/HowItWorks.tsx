
import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      icon: "🪣",
      title: "Receba seu baldinho",
      description: "Entregamos um balde especial para coleta de resíduos orgânicos"
    },
    {
      icon: "🚛",
      title: "Coleta semanal",
      description: "Nossa equipe passa semanalmente para coletar seus resíduos"
    },
    {
      icon: "🌱",
      title: "Compostagem ecológica",
      description: "Transformamos seus resíduos em adubo através de processo sustentável"
    },
    {
      icon: "🪴",
      title: "Receba seu adubo",
      description: "Você recebe adubo natural produzido com seus próprios resíduos"
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-cream-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Como Funciona
          </h2>
          <p className="text-xl text-green-700 max-w-2xl mx-auto">
            Um processo simples e sustentável que transforma resíduos em vida
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
            >
              <div className="text-6xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold text-green-800 mb-4">{step.title}</h3>
              <p className="text-green-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
