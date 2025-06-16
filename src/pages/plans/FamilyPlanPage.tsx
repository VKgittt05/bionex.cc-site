
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, Calendar, Truck, Leaf, Users, Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const FamilyPlanPage = () => {
  return (
    <div className="min-h-screen bg-cream-50 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link 
          to="/planos" 
          className="inline-flex items-center text-green-700 hover:text-green-800 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar aos planos
        </Link>

        <div className="bg-lime-100 border border-lime-400 rounded-lg p-4 mb-8 text-center">
          <div className="flex items-center justify-center mb-2">
            <Star className="w-5 h-5 text-lime-600 mr-2" />
            <span className="text-lime-800 font-bold">PLANO MAIS POPULAR</span>
            <Star className="w-5 h-5 text-lime-600 ml-2" />
          </div>
          <p className="text-lime-700">Escolhido por mais de 70% dos nossos clientes!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <div className="text-6xl mb-4">🪴</div>
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
              Plano Família
            </h1>
            <p className="text-xl text-green-700 mb-6">
              O favorito das famílias maringaenses! Perfeito para famílias de até 4 pessoas 
              que querem dar o exemplo de sustentabilidade para os filhos e fazer a diferença 
              real no meio ambiente.
            </p>
            <div className="bg-lime-100 p-4 rounded-lg mb-6 border-2 border-lime-400">
              <div className="text-3xl font-bold text-green-800 mb-2">
                R$ 49,90/mês
              </div>
              <div className="text-sm text-green-600 line-through">
                De R$ 69,90
              </div>
              <div className="text-green-700 font-semibold">
                29% OFF por tempo limitado!
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <img 
              src="/lovable-uploads/3648630d-33f5-4480-a223-836346023a7c.png" 
              alt="Família sustentável Bionex" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-white shadow-lg border-lime-200 p-6">
            <div className="text-center">
              <Heart className="w-12 h-12 text-lime-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-green-800 mb-2">Ideal Para</h3>
              <p className="text-green-700">
                Famílias de até 4 pessoas que querem ensinar sustentabilidade para os filhos
              </p>
            </div>
          </Card>

          <Card className="bg-white shadow-lg border-lime-200 p-6">
            <div className="text-center">
              <Users className="w-12 h-12 text-lime-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-green-800 mb-2">Até 4 Pessoas</h3>
              <p className="text-green-700">
                Capacidade perfeita para atender toda a família com coleta semanal
              </p>
            </div>
          </Card>

          <Card className="bg-white shadow-lg border-lime-200 p-6">
            <div className="text-center">
              <Leaf className="w-12 h-12 text-lime-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-green-800 mb-2">Máximo Impacto</h3>
              <p className="text-green-700">
                Evita que até 40kg de resíduos orgânicos vão para aterros por mês
              </p>
            </div>
          </Card>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border-2 border-lime-200">
          <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">
            O que está incluído no Plano Família
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center">
                <Check className="w-5 h-5 text-lime-600 mr-3 flex-shrink-0" />
                <span className="text-green-700 font-semibold">Coleta semanal em sua casa</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-lime-600 mr-3 flex-shrink-0" />
                <span className="text-green-700">Balde de 20L com tampa hermética</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-lime-600 mr-3 flex-shrink-0" />
                <span className="text-green-700 font-semibold">2kg de adubo orgânico premium por mês</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-lime-600 mr-3 flex-shrink-0" />
                <span className="text-green-700">Kit de jardinagem para a família</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-lime-600 mr-3 flex-shrink-0" />
                <span className="text-green-700">Consultoria personalizada mensal</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <Check className="w-5 h-5 text-lime-600 mr-3 flex-shrink-0" />
                <span className="text-green-700">Suporte VIP via WhatsApp</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-lime-600 mr-3 flex-shrink-0" />
                <span className="text-green-700">Aplicativo móvel premium</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-lime-600 mr-3 flex-shrink-0" />
                <span className="text-green-700">Cartilha educativa para crianças</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-lime-600 mr-3 flex-shrink-0" />
                <span className="text-green-700">Desconto de 15% na loja de produtos</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-lime-600 mr-3 flex-shrink-0" />
                <span className="text-green-700">Certificado de família sustentável</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-800 to-lime-700 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Seja uma família exemplo em Maringá!</h3>
          <p className="text-green-100 mb-6">
            Ensine seus filhos sobre sustentabilidade na prática e faça parte da mudança que nossa cidade precisa!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <div className="flex items-center text-green-200">
              <Calendar className="w-5 h-5 mr-2" />
              <span>Primeira coleta em até 2 dias úteis</span>
            </div>
            <div className="flex items-center text-green-200">
              <Truck className="w-5 h-5 mr-2" />
              <span>Entrega gratuita do kit completo</span>
            </div>
          </div>

          <Button 
            className="bg-lime-400 hover:bg-lime-300 text-green-900 px-8 py-3 text-lg font-bold shadow-lg"
          >
            Assinar Plano Família
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FamilyPlanPage;
