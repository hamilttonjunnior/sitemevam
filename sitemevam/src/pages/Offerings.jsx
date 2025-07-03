
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Heart, DollarSign, CreditCard, Smartphone, Building, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Offerings = () => {
  const { toast } = useToast();
  const [selectedAmount, setSelectedAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');

  const handleAction = () => {
    toast({
      title: "🚧 Esta funcionalidade ainda não foi implementada—mas não se preocupe! Você pode solicitá-la no seu próximo prompt! 🚀"
    });
  };

  const predefinedAmounts = [25, 50, 100, 200, 500];

  const paymentMethods = [
    {
      icon: CreditCard,
      title: 'Cartão de Crédito/Débito',
      description: 'Pagamento seguro online',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Smartphone,
      title: 'PIX',
      description: 'Transferência instantânea',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Building,
      title: 'Transferência Bancária',
      description: 'Depósito ou TED',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const projects = [
    {
      title: 'Construção do Novo Templo',
      description: 'Ampliação para acomodar mais famílias em nossa comunidade',
      progress: 65,
      goal: 'R$ 500.000',
      raised: 'R$ 325.000',
      image: 'Construção de novo templo da igreja em andamento'
    },
    {
      title: 'Projeto Social - Cesta Básica',
      description: 'Ajuda alimentar para famílias em situação de vulnerabilidade',
      progress: 80,
      goal: 'R$ 50.000',
      raised: 'R$ 40.000',
      image: 'Voluntários distribuindo cestas básicas para famílias'
    },
    {
      title: 'Equipamentos de Som e Vídeo',
      description: 'Modernização dos equipamentos para melhor experiência nos cultos',
      progress: 45,
      goal: 'R$ 80.000',
      raised: 'R$ 36.000',
      image: 'Equipamentos modernos de som e vídeo na igreja'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <Helmet>
        <title>Ofertas e Dízimos - Igreja Comunidade de Fé</title>
        <meta name="description" content="Contribua com nossa igreja e participe dos projetos que transformam vidas. Ofertas seguras e transparentes." />
      </Helmet>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Ofertas e Dízimos
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Sua contribuição faz a diferença na vida de muitas pessoas. Participe conosco na construção do Reino de Deus.
          </p>
        </motion.div>

        {/* Offering Form */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="section-bg rounded-3xl p-8"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">Fazer uma Oferta</h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-white font-medium mb-3">Escolha o valor:</label>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {predefinedAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => {
                        setSelectedAmount(amount);
                        setCustomAmount('');
                      }}
                      className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                        selectedAmount === amount
                          ? 'border-blue-500 bg-blue-500/20 text-blue-300'
                          : 'border-white/20 text-white hover:border-white/40'
                      }`}
                    >
                      R$ {amount}
                    </button>
                  ))}
                </div>
                
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
                  <input
                    type="number"
                    placeholder="Outro valor"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount('');
                    }}
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-3">Forma de pagamento:</label>
                <div className="space-y-3">
                  {paymentMethods.map((method, index) => (
                    <button
                      key={index}
                      onClick={handleAction}
                      className="w-full p-4 rounded-lg border border-white/20 hover:border-white/40 transition-all duration-200 flex items-center space-x-4"
                    >
                      <div className={`w-10 h-10 bg-gradient-to-r ${method.color} rounded-full flex items-center justify-center`}>
                        <method.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-left">
                        <h4 className="text-white font-medium">{method.title}</h4>
                        <p className="text-white/70 text-sm">{method.description}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <Button
                onClick={handleAction}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Contribuir Agora
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="section-bg rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Por que Contribuir?</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Expansão da Igreja</h4>
                  <p className="text-white/80 text-sm">Suas ofertas ajudam a expandir nosso ministério e alcançar mais vidas com o amor de Cristo.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Projetos Sociais</h4>
                  <p className="text-white/80 text-sm">Apoiamos famílias em vulnerabilidade social através de projetos de assistência e capacitação.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Building className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Manutenção e Melhorias</h4>
                  <p className="text-white/80 text-sm">Mantemos nossa estrutura sempre em boas condições para receber nossa congregação.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-white/5 rounded-lg">
              <p className="text-white/90 text-sm italic text-center">
                "Cada um contribua segundo propôs no seu coração; não com tristeza, ou por necessidade; porque Deus ama ao que dá com alegria."
              </p>
              <p className="text-blue-300 text-sm text-center mt-2 font-medium">2 Coríntios 9:7</p>
            </div>
          </motion.div>
        </div>

        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Projetos em Andamento
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="section-bg rounded-2xl p-6 hover-lift cursor-pointer"
                onClick={handleAction}
              >
                <img  
                  alt={`${project.title} - ${project.description}`}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                 src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white/80 text-sm mb-4">{project.description}</p>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/70">Progresso</span>
                    <span className="text-white font-medium">{project.progress}%</span>
                  </div>
                  
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-green-300 font-medium">{project.raised}</span>
                    <span className="text-white/70">Meta: {project.goal}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Transparency Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="section-bg rounded-3xl p-12 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Transparência Total
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Acreditamos na transparência total. Todos os recursos são aplicados com responsabilidade e prestamos contas regularmente à congregação.
          </p>
          <Button 
            onClick={handleAction}
            variant="outline"
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm"
          >
            Ver Relatórios Financeiros
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Offerings;
