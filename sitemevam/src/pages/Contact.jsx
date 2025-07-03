
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Esta funcionalidade ainda não foi implementada—mas não se preocupe! Você pode solicitá-la no seu próximo prompt! 🚀"
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      details: ['Rua da Fé, 123', 'Centro - Cidade', 'CEP: 12345-678'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Phone,
      title: 'Telefone',
      details: ['(11) 1234-5678', '(11) 9876-5432'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Mail,
      title: 'E-mail',
      details: ['contato@igreja.com', 'pastor@igreja.com'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Clock,
      title: 'Horários',
      details: ['Dom: 10h e 18h', 'Qua: 19h30', 'Sex: 19h30'],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <Helmet>
        <title>Contato - Igreja Comunidade de Fé</title>
        <meta name="description" content="Entre em contato conosco. Estamos aqui para orar, aconselhar e receber você em nossa família espiritual." />
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
            Entre em Contato
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Estamos aqui para orar, aconselhar e receber você em nossa família espiritual. Não hesite em nos procurar.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="section-bg rounded-2xl p-6 text-center hover-lift"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                <info.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{info.title}</h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-white/80 text-sm mb-1">{detail}</p>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="section-bg rounded-3xl p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Envie uma Mensagem</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Seu nome completo"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="seu@email.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-white font-medium mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="(11) 12345-6789"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Como podemos ajudá-lo?"
                  required
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensagem
              </Button>
            </form>
          </motion.div>

          {/* Map and Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Map Placeholder */}
            <div className="section-bg rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Nossa Localização</h3>
              <div className="bg-white/10 rounded-2xl h-64 flex items-center justify-center">
                <img  
                  alt="Mapa mostrando localização da igreja"
                  className="w-full h-full object-cover rounded-2xl"
                 src="https://images.unsplash.com/photo-1694301318004-17bad3e52f20" />
              </div>
              <p className="text-white/80 mt-4 text-center">
                Estamos localizados no coração da cidade, com fácil acesso e estacionamento disponível.
              </p>
            </div>

            {/* Additional Info */}
            <div className="section-bg rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Informações Importantes</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <p className="text-white/80">
                    <span className="font-semibold text-white">Estacionamento gratuito</span> disponível para todos os visitantes
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <p className="text-white/80">
                    <span className="font-semibold text-white">Acessibilidade</span> completa para pessoas com mobilidade reduzida
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <p className="text-white/80">
                    <span className="font-semibold text-white">Ministério infantil</span> disponível durante todos os cultos
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                  <p className="text-white/80">
                    <span className="font-semibold text-white">Primeira visita?</span> Nossa equipe de recepção estará pronta para recebê-lo
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
