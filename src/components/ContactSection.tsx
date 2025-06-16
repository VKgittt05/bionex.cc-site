
import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="py-20 bg-cream-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Faça parte da revolução verde!
          </h2>
          <p className="text-xl text-green-700 max-w-2xl mx-auto">
            Entre em contato conosco e comece a transformar seus resíduos em vida
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulário */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-green-800 mb-6">Cadastre-se agora</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-green-700 font-medium mb-2">Nome Completo</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-green-700 font-medium mb-2">Endereço</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-green-700 font-medium mb-2">Telefone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-green-700 font-medium mb-2">E-mail</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-green-700 font-medium mb-2">Mensagem (opcional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-green-800 text-white py-4 rounded-lg text-lg font-bold hover:bg-green-700 transition-colors"
              >
                ✨ Quero contratar o serviço
              </button>
            </form>
          </div>

          {/* Informações de Contato */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-green-800 mb-6">Fale Conosco</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">📱</span>
                  <div>
                    <p className="font-medium text-green-800">WhatsApp</p>
                    <p className="text-green-700">(11) 99999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">📧</span>
                  <div>
                    <p className="font-medium text-green-800">E-mail</p>
                    <p className="text-green-700">contato@ecobalde.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">🌿</span>
                  <div>
                    <p className="font-medium text-green-800">Endereço</p>
                    <p className="text-green-700">Terreno EcoBalde<br />Estrada Verde, nº 420</p>
                  </div>
                </div>
              </div>
              
              <button className="w-full mt-6 bg-lime-400 text-green-900 py-3 rounded-lg font-bold hover:bg-lime-300 transition-colors">
                📱 Abrir conversa no WhatsApp
              </button>
            </div>

            <div className="bg-green-800 text-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Horário de Funcionamento</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Segunda a Sexta:</span>
                  <span>8h às 18h</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado:</span>
                  <span>8h às 12h</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo:</span>
                  <span>Fechado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
