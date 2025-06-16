
import React from 'react';

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Como Funciona
          </h2>
          <p className="text-xl text-green-700 max-w-3xl mx-auto">
            Um processo simples, eficiente e totalmente sustentável que transforma seus resíduos orgânicos em adubo de alta qualidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
          {[
            {
              step: "1",
              icon: "🗑️",
              title: "Separe",
              description: "Coloque seus resíduos orgânicos no baldinho especial da Bionex"
            },
            {
              step: "2", 
              icon: "🚛",
              title: "Coletamos",
              description: "Nossa equipe busca em sua casa nos dias agendados"
            },
            {
              step: "3",
              icon: "♻️", 
              title: "Compostamos",
              description: "Transformamos seus resíduos em adubo através de compostagem profissional"
            },
            {
              step: "4",
              icon: "🌱",
              title: "Devolvemos", 
              description: "Você recebe o adubo pronto para usar em suas plantas"
            }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-800">{item.step}</span>
              </div>
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-green-800 mb-2">{item.title}</h3>
              <p className="text-green-700">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Seção melhorada com conteúdo mais rico */}
        <div className="bg-green-50 rounded-xl p-8 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-green-800 mb-6">
                🌿 O Resultado: Adubo Premium para suas Plantas
              </h3>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-green-800 mb-2">🎯 Rico em Nutrientes</h4>
                  <p className="text-green-700">
                    Nosso processo de compostagem profissional produz um adubo rico em nitrogênio, 
                    fósforo e potássio - os três nutrientes essenciais para o crescimento saudável das plantas.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-green-800 mb-2">🌡️ Compostagem Controlada</h4>
                  <p className="text-green-700">
                    Utilizamos técnicas avançadas de compostagem termofílica, com controle rigoroso de 
                    temperatura, umidade e aeração, garantindo a eliminação de patógenos e sementes de ervas daninhas.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-green-800 mb-2">⏱️ Tempo de Processo</h4>
                  <p className="text-green-700">
                    O ciclo completo de compostagem leva de 90 a 120 dias, resultando em um húmus de 
                    altíssima qualidade, com textura ideal e pH balanceado para diferentes tipos de plantas.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-green-800 mb-2">🏆 Qualidade Garantida</h4>
                  <p className="text-green-700">
                    Cada lote de adubo passa por análises laboratoriais para garantir que você receba 
                    sempre um produto de qualidade superior, livre de contaminantes e com a concentração 
                    ideal de nutrientes.
                  </p>
                </div>
              </div>
              
              <div className="bg-lime-100 p-4 rounded-lg border-l-4 border-lime-500">
                <p className="text-green-800 font-semibold">
                  💡 <strong>Dica:</strong> Nosso adubo pode ser usado em hortas, jardins, vasos de plantas 
                  e até mesmo em plantações maiores. É 100% natural e seguro para toda a família!
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <img 
                src="/lovable-uploads/e78ea99c-8f48-4046-bd19-cec40e59a25c.png" 
                alt="Carrinhos com adubo orgânico Bionex" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="mt-4 bg-green-800 text-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">🌍 Impacto Ambiental Positivo</h4>
                <p className="text-green-100 text-sm">
                  A cada mês, evitamos que toneladas de resíduos orgânicos sejam destinados 
                  aos aterros sanitários, reduzindo a emissão de gases de efeito estufa e 
                  contribuindo para um Maringá mais sustentável.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
