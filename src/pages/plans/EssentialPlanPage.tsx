
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, Calendar, Truck, Leaf, Users, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const EssentialPlanPage = () => {
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <div className="text-6xl mb-4">♻️</div>
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
              Plano Essencial
            </h1>
            <p className="text-xl text-green-700 mb-6">
              Perfeito para quem está começando na jornada da sustentabilidade. 
              Ideal para casais ou pequenas famílias que querem dar os primeiros passos 
              na compostagem doméstica.
            </p>
            <div className="bg-green-100 p-4 rounded-lg mb-6">
              <div className="text-3xl font-bold text-green-800 mb-2">
                R$ 19,90/mês
              </div>
              <div className="text-sm text-green-600 line-through">
                De R$ 24,90
              </div>
              <div className="text-green-700 font-semibold">
                20% OFF por tempo limitado!
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <img 
              src="/lovable-uploads/89a2725f-7264-4b83-8631-6663855f5a94.png" 
              alt="Compostagem Bionex" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-white shadow-lg border-green-200 p-6">
            <div className="text-center">
              <Home className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-green-800 mb-2">Ideal Para</h3>
              <p className="text-green-700">
                Casais, pessoas que moram sozinhas ou famílias pequenas que estão começando
              </p>
            </div>
          </Card>

          <Card className="bg-white shadow-lg border-green-200 p-6">
            <div className="text-center">
              <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-green-800 mb-2">Até 2 Pessoas</h3>
              <p className="text-green-700">
                Capacidade perfeita para atender a produção de resíduos de até 2 pessoas
              </p>
            </div>
          </Card>

          <Card className="bg-white shadow-lg border-green-200 p-6">
            <div className="text-center">
              <Leaf className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-green-800 mb-2">Sustentável</h3>
              <p className="text-green-700">
                Evita que até 10kg de resíduos orgânicos vão para aterros sanitários por mês
              </p>
            </div>
          </Card>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">
            O que está incluído no Plano Essencial
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                <span className="text-green-700">Coleta quinzenal em sua casa</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                <span className="text-green-700">Balde de 5L com tampa hermética</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                <span className="text-green-700">1kg de adubo orgânico por mês</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                <span className="text-green-700">Suporte via WhatsApp</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                <span className="text-green-700">Aplicativo móvel para acompanhamento</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                <span className="text-green-700">Manual de boas práticas</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-800 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Pronto para começar?</h3>
          <p className="text-green-100 mb-6">
            Junte-se a centenas de famílias em Maringá que já transformam seus resíduos em vida!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <div className="flex items-center text-green-200">
              <Calendar className="w-5 h-5 mr-2" />
              <span>Primeira coleta em até 3 dias úteis</span>
            </div>
            <div className="flex items-center text-green-200">
              <Truck className="w-5 h-5 mr-2" />
              <span>Entrega do baldinho gratuita</span>
            </div>
          </div>

          <Button 
            className="bg-lime-400 hover:bg-lime-300 text-green-900 px-8 py-3 text-lg font-bold"
          >
            Assinar Plano Essencial
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EssentialPlanPage;
