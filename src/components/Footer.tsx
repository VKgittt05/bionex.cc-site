
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-brown-800 text-cream-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🌿</span>
              <h3 className="text-2xl font-bold">EcoBalde</h3>
            </div>
            <p className="text-cream-100 mb-4">
              Transformando resíduos em vida através da compostagem sustentável.
            </p>
            <div className="flex space-x-4">
              <span className="text-2xl hover:text-lime-400 cursor-pointer">📘</span>
              <span className="text-2xl hover:text-lime-400 cursor-pointer">📷</span>
              <span className="text-2xl hover:text-lime-400 cursor-pointer">🐦</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-cream-100 hover:text-lime-400 transition-colors">Coleta de Orgânicos</a></li>
              <li><a href="#" className="text-cream-100 hover:text-lime-400 transition-colors">Compostagem</a></li>
              <li><a href="#" className="text-cream-100 hover:text-lime-400 transition-colors">Produção de Adubo</a></li>
              <li><a href="#" className="text-cream-100 hover:text-lime-400 transition-colors">Consultoria Ambiental</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Links Úteis</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-cream-100 hover:text-lime-400 transition-colors">Como Funciona</a></li>
              <li><a href="#" className="text-cream-100 hover:text-lime-400 transition-colors">Nossos Planos</a></li>
              <li><a href="#" className="text-cream-100 hover:text-lime-400 transition-colors">Área do Cliente</a></li>
              <li><a href="#" className="text-cream-100 hover:text-lime-400 transition-colors">Suporte</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <div className="space-y-2">
              <p className="text-cream-100">📱 (11) 99999-9999</p>
              <p className="text-cream-100">📧 contato@ecobalde.com.br</p>
              <p className="text-cream-100">🌿 Estrada Verde, nº 420</p>
            </div>
          </div>
        </div>

        <div className="border-t border-brown-600 mt-8 pt-8 text-center">
          <p className="text-cream-100">
            © 2024 EcoBalde. Todos os direitos reservados. | 
            <a href="#" className="hover:text-lime-400 transition-colors ml-1">Política de Privacidade</a> | 
            <a href="#" className="hover:text-lime-400 transition-colors ml-1">Termos de Uso</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
