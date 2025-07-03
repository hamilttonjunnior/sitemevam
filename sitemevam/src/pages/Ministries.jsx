
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Baby, Users, Music, Heart, UserCheck, Users2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Ministries = () => {
  const { toast } = useToast();

  const handleAction = () => {
    toast({
      title: "🚧 Esta funcionalidade ainda não foi implementada—mas não se preocupe! Você pode solicitá-la no seu próximo prompt! 🚀"
    });
  };

  const ministries = [
    {
      id: 'infantil',
      icon: Baby,
      title: 'Ministério Infantil',
      description: 'Cuidando e ensinando as crianças com amor, criatividade e dedicação.',
      details: 'Atividades lúdicas, ensino bíblico adaptado para crianças, recreação e formação de valores cristãos.',
      age: '0 a 12 anos',
      schedule: 'Domingos 10h',
      image: 'Crianças felizes participando de atividades na igreja'
    },
    {
      id: 'jovens',
      icon: Users,
      title: 'Ministério de Jovens',
      description: 'Formando jovens comprometidos com Cristo e preparados para o futuro.',
      details: 'Estudos bíblicos, eventos, acampamentos, projetos sociais e desenvolvimento de liderança.',
      age: '13 a 25 anos',
      schedule: 'Sextas 19h30',
      image: 'Jovens adorando e estudando a Bíblia juntos'
    },
    {
      id: 'louvor',
      icon: Music,
      title: 'Ministério de Louvor',
      description: 'Conduzindo a congregação à presença de Deus através da música.',
      details: 'Ensaios, apresentações, desenvolvimento musical e adoração congregacional.',
      age: 'Todas as idades',
      schedule: 'Quartas 19h',
      image: 'Banda de louvor tocando durante culto na igreja'
    },
    {
      id: 'mulheres',
      icon: Heart,
      title: 'Ministério de Mulheres',
      description: 'Fortalecendo mulheres na fé, família e propósito de vida.',
      details: 'Estudos bíblicos, encontros, projetos sociais e apoio mútuo entre irmãs.',
      age: 'Mulheres adultas',
      schedule: 'Sábados 15h',
      image: 'Mulheres orando e estudando juntas na igreja'
    },
    {
      id: 'homens',
      icon: UserCheck,
      title: 'Ministério de Homens',
      description: 'Desenvolvendo homens de caráter, liderança e compromisso cristão.',
      details: 'Estudos masculinos, projetos de construção, evangelismo e mentoria.',
      age: 'Homens adultos',
      schedule: 'Sábados 7h',
      image: 'Homens em círculo de oração e estudo bíblico'
    },
    {
      id: 'casais',
      icon: Users2,
      title: 'Ministério de Casais',
      description: 'Fortalecendo matrimônios e famílias segundo os princípios bíblicos.',
      details: 'Encontros de casais, aconselhamento, retiros e atividades familiares.',
      age: 'Casais',
      schedule: 'Mensalmente',
      image: 'Casais participando de encontro na igreja'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <Helmet>
        <title>Ministérios - Igreja Comunidade de Fé</title>
        <meta name="description" content="Conheça nossos ministérios e encontre seu lugar para servir e crescer na fé. Temos atividades para todas as idades e perfis." />
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
            Nossos Ministérios
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Encontre seu lugar para servir, crescer e fazer a diferença. Temos ministérios para todas as idades e chamados.
          </p>
        </motion.div>

        {/* Ministries Grid */}
        <div className="space-y-12">
          {ministries.map((ministry, index) => (
            <motion.div
              key={ministry.id}
              id={ministry.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`section-bg rounded-3xl p-8 lg:p-12 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex flex-col lg:flex gap-8 items-center`}
            >
              <div className="flex-1 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <ministry.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">{ministry.title}</h2>
                    <p className="text-blue-300 font-medium">{ministry.age}</p>
                  </div>
                </div>
                
                <p className="text-xl text-white/90 leading-relaxed">
                  {ministry.description}
                </p>
                
                <p className="text-white/80 leading-relaxed">
                  {ministry.details}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <div className="text-white/70">
                    <span className="font-semibold text-purple-300">Horário:</span> {ministry.schedule}
                  </div>
                </div>
                
                <Button 
                  onClick={handleAction}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Participar do Ministério
                </Button>
              </div>
              
              <div className="flex-1 max-w-md">
                <img  
                  alt={`${ministry.title} - ${ministry.description}`}
                  className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-xl"
                 src="https://images.unsplash.com/photo-1617451588899-7ac8679908c7" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="section-bg rounded-3xl p-12 text-center mt-20"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Encontre Seu Chamado
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Deus tem um propósito especial para sua vida. Venha descobrir como você pode usar seus dons e talentos para servir ao Reino.
          </p>
          <Button 
            onClick={handleAction}
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-12 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Fale Conosco
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Ministries;
