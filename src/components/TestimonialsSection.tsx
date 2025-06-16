
import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ana Silva",
      location: "São Paulo, SP",
      text: "💬 Adoro a ideia! Agora meu lixo vira vida. Minha horta nunca esteve tão bonita!",
      avatar: "👩‍🦱"
    },
    {
      name: "Lucas Santos",
      location: "Rio de Janeiro, RJ", 
      text: "💬 Melhorou minha horta e reduziu meu lixo. Serviço excelente e pontual!",
      avatar: "👨‍🦲"
    },
    {
      name: "Maria Oliveira",
      location: "Belo Horizonte, MG",
      text: "💬 Transformou nossa visão sobre sustentabilidade. Recomendo para todos!",
      avatar: "👩‍🦰"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-green-700 max-w-2xl mx-auto">
            Depoimentos reais de quem já faz parte da revolução verde
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-cream-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{testimonial.avatar}</div>
                <h3 className="text-xl font-bold text-green-800">{testimonial.name}</h3>
                <p className="text-green-600">{testimonial.location}</p>
              </div>
              <p className="text-green-700 text-lg italic mb-6">"{testimonial.text}"</p>
              <div className="flex justify-center">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-green-800 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-green-700 transition-colors">
            🗣️ Quero deixar meu depoimento
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
