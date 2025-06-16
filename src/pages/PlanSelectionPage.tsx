
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, Calendar, Truck, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const PlanSelectionPage = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      id: 'essencial',
      icon: "♻️",
      name: "Essencial",
      description: "Perfeito para quem está começando",
      price: "R$ 19,90/mês",
      originalPrice: "R$ 24,90",
      discount: "20% OFF",
      features: [
        "Coleta quinzenal",
        "Balde de 5L",
        "1kg de adubo/mês",
        "Suporte via WhatsApp",
        "Aplicativo móvel"
      ],
      popular: false,
      color: "border-green-300"
    },
    {
      id: 'horta',
      icon: "🌱",
      name: "Plano Horta",
      description: "Para quem quer plantar em casa",
      price: "R$ 29,90/mês",
      originalPrice: "R$ 39,90",
      discount: "25% OFF",
      features: [
        "Coleta quinzenal",
        "Balde de 10L",
        "1kg de adubo/mês",
        "Guia de compostagem",
        "Suporte prioritário"
      ],
      popular: false,
      color: "border-green-400"
    },
    {
      id: 'familia',
      icon: "🪴",
      name: "Plano Família",
      description: "Ideal para famílias de até 4 pessoas",
      price: "R$ 49,90/mês",
      originalPrice: "R$ 69,90",
      discount: "29% OFF",
      features: [
        "Coleta semanal",
        "Balde de 20L",
        "2kg de adubo/mês",
        "Kit de jardinagem",
        "Consultoria personalizada"
      ],
      popular: true,
      color: "border-lime-400"
    },
    {
      id: 'bairro',
      icon: "🌿",
      name: "Plano Bairro",
      description: "Para condomínios e vizinhanças",
      price: "R$ 199,90/mês",
      originalPrice: "R$ 249,90",
      discount: "20% OFF",
      features: [
        "Coleta 2x por semana",
        "Múltiplos baldes",
        "10kg de adubo/mês",
        "Gerenciamento de múltiplas unidades",
        "Relatórios de impacto"
      ],
      popular: false,
      color: "border-green-500"
    },
    {
      id: 'produtor',
      icon: "🌾",
      name: "Produtor",
      description: "Para sítios e hortas comerciais",
      price: "R$ 299,90/mês",
      originalPrice: "R$ 399,90",
      discount: "25% OFF",
      features: [
        "Coleta diária",
        "Containers grandes",
        "20kg de adubo/mês",
        "Análise de solo",
        "Suporte técnico especializado"
      ],
      popular: false,
      color: "border-green-600"
    }
  ];

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
  };

  const handleSubscribe = () => {
    if (selectedPlan) {
      console.log('Assinando plano:', selectedPlan);
      // Aqui seria implementada a lógica de assinatura
    }
  };

  return (
    <div className="min-h-screen bg-cream-50 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <Link 
          to="/" 
          className="inline-flex items-center text-green-700 hover:text-green-800 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar ao início
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Escolha seu Plano Ideal
          </h1>
          <p className="text-xl text-green-700 max-w-3xl mx-auto">
            Transforme seus resíduos orgânicos em adubo natural e faça parte da revolução verde em Maringá. 
            Todos os planos incluem coleta profissional e retorno do adubo pronto!
          </p>
          
          <div className="mt-6 inline-flex items-center bg-lime-100 px-4 py-2 rounded-full">
            <Leaf className="w-5 h-5 text-green-700 mr-2" />
            <span className="text-green-800 font-semibold">
              Promoção de lançamento - Descontos especiais por tempo limitado!
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {plans.map((plan) => (
            <Card 
              key={plan.id}
              className={`relative cursor-pointer transition-all hover:shadow-xl ${
                selectedPlan === plan.id 
                  ? `${plan.color} border-2 shadow-lg scale-105` 
                  : 'border border-green-200 hover:border-green-300'
              } ${plan.popular ? 'ring-2 ring-lime-400' : ''}`}
              onClick={() => handlePlanSelect(plan.id)}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-lime-400 text-green-900 px-4 py-1 rounded-full text-sm font-bold">
                    Mais Popular
                  </div>
                </div>
              )}
              
              {plan.discount && (
                <div className="absolute -top-2 -right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                  {plan.discount}
                </div>
              )}

              <CardHeader className="text-center">
                <div className="text-4xl mb-2">{plan.icon}</div>
                <CardTitle className="text-xl font-bold text-green-800">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-green-700">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center">
                <div className="mb-4">
                  {plan.originalPrice && (
                    <div className="text-sm text-gray-500 line-through">
                      {plan.originalPrice}
                    </div>
                  )}
                  <div className="text-3xl font-bold text-green-800">
                    {plan.price}
                  </div>
                </div>

                <ul className="space-y-2 mb-6 text-left">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-green-700">
                      <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-2">
                  <Button 
                    variant={selectedPlan === plan.id ? "default" : "outline"}
                    className={`w-full ${
                      selectedPlan === plan.id 
                        ? 'bg-green-800 hover:bg-green-700 text-white' 
                        : 'border-green-800 text-green-800 hover:bg-green-50'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePlanSelect(plan.id);
                    }}
                  >
                    {selectedPlan === plan.id ? 'Plano Selecionado' : 'Selecionar Plano'}
                  </Button>
                  
                  <button className="w-full text-sm text-green-600 hover:text-green-800 transition-colors">
                    Ver mais detalhes
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {selectedPlan && (
          <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-green-200">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-green-800 mb-4">
                Confirme sua escolha
              </h3>
              <p className="text-green-700 mb-6">
                Você selecionou o <strong>{plans.find(p => p.id === selectedPlan)?.name}</strong>. 
                Clique em "Assinar Agora" para finalizar seu cadastro e receber seu baldinho!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center text-green-700">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>Primeira coleta em até 3 dias úteis</span>
                </div>
                <div className="flex items-center text-green-700">
                  <Truck className="w-5 h-5 mr-2" />
                  <span>Entrega do baldinho gratuita</span>
                </div>
              </div>

              <Button 
                onClick={handleSubscribe}
                className="mt-6 bg-lime-400 hover:bg-lime-300 text-green-900 px-8 py-3 text-lg font-bold"
              >
                Assinar Agora
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlanSelectionPage;
