
import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carlos Mendes",
      location: "Maringá, PR",
      text: "Adoro a ideia! Agora meu lixo vira vida. Minha horta nunca esteve tão bonita!",
      photo: "/lovable-uploads/c9e8d291-48c9-4c90-bb32-b01a4d31f128.png"
    },
    {
      name: "Rafael Silva",
      location: "Maringá, PR", 
      text: "Melhorou minha horta e reduziu meu lixo. Serviço excelente e pontual!",
      photo: "/lovable-uploads/89a2725f-7264-4b83-8631-6663855f5a94.png"
    },
    {
      name: "João Santos",
      location: "Maringá, PR",
      text: "Transformou nossa visão sobre sustentabilidade. Recomendo para todos!",
      photo: "/lovable-uploads/3648630d-33f5-4480-a223-836346023a7c.png"
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
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src={testimonial.photo} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
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
            Quero deixar meu depoimento
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
