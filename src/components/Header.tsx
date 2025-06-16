
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img 
              src="/lovable-uploads/b2c018cc-3a81-43a7-bfb4-44ba92ac7ed1.png" 
              alt="Bionex Logo" 
              className="h-12 w-auto"
            />
          </Link>
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
          <Link 
            to="/auth"
            className="px-4 py-2 text-green-800 border border-green-800 rounded-lg hover:bg-green-50 transition-colors"
          >
            Login
          </Link>
          <Link 
            to="/auth"
            className="px-4 py-2 bg-green-800 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Cadastre-se
          </Link>
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
              <Link 
                to="/auth"
                className="block w-full px-4 py-2 text-green-800 border border-green-800 rounded-lg text-center"
              >
                Login
              </Link>
              <Link 
                to="/auth"
                className="block w-full px-4 py-2 bg-green-800 text-white rounded-lg text-center"
              >
                Cadastre-se
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
