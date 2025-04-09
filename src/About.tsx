import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Tatiana from './public/img/TatianaFoto.jpg';
import Simone from './public/img/Simone.jpeg';
import Roni from './public/img/Roni.png';
import navbarlogo from './public/img/navbarlogo.png';
import { Menu, X } from 'lucide-react';

function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const team = [
    {
      name: "Simone Fiss Garcez",
      role: "CFO",
      image: Simone,
    },
    {
      name: "Tatiana Fiss Garcez",
      role: "CEO, Engenheira Mecânica e de Segurança do Trabalho",
      image: Tatiana,
    },
    {
      name: "Roni Garcez",
      role: "Sócio",
      image: Roni,
    },
  ];

  return (
<div className="min-h-screen bg-[rgb(165,25,28)] font-aller overflow-x-hidden">
        {/* Navigation */}
      <nav className="fixed w-full font-aller bg-blue-950 shadow-md py-4 z-50 ">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={navbarlogo}
              alt="Logo Proprinsul"
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden  max-w-5x1 ">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-red-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-red-600 capitalize font-aller">
              Início
            </Link>
            <Link to="/about" className="text-white hover:text-red-600 capitalize font-aller">
              Sobre
            </Link>
            <Link to="/plans" className="text-white hover:text-red-600 capitalize font-aller">
              Planos
            </Link>
            {['Serviços', 'Clientes', 'Contato'].map((item) => (
              <Link
                key={item}
                to={`/#${item}`}
                className="text-white hover:text-red-600 capitalize font-aller"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-blue-950">
            <div className="px-4 py-2 space-y-2">
              <Link
                to="/"
                className="block w-full text-left text-white hover:text-red-600 capitalize"
              >
                Início
              </Link>
              <Link
                to="/about"
                className="block w-full text-left text-white hover:text-red-600 capitalize"
              >
                Sobre
              </Link>
              <Link
                to="/plans"
                className="block w-full text-left text-white hover:text-red-600 capitalize"
              >
                Planos
              </Link>
              {['Serviços', 'Clientes', 'Contato'].map((item) => (
                <Link
                  key={item}
                  to={`/#${item}`}
                  className="block w-full text-left text-white hover:text-red-600 capitalize"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="relative py-16">
          <h2 className="text-3xl font-bold font-aller text-center text-white mb-12">
            Nossa Linha do Tempo
          </h2>
          <div className="relative flex justify-center">
            <div className="w-full max-w-5xl h-1 bg-white relative">
              {/* Eventos */}
              <div className="absolute top-1/2 left-[0%] transform -translate-y-1/2 group flex flex-col items-center">
                <div className="w-5 h-5 bg-white rounded-full border-2 border-red-600 group-hover:scale-125 transition-transform"></div>
                <span className="mt-2 text-white font-bold">1976</span>
                <div className="absolute bottom-8 bg-white text-gray-800 text-sm rounded-lg shadow-lg p-2 w-52 opacity-0 group-hover:opacity-100 transition-opacity z-50">
                  Fundação da Proprinsul, com foco em prevenção de incêndios.
                </div>
              </div>
              <div className="absolute top-1/2 left-[50%] transform -translate-x-1/2 -translate-y-1/2 group flex flex-col items-center">
                <div className="w-5 h-5 bg-white rounded-full border-2 border-red-600 group-hover:scale-125 transition-transform"></div>
                <span className="mt-2 text-white font-bold">2011</span>
                <div className="absolute bottom-8 bg-white text-gray-800 text-sm rounded-lg shadow-lg p-2 w-52 opacity-0 group-hover:opacity-100 transition-opacity z-50">
                  Nova gestão familiar assume com 1 carro e 3 funcionários.
                </div>
              </div>
              <div className="absolute top-1/2 left-[100%] transform -translate-x-full -translate-y-1/2 group flex flex-col items-center">
                <div className="w-5 h-5 bg-white rounded-full border-2 border-red-600 group-hover:scale-125 transition-transform"></div>
                <span className="mt-2 text-white font-bold">Hoje</span>
                <div className="absolute bottom-8 bg-white text-gray-800 text-sm rounded-lg shadow-lg p-2 w-52 opacity-0 group-hover:opacity-100 transition-opacity z-50">
                  +40 colaboradores, 10 veículos, 3 endereços.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 px-4 mb-12">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-aller font-bold mb-8 text-center text-white">
              Uma história de solidez e crescimento
            </h1>
            <p className="text-lg font-aller text-white">
              A Proprinsul existe desde 1976, e desde 2011 está sob nova gestão familiar.
              Quando assumimos, tínhamos apenas 1 carro e 3 funcionários.
              Hoje, somos mais de 40 colaboradores, contamos com uma frota de 10 veículos e
              3 endereços. Seguimos crescendo com a mesma essência:
              entregar prevenção de verdade, com responsabilidade,
              experiência e compromisso com o cliente.
            </p>
          </div>
        </div>

        <h2 className="text-4xl font-bold font-aller mb-12 text-white text-center">
          Nossa Liderança
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-xl overflow-hidden z-10 duration-300 hover:scale-105"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-74 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold font-aller text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-red-600 font-semibold font-aller mb-4">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-blue-950 text-white py-2 mt-20 border-gray-70">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img
                src={navbarlogo}
                alt="Logo Proprinsul"
                className="h-14 w-auto object-contain px-2"
              />
            </div>
            <div className="text-center font-aller md:text-right">
              <p>&copy; 2024 Proprinsul Prevenção de Incêndios. Todos os direitos reservados.</p>
              <p className="text-sm text-gray-400 mt-2">Desenvolvido por Core.IA Technologies</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default About;