
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Users, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Home = () => {
  const { toast } = useToast();

  const handleAction = () => {
    toast({
      title: "🚧 Esta funcionalidade ainda não foi implementada—mas não se preocupe! Você pode solicitá-la no seu próximo prompt! 🚀"
    });
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Home - Igreja Comunidade de Fé</title>
        <meta name="description" content="Bem-vindos à nossa igreja! Descubra uma comunidade acolhedora onde a fé, esperança e amor se encontram." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img  
            alt="Igreja com pessoas em oração durante o culto"
            className="w-full h-full object-cover opacity-20"
           src="https://images.unsplash.com/photo-1521484964932-e6467f4f02d6" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Bem-vindos à Nossa
            <span className="block gradient-text">Igreja</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"
          >
            Uma comunidade acolhedora onde a fé, esperança e amor se encontram. 
            Junte-se a nós em nossa jornada espiritual.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              onClick={handleAction}
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Visite-nos <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              onClick={handleAction}
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm"
            >
              Saiba Mais
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nossa Comunidade
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Descubra os pilares que sustentam nossa fé e fortalecem nossa união como família espiritual.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Amor e Acolhimento",
                description: "Receba o amor de Cristo através de nossa comunidade acolhedora e calorosa."
              },
              {
                icon: Users,
                title: "Comunidade Unida",
                description: "Faça parte de uma família espiritual que se apoia mutuamente na fé."
              },
              {
                icon: Calendar,
                title: "Cultos e Eventos",
                description: "Participe de nossos cultos inspiradores e eventos que fortalecem a fé."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="section-bg rounded-2xl p-8 hover-lift cursor-pointer"
                onClick={handleAction}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-white/80 text-center leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="section-bg rounded-3xl p-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Junte-se a Nós
            </h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Venha fazer parte da nossa família espiritual. Todos são bem-vindos em nossa casa de oração.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex items-center space-x-2 text-white">
                <MapPin className="w-5 h-5 text-blue-300" />
                <span>Domingos às 10h e 18h</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <Calendar className="w-5 h-5 text-purple-300" />
                <span>Quartas às 19h30</span>
              </div>
            </div>
            
            <Button 
              onClick={handleAction}
              size="lg"
              className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-12 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Venha nos Visitar
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
