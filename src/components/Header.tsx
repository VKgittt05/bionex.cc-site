
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/e78ea99c-8f48-4046-bd19-cec40e59a25c.png" 
            alt="Bionex Logo" 
            className="h-12 w-auto"
          />
          <h1 className="text-2xl font-bold text-green-800">Bionex</h1>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-green-800 hover:text-green-600 transition-colors">Home</a>
          <a href="#como-funciona" className="text-green-800 hover:text-green-600 transition-colors">Como Funciona</a>
          <a href="#planos" className="text-green-800 hover:text-green-600 transition-colors">Planos</a>
          <a href="#loja" className="text-green-800 hover:text-green-600 transition-colors">Loja</a>
          <a href="#contato" className="text-green-800 hover:text-green-600 transition-colors">Contato</a>
        </div>

        <div className="hidden md:flex space-x-4">
          <button className="px-4 py-2 text-green-800 border border-green-800 rounded-lg hover:bg-green-50 transition-colors">
            Login
          </button>
          <button className="px-4 py-2 bg-green-800 text-white rounded-lg hover:bg-green-700 transition-colors">
            Cadastre-se
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-2">
            <a href="#home" className="block py-2 text-green-800">Home</a>
            <a href="#como-funciona" className="block py-2 text-green-800">Como Funciona</a>
            <a href="#planos" className="block py-2 text-green-800">Planos</a>
            <a href="#loja" className="block py-2 text-green-800">Loja</a>
            <a href="#contato" className="block py-2 text-green-800">Contato</a>
            <div className="space-y-2 pt-2">
              <button className="w-full px-4 py-2 text-green-800 border border-green-800 rounded-lg">
                Login
              </button>
              <button className="w-full px-4 py-2 bg-green-800 text-white rounded-lg">
                Cadastre-se
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
