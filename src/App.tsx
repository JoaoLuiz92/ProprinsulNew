import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import InitialPhoto from './public/img/aboutpicture.jpg';
import Logo from './public/img/logo.png';
import yaraa from './public/img/yaraa.png';
import ccgl from './public/img/ccgl.png';
import bunge from './public/img/bunge.png';
import josapar from './public/img/josapar.png';
import lifemed from './public/img/lifemed.png';
import unifertil from './public/img/unifertil.png';
import proprinsulHome from './public/img/proprinsulHome.png';

import {  
  Shield, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X,
  CheckCircle2,
  Building2,
  Users,
  AlertCircle
} from 'lucide-react';
import { Link, useHref } from 'react-router-dom';

function ContactForm() {
  const [state, handleSubmit] = useForm("mblgjkjd");
  if (state.succeeded) {
    return <p className="text-green-600">Mensagem enviada com sucesso!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-gray-700 mb-2">Nome</label>
        <input
          id="name"
          type="text"
          name="name"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-gray-700 mb-2">Mensagem</label>
        <textarea
          id="message"
          name="message"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
          rows={4}
        ></textarea>
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
      >
        Enviar Mensagem
      </button>
    </form>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  

  const Serviços = [
    {
      title: "Projeto de Prevenção",
      description: "Desenvolvimento de projetos técnicos completos para prevenção de incêndios",
      icon: Shield
    },
    {
      title: "Manutenção",
      description: "Manutenção preventiva e corretiva de equipamentos de combate a incêndio",
      icon: AlertCircle
    },
    {
      title: "Consultoria",
      description: "Consultoria especializada em normas e regulamentações de segurança",
      icon: Building2
    },
    {
      title: "Treinamentos",
      description: "Capacitação de equipes para situações de emergência",
      icon: Users
    }
  ];

  const planos = [
    {
      name: "Plano Essencial",
      price: "R$ 499/mês",
      features: [
        "Inspeção mensal",
        "Manutenção preventiva",
        "Suporte 8x5",
        "Relatórios básicos"
      ]
    },
    {
      name: "Plano Gestão Preventiva",
      price: "R$ 899/mês",
      features: [
        "Inspeção quinzenal",
        "Manutenção preventiva e corretiva",
        "Suporte 12x7",
        "Relatórios detalhados",
        "Treinamento básico"
      ]
    },
    {
      name: "Plano Proteção Total",
      price: "Sob consulta",
      features: [
        "Inspeção semanal",
        "Manutenção completa",
        "Suporte 24x7",
        "Relatórios personalizados",
        "Treinamento avançado",
        "Consultoria dedicada"
      ]
    }
  ];

  const Parceiros = [
    {
      name: "Yara do Brasil",
      image: yaraa,
      description: "Líder mundial em nutrição de plantas e um fornecedor de soluções ambientais.",
      style: { objectFit: 'contain', objectPosition: 'center' }
    },
    {
      name: "Bunge Alimentos",
      image: bunge,
      description: "Referência global no agronegócio e na produção de alimentos e ingredientes.",
      style: { objectFit: 'contain', objectPosition: 'center' }
    },
    {
      name: "CCGL",
      image: ccgl,
      description: "Empresa de grande porte que atua no setor de agronegócio.",
      style: { objectFit: 'contain', objectPosition: 'center' }
    },
    {
      name: "Unifertil Fertilizantes",
      image: unifertil,
      description: "Especialista em nutrição de solo, fornecendo fertilizantes de alta performance.",
      style: { objectFit: 'contain', objectPosition: 'center' }
    },
    {
      name: "Josapar",
      image: josapar,
      description: "Uma das maiores indústrias de alimentos do Brasil, líder em arroz e derivados.",
      style: { objectFit: 'contain', objectPosition: 'center' }
    },
    {
      name: "Lifemed",
      image: lifemed,
      description: "Inovação em tecnologia médica, oferecendo soluções para a saúde e bem-estar.",
      style: { objectFit: 'contain', objectPosition: 'center' }
    }
  ];
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500/90 via-red-700/80 to-navy-900/90">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src={Logo} className="h-8 w-8 text-red-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">Proprinsul</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection('Inicio')}
                className={`text-gray-600 hover:text-red-600 capitalize ${
                activeSection === 'Inicio' ? 'text-red-600' : ''
                }`}
              >
                Inicio
              </button>
              <Link
                to="/about"
                className="text-gray-600 hover:text-red-600 capitalize"
              >
                Sobre
              </Link>
              <Link
              to="/plans"
              className="text-gray-600 hover:text-red-600 capitalize"
            >
              Planos
            </Link>
              {['Serviços', 'Parceiros', 'Contato'].map((item) => (
                <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-gray-600 hover:text-red-600 capitalize ${
                  activeSection === item ? 'text-red-600' : ''
                }`}
                >
                {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-red-600"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
            {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('Inicio')}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-red-600 capitalize">
                Inicio
              </button>
              <Link
                to="/about"
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-red-600 capitalize"
              >
                Sobre
              </Link>
              <Link
                to="/plans"
                className="text-gray-600 hover:text-red-600 capitalize">
                Planos
              </Link>
              {['Serviços', 'Parceiros', 'Contato'].map((item) => (
                <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-red-600 capitalize"
                >
                {item}
                </button>
              ))}
              </div>
            </div>
            )}
          </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20">
        <div className="relative h-[600px]">
          <div className="absolute inset-0">
            <img
              src= {InitialPhoto}
              alt="Hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
          </div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-2xl mx-auto text-center">
              <img src={proprinsulHome} className='w-full h-64 p-4 flex items-center justify-center rounded-lg mb-4 mx-auto object-contain'/>
              <h1 className="text-5xl font-bold mb-4">
              Proteção e Segurança para seu Negócio
              </h1>
              <p className="text-xl mb-8">
              Sejam bem vindos à Proprinsul Extintores, referência no sul do
              Rio Grande do Sul nas áreas de prevenção e combate a incêndios.
              </p>
              <a
              href="https://wa.me/555332255270"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300"
              >
              Fale Conosco
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="Serviços" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Nossos Serviços</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Serviços.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
                <service.icon className="h-12 w-12 text-red-600 mb-4 " />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="Planos" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Nossos Planos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {planos.map((plan, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="text-3xl font-bold text-red-600 mb-6">{plan.price}</div>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-8 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300">
                  Contratar
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="Parceiros" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
        Nossos Parceiros
        <span className="block mt-2 h-1 w-20 bg-blue-500 mx-auto"></span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Parceiros.map((partner, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-full h-64 bg-gray-100 p-4 flex items-center justify-center rounded-lg mb-4">
          <img
            src={partner.image}
            alt={partner.name}
            className="w-full h-full object-scale-down max-h-48"
            style={partner.style as React.CSSProperties}
          />
            </div>
            <h3 className="text-xl font-bold text-center text-gray-800 mb-2">
          {partner.name}
            </h3>
            <p className="text-gray-600 text-center text-base leading-relaxed">
          {partner.description}
            </p>
          </div>
        ))}
          </div>
        </div>
      </section>
      
          {/* Contact Section */}
          <section id="Contato" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Entre em Contato</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-red-600 mr-3" />
                  <span>contato@proprinsul.com.br</span>
                </div>
                <div className="flex items-center">
                  <a href="https://www.google.com/maps/search/?api=1&query=Rua+Marcelo+Gama,+90+-+Pelotas,+RS" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <MapPin className="h-6 w-6 text-red-600 mr-3" />
                  <span>Rua Marcelo Gama, 90 - Pelotas, RS</span>
                  </a>
                </div>
                <div className="flex items-center">
                  <a href="https://wa.me/555332255270" className="flex items-center" target="_blank" rel="noopener noreferrer">
                  <Phone className="h-6 w-6 text-red-600 mr-3" />
                  <span>(53) 3225-5270</span>
                  </a>
                </div>
                <div className="flex items-center">
                  <a href="https://www.google.com/maps/place/R.+Domingos+de+Almeida,+286+-+Cidade+Nova,+Rio+Grande+-+RS" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <MapPin className="h-6 w-6 text-red-600 mr-3" />
                  <span>Rua Domingos de Almeida, 286 - Rio Grande, RS</span>
                  </a>
                </div>
                <div className="flex items-center">
                  <a href="https://wa.me/5553991955119" className="flex items-center" target="_blank" rel="noopener noreferrer">
                  <Phone className="h-6 w-6 text-red-600 mr-3" />
                  </a>
                  <span>(53) 99195-5119</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img src={Logo} className="h-8 w-8 text-red-600" />
              <span className="ml-2 text-xl font-bold">Proprinsul</span>
            </div>
            <div className="text-center md:text-right">
              <p>&copy; 2024 Proprinsul Prevenção de Incêndios. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;