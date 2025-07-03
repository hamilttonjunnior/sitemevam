
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Heart, Users, Book, Star } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const About = () => {
  const { toast } = useToast();

  const handleAction = () => {
    toast({
      title: "🚧 Esta funcionalidade ainda não foi implementada—mas não se preocupe! Você pode solicitá-la no seu próximo prompt! 🚀"
    });
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <Helmet>
        <title>Sobre Nós - Igreja Comunidade de Fé</title>
        <meta name="description" content="Conheça nossa história, missão e valores. Descubra como nossa igreja tem impactado vidas através do amor de Cristo." />
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
            Sobre Nossa Igreja
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Conheça nossa história, missão e os valores que nos guiam em nossa jornada de fé e serviço à comunidade.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="section-bg rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Nossa História</h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Fundada com o propósito de ser uma luz na comunidade, nossa igreja tem sido um refúgio de esperança e amor há muitos anos. Começamos como um pequeno grupo de fiéis que se reunia para oração e estudo da Palavra.
            </p>
            <p className="text-white/80 leading-relaxed mb-6">
              Ao longo dos anos, crescemos não apenas em número, mas em fé, amor e compromisso com o serviço ao próximo. Hoje, somos uma família espiritual diversa e acolhedora.
            </p>
            <p className="text-white/80 leading-relaxed">
              Nossa jornada é marcada por milagres, transformações de vidas e um amor incondicional que reflete o coração de Cristo em nossa comunidade.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="section-bg rounded-2xl p-8"
          >
            <img  
              alt="Interior da igreja durante culto com congregação adorando"
              className="w-full h-64 object-cover rounded-lg mb-6"
             src="https://images.unsplash.com/photo-1629705711234-52b254b9a933" />
            <h3 className="text-2xl font-bold text-white mb-4">Nossa Visão</h3>
            <p className="text-white/80 leading-relaxed">
              Ser uma igreja que transforma vidas através do amor de Cristo, impactando nossa comunidade e além, formando discípulos comprometidos com os valores do Reino de Deus.
            </p>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Nossos Valores
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Amor",
                description: "O amor de Cristo é o centro de tudo o que fazemos e ensinamos."
              },
              {
                icon: Users,
                title: "Comunidade",
                description: "Valorizamos a união e o cuidado mútuo entre os irmãos."
              },
              {
                icon: Book,
                title: "Palavra",
                description: "A Bíblia é nossa base e guia para toda decisão e ensinamento."
              },
              {
                icon: Star,
                title: "Excelência",
                description: "Buscamos a excelência em tudo, para a glória de Deus."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="section-bg rounded-2xl p-6 text-center hover-lift cursor-pointer"
                onClick={handleAction}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leadership Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-bg rounded-3xl p-12 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-8">Nossa Liderança</h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Somos guiados por líderes dedicados que servem com amor, sabedoria e compromisso com a Palavra de Deus.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Pastor Principal",
                role: "Liderança Espiritual",
                image: "Pastor sorridente em frente ao púlpito da igreja"
              },
              {
                name: "Pastora Associada",
                role: "Ministério Feminino",
                image: "Pastora orando com membros da congregação"
              },
              {
                name: "Pastor de Jovens",
                role: "Ministério Jovem",
                image: "Pastor jovem interagindo com adolescentes da igreja"
              }
            ].map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white/10 rounded-2xl p-6 hover-lift cursor-pointer"
                onClick={handleAction}
              >
                <img  
                  alt={`${leader.name} - ${leader.role}`}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                 src="https://images.unsplash.com/photo-1595956553066-fe24a8c33395" />
                <h3 className="text-xl font-bold text-white mb-2">{leader.name}</h3>
                <p className="text-blue-300 font-medium">{leader.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
