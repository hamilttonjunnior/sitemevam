
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Church, Heart, Users, Phone, DollarSign } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMinistries, setShowMinistries] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/', icon: Church },
    { name: 'Sobre', path: '/sobre', icon: Heart },
    { 
      name: 'Ministérios', 
      path: '/ministerios', 
      icon: Users,
      hasSubmenu: true,
      submenu: [
        { name: 'Ministério Infantil', path: '/ministerios#infantil' },
        { name: 'Ministério de Jovens', path: '/ministerios#jovens' },
        { name: 'Ministério de Louvor', path: '/ministerios#louvor' },
        { name: 'Ministério de Mulheres', path: '/ministerios#mulheres' },
        { name: 'Ministério de Homens', path: '/ministerios#homens' },
        { name: 'Ministério de Casais', path: '/ministerios#casais' }
      ]
    },
    { name: 'Contato', path: '/contato', icon: Phone },
    { name: 'Ofertas', path: '/ofertas', icon: DollarSign }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-effect shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <Church className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Igreja</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasSubmenu && setShowMinistries(true)}
                onMouseLeave={() => item.hasSubmenu && setShowMinistries(false)}
              >
                <Link
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === item.path
                      ? 'text-blue-300 bg-white/10'
                      : 'text-white hover:text-blue-300 hover:bg-white/5'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                  {item.hasSubmenu && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Submenu */}
                {item.hasSubmenu && (
                  <AnimatePresence>
                    {showMinistries && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-56 glass-effect rounded-lg shadow-xl py-2"
                      >
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-300 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-effect border-t border-white/10"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? 'text-blue-300 bg-white/10'
                        : 'text-white hover:text-blue-300 hover:bg-white/5'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                  
                  {/* Mobile Submenu */}
                  {item.hasSubmenu && (
                    <div className="ml-6 mt-2 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          onClick={() => setIsOpen(false)}
                          className="block px-3 py-1 text-sm text-white/80 hover:text-white transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
