
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Ministries from '@/pages/Ministries';
import Contact from '@/pages/Contact';
import Offerings from '@/pages/Offerings';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <Router>
      <div className="min-h-screen church-pattern">
        <Helmet>
          <title>Igreja - Comunidade de Fé e Esperança</title>
          <meta name="description" content="Bem-vindos à nossa igreja! Uma comunidade acolhedora onde a fé, esperança e amor se encontram. Junte-se a nós em nossa jornada espiritual." />
        </Helmet>
        
        <Navbar />
        
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/ministerios" element={<Ministries />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/ofertas" element={<Offerings />} />
          </Routes>
        </main>
        
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
