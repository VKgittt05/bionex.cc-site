
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
    // Aqui seria implementada a lógica de login
  };

  return (
    <div className="min-h-screen bg-cream-50 py-12 px-4">
      <div className="container mx-auto max-w-md">
        <Link 
          to="/" 
          className="inline-flex items-center text-green-700 hover:text-green-800 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar ao início
        </Link>

        <Card className="shadow-lg border-green-200">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4">
              <img 
                src="/lovable-uploads/b2c018cc-3a81-43a7-bfb4-44ba92ac7ed1.png" 
                alt="Bionex Logo" 
                className="h-16 w-auto mx-auto"
              />
            </div>
            <CardTitle className="text-2xl font-bold text-green-800">
              Bem-vindo de volta!
            </CardTitle>
            <CardDescription className="text-green-700">
              Acesse sua conta e continue transformando resíduos em vida
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-green-800">E-mail</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600 w-4 h-4" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="pl-10 border-green-200 focus:border-green-500"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-green-800">Senha</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600 w-4 h-4" />
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Sua senha"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="pl-10 border-green-200 focus:border-green-500"
                    required
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-green-800 hover:bg-green-700 text-white py-3 text-lg font-bold"
              >
                Entrar
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-green-700">
                Ainda não tem uma conta?
              </p>
              <Link
                to="/cadastro"
                className="text-green-800 font-bold hover:text-green-600 transition-colors"
              >
                Cadastre-se aqui
              </Link>
            </div>

            <div className="mt-4 text-center">
              <a href="#" className="text-green-600 text-sm hover:text-green-800 transition-colors">
                Esqueceu sua senha?
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
