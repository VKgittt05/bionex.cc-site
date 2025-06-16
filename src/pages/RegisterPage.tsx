
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Lock, Phone, MapPin, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register submitted:', formData);
    // Aqui seria implementada a lógica de cadastro
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
              Junte-se à revolução verde
            </CardTitle>
            <CardDescription className="text-green-700">
              Crie sua conta e comece a fazer a diferença hoje mesmo
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-green-800">Nome Completo</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600 w-4 h-4" />
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Seu nome completo"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="pl-10 border-green-200 focus:border-green-500"
                    required
                  />
                </div>
              </div>

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

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-green-800">Confirmar Senha</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600 w-4 h-4" />
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirme sua senha"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="pl-10 border-green-200 focus:border-green-500"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-green-800">Telefone</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600 w-4 h-4" />
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(44) 99999-9999"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="pl-10 border-green-200 focus:border-green-500"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address" className="text-green-800">Endereço</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600 w-4 h-4" />
                  <Input
                    id="address"
                    name="address"
                    type="text"
                    placeholder="Rua, número, bairro - Maringá, PR"
                    value={formData.address}
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
                Criar Conta
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-green-700">
                Já tem uma conta?
              </p>
              <Link
                to="/login"
                className="text-green-800 font-bold hover:text-green-600 transition-colors"
              >
                Faça login aqui
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegisterPage;
