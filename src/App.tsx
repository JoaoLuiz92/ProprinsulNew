import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import Logo from './public/img/logo.png';
import yaraa from './public/img/yaraa.png';
import ccgl from './public/img/ccgl.png';
import bunge from './public/img/bunge.png';
import josapar from './public/img/josapar.png';
import lifemed from './public/img/lifemed.png';
import unifertil from './public/img/unifertil.png';
import audioteste from './public/audio/Manifesto.mp3';
import heroteste from './public/img/heroteste.jpeg';
import heroteste2 from './public/img/heroteste2.jpeg';
import heroteste3 from './public/img/heroteste3.jpeg';
import heroteste4 from './public/img/heroteste4.jpeg';
import navbarlogo from './public/img/navbarlogo.png';
import tanac from './public/img/tanac.png';
import bianchi from './public/img/bianchi.png';
import saobento from './public/img/saobento.png';
import sbs from './public/img/sbs.jpg';
import allesblau from './public/img/allesblau.png';
import vbs from './public/img/VBS.png';

import {  
  Mail, 
  MapPin, 
  Menu, 
  X,
  CheckCircle2,
} 
from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

function ContactForm() {
  const [state, handleSubmit] = useForm("mblgjkjd");
  if (state.succeeded) {
    return <p className=" text-center  md:text-center pt-24 text-center font-bold font-aller text-red-700">Mensagem enviada com sucesso. Proprinsul © </p>;
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
        <label htmlFor="whatsapp" className="block text-gray-700 mb-2">Whatsapp</label>
        <input
          id="fone"
          type="phone"
          name="whatsapp"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <ValidationError 
          prefix="whatsapp" 
          field="whatsapp"
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

  const frases = [
    "Contra o improviso, a gente oferece prevenção. Porque a conta da negligência sempre chega, e sai mais caro.",
    "Enquanto você foca no seu negócio, a gente garante sua segurança. Consultoria completa em prevenção, sem dor de cabeça.",
    "A cultura do “depois a gente resolve” custa caro. A Proprinsul existe para provar que prevenir é mais barato do que remediar.",
    "Segurança, regularidade e economia: esse é o tripé da nossa consultoria. Tornamos a prevenção acessível, eficiente e estratégica."
  ];

  const [fraseAtual, setFraseAtual] = useState(0);
  const [textoDigitado, setTextoDigitado] = useState('');
  const [indiceCaractere, setIndiceCaractere] = useState(0);

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace('#', '');
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  useEffect(() => {
    const intervaloFrase = setInterval(() => {
      setFraseAtual((prevFrase) => (prevFrase + 1) % frases.length);
      setTextoDigitado('');
      setIndiceCaractere(0);
    }, 7000); // Troca a frase a cada 7 segundos

    return () => clearInterval(intervaloFrase);
  }, [frases.length]);

  useEffect(() => {
    if (indiceCaractere < frases[fraseAtual].length) {
      const timeout = setTimeout(() => {
        setTextoDigitado((prevTexto) => prevTexto + frases[fraseAtual][indiceCaractere]);
        setIndiceCaractere((prevIndice) => prevIndice + 1);
      }, 35); // Velocidade de digitação (50ms por caractere)

      return () => clearTimeout(timeout);
    }
  }, [indiceCaractere, frases, fraseAtual]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const Serviços = [
    {
      title: "Consultorias",
      description: `• Elaboração de PPCI, PSPCI e PrPCI para emissão de alvará dos Bombeiros.
                    • Consultorias de projeto e execução.
                    • Consultoria contínua em planos mensais (Proteção Total e Essencial).`,
    },
    {
      title: "Projetos e Documentos",
      description: `• PPCI para prédios existentes com inviabilidade técnica.
                    • Renovação de Alvará dos Bombeiros.
                    • Regularização de imóveis.
                    • Plano de Atendimento a Emergências (PAE).
                    • Laudos técnicos (caldeiras, central de gás, compressores, SPDA, acústico, habitabilidade, isolamento de riscos, segurança estrutural).
                    • Estudos como EIV (Estudo de Impacto de Vizinhança) e EISP.`,
    },
    {
      title: "Execução e Instalações",
      description: `• Execução de PPCI e laudos de segurança.
                    • Execução de projetos de SPDA.
                    • Instalações de alarmes de incêndio, hidrantes, sprinklers.
                    • Iluminação de emergência e balizamento.
                    • Detecção de fumaça.
                    • Placas de sinalização e orientação.`,
    },
    {
      title: "Produtos e Manutenção",
      description: `• Venda e manutenção de extintores.
                    • Venda e manutenção de mangueiras de incêndio.`,
    },
    {
      title: "Serralheria Especializada",
      description: `• Escadas, rampas e corrimãos.
                    • Guarda-corpos.
                    • Acessórios conforme NBR 9050.
                    • Personalizações conforme normas dos Bombeiros.`,
    },
    {
      title: "Treinamentos e Outros Serviços",
      description: `• Treinamento e fornecimento de brigada de incêndio especializada.
                    • Elétrica industrial e comercial.
                    • Soluções completas para eventos temporários.
                    • Sistemas de prevenção com software Zencheck para gestão de equipamentos.`,
    },
  ];
 

  const Clientes = [
    {
      name: "Yara do Brasil",
      image: yaraa,
      style: { objectFit: 'contain', objectPosition: 'center' }
    },
    {
      name: "Bunge Alimentos",
      image: bunge,
      style: { objectFit: 'contain', objectPosition: 'center' }
    },
    {
      name: "CCGL",
      image: ccgl,
      style: { objectFit: 'contain', objectPosition: 'center' }
    },
    {
      name: "Unifertil Fertilizantes",
      image: unifertil,
      style: { objectFit: 'contain', objectPosition: 'center' }
    },
    {
      name: "Josapar",
      image: josapar,
      style: { objectFit: 'contain', objectPosition: 'center' }
    },
    {
      name: "Lifemed",
      image: lifemed,
      style: { objectFit: 'contain', objectPosition: 'center' }
    },
    {
      name: "Engenho São Bento",
      image: saobento,
      style: { objectFit: 'contain', objectPosition: 'center' }
    },
    {
      name: "Bianchini ",
      image: bianchi,
      style: { objectFit: 'contain', objectPosition: 'center' }
    },
    {
      name: "Tanac",
      image: tanac,
      style: { objectFit: 'contain', objectPosition: 'center' }
    },
    {
      name: "VibraSom ",
      image: vbs,
      style: { objectFit: 'contain', objectPosition: 'center' }
    },
    {
      name: "Alles Blau - Hotel & Restaurante ",
      image: allesblau,
      style: { objectFit: 'contain', objectPosition: 'center' }
    },
    {
      name: "SBS Engenharia ",
      image: sbs,
      style: { objectFit: 'contain', objectPosition: 'center' }
    },
  ];


  return (
<div className="min-h-screen bg-[rgb(165,25,28)] font-aller">
      {/* Navigation */}
      <nav className="fixed w-full font-aller bg-blue-950 shadow-md py-4 z-50">
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
    <div className="md:hidden">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-white hover:text-red-600"
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
    </div>

    {/* Desktop Navigation */}
    <div className="hidden md:flex space-x-8">
      <button
        onClick={() => scrollToSection('home')}
        className={`text-white hover:text-red-600 capitalize ${
          activeSection === 'home' ? 'text-red-600' : ''
        }`}
      >
        Início
      </button>
      <Link to="/about" className="text-white hover:text-red-600 capitalize">
        Sobre
      </Link>
       <Link to="/plans" className="text-white hover:text-red-600 capitalize">
        Planos
      </Link>
             <Link to="/blog" className="text-white hover:text-red-600 capitalize">
        Blog
      </Link>
      {['Serviços', 'Clientes', 'Contato'].map((item) => (
        <button
          key={item}
          onClick={() => scrollToSection(item)}
          className={`text-white hover:text-red-600 capitalize ${
            activeSection === item ? 'text-red-600' : ''
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  </div>

  {/* Mobile Navigation */}
  {isMenuOpen && (
    <div className="md:hidden bg-blue-950">
      <div className="px-4 py-2 space-y-2">
        <button
          onClick={() => scrollToSection('home')}
          className="block w-full text-left text-white hover:text-red-600 capitalize"
        >
          Início
        </button>
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
          <button
            key={item}
            onClick={() => scrollToSection(item)}
            className="block w-full text-left text-white hover:text-red-600 capitalize"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  )}
</nav>
    {/* Hero Section */}
    <section id="home" className="pt-20">
      <div className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src={fraseAtual === 0 ? heroteste : fraseAtual === 1 ? heroteste2 : fraseAtual === 2 ? heroteste3 : heroteste4}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          {/* Logo acima das frases, alinhado à esquerda */}
          <img
            src={Logo}
            alt="Proprinsul Logo"
            className="h-40 w-auto mb-4  color-[rgb(193,16,22)]"
            style={{ alignSelf: 'flex-start' }}
          />
          <p className="text-left ml-8 max-w-lg">
            <span className="block text-4xl font-aller font-semibold text-[rgb(193,16,22)] mb-2">
              {frases[fraseAtual].split('.')[0]}.
            </span>
            <span className="block text-xl font-aller text-white">
              {frases[fraseAtual].split('.').slice(1).join('.')}
            </span>
          </p>
          {/* Bolinhas de Navegação */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {[0, 1, 2, 3].map((index) => (
              <button
                key={index}
                onClick={() => setFraseAtual(index)}
                className={`h-3 w-3 rounded-full ${
                  fraseAtual === index ? 'bg-red-600' : 'bg-gray-400'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>

{/* Services Section */}
  <section id="Serviços" className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center font-aller mb-12 text-white">Nossos Serviços</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Serviços.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="mb-4">
              <h3 className="text-xl font-bold text-red-600 font-aller">{service.title}</h3>
            </div>
            <ul className="space-y-2">
              {service.description.split('•').map((item, idx) =>
                item.trim() ? (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-red-600 flex-shrink-0 mr-2" />
                    <span className="text-gray-700 font-aller">{item.trim()}</span>
                  </li>
                ) : null
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>

        {/* Manifesto Section */}
        <section id="Manifesto" className="py-20 ">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center font-aller mb-12 text-white">Manifesto</h2>
            <div className="flex flex-col items-center text-center">
              {/* Texto em Destaque */}
              <p className="text-xl font-aller text-white italic max-w-3xl mb-8">
          “Acreditamos que prevenção não é custo, é investimento. Lutar contra a cultura do ‘depois a gente resolve’ é o que move nosso trabalho todos os dias. Nossa missão é tornar a prevenção acessível, eficiente e sem dor de cabeça.”
              </p>
              {/* Player de Áudio */}
              <audio controls className="w-full max-w-md">
          <source src={audioteste} type="audio/mpeg" />
          Seu navegador não suporta o elemento de áudio.
              </audio>
            </div>
          </div>
        </section>

{/* Plans Section */}
      <section id="Planos" className="py-4">
      <div className="container mx-auto px-4 py-12">
                <div className="text-center mb-10 mt-14">
                  {/* Frase Principal */}
                  <h1 className="text-4xl md:text-5xl font-bold font-aller text-white mb-4">
                    Sua empresa está pronta para enfrentar uma fiscalização ou emergência sem medo?
                  </h1>
                  {/* Subtexto */}
                  <p className="text-lg md:text-xl font-aller text-white/90 mb-6">
                    Mais do que alvarás e documentos, nós entregamos segurança, tranquilidade e economia para o seu negócio.
                  </p>
                  <p className="text-white/90 font-aller text-lg md:text-xl mb-2 text-center">
                  Não espere o problema chegar. Antecipe-se com o plano ideal.
                  </p>
                  {/* Botões de CTA */}
                  <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                    <Link
                      to="/plans"
                      className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold font-aller transition duration-300"
                    >
                      Clique Aqui, Veja o plano ideal para você!
                    </Link>
                  </div>
                </div>
              </div>
      </section>

      {/* Partners Section */}
      <section id="Clientes" className="py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold font-aller text-center mb-12 text-white">
      Nossos Parceiros
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {Clientes.map((partner, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div className="w-full h-48 bg-gray-100 p-2 flex items-center justify-center rounded-md mb-4">
            <img
              src={partner.image}
              alt={partner.name}
              className="w-full h-full object-contain max-h-36"
              style={partner.style as React.CSSProperties}
            />
          </div>
          <h3 className="text-lg font-bold font-aller text-center text-gray-800 mb-2">
            {partner.name}
          </h3>
        </div>
      ))}
    </div>
  </div>
</section>
      
          {/* Contact Section */}
          <section id="Contato" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center font-aller mb-12 text-white">Entre em Contato</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-semibold font-aller mb-6">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-red-600 font-aller mr-3" />
                  <span className='font-aller'>orcamentos@proprinsul.com.br</span>
                </div>
                <div className="flex items-center">
                    <a href="https://wa.me/555332255270" className="flex items-center" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="h-6 w-6 text-red-600 mr-3" />
                    <span className='font-aller'>(53) 3225-5270</span>
                  </a>
                  </div>
                  <div className="flex items-center">
                  <a href="https://www.instagram.com/proprinsulextintores" className="flex items-center" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="h-6 w-6 text-red-600 mr-3" />
                    <span className='font-aller'>@proprinsulextintores</span>
                  </a>
                </div> 
                  <div className="flex items-center">                  
                  <a href="https://www.google.com/maps/search/?api=1&query=Rua+Marcelo+Gama,+90+-+Pelotas,+RS" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <MapPin className="h-6 w-6 text-red-600 mr-3" />
                  <span className='font-aller'>Av. Salgado Filho, 1597A - Pelotas, RS</span>
                  </a>
                </div>               
                <div className="flex items-center">
                  <a href="https://www.google.com/maps/search/?api=1&query=Rua+Marcelo+Gama,+90+-+Pelotas,+RS" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <MapPin className="h-6 w-6 text-red-600 mr-3" />
                  <span className='font-aller'>Rua Marcelo Gama, 90 - Pelotas, RS</span>
                  </a>
                </div>             
                  <div className="flex items-center">
                  <a href="https://www.google.com/maps/place/R.+Domingos+de+Almeida,+286+-+Cidade+Nova,+Rio+Grande+-+RS" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <MapPin className="h-6 w-6 text-red-600 mr-3" />
                  <span className='font-aller'>Rua Domingos de Almeida, 286 - Rio Grande, RS</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 font-aller rounded-lg">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
  {/* Footer */}
  <footer className="bg-blue-950 text-white py-2">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
        <img 
        src={navbarlogo} 
        alt="Logo Proprinsul" 
        className="h-14 w-auto object-contain px-2"
      />       
        </div>
        <div className="text-center md:text-right font-aller">
          <p>&copy; 2024 Proprinsul Prevenção de Incêndios. Todos os direitos reservados.</p>
          <p className="text-sm text-gray-400 mt-2">Desenvolvido por Core.IA Technologies</p>
        </div>
      </div>
    </div>
  </footer>
</div>
  );
}

export default App;