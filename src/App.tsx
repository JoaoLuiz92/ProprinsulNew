import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FaWhatsapp } from 'react-icons/fa';
import Logo from './public/img/logo.png';
import yaraa from './public/img/yaraa.png';
import ccgl from './public/img/ccgl.png';
import bunge from './public/img/bunge.png';
import josapar from './public/img/josapar.png';
import lifemed from './public/img/lifemed.png';
import unifertil from './public/img/unifertil.png';
import audioteste from './public/audio/audioteste.mp3';
import heroteste from './public/img/heroteste.jpg';
import heroteste2 from './public/img/aboutpicture.jpg';
import heroteste3 from './public/img/bgservices.jpeg';
import heroteste4 from './public/img/bkg.jpg';
import navbarlogo from './public/img/navbarlogo.png';
import tanac from './public/img/tanac.png';
import bianchi from './public/img/bianchi.png';
import saobento from './public/img/saobento.png';



import {  
  Mail, 
  MapPin, 
  Menu, 
  X,
  CheckCircle2,
} 
from 'lucide-react';
import { Link } from 'react-router-dom';

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
    "Contra o improviso, a gente oferece prevenção. Porque a conta da negligência sempre chega — e sai caro.",
    "Enquanto você foca no seu negócio, a gente garante sua segurança. Consultoria completa em prevenção, sem dor de cabeça.",
    "A cultura do “depois a gente resolve” custa caro. A Proprinsul existe para provar que prevenir é mais barato do que remediar.",
    "Segurança, regularidade e economia: esse é o tripé da nossa consultoria. Tornamos a prevenção acessível, eficiente e estratégica."
  ];

  const [fraseAtual, setFraseAtual] = useState(0);
  const [textoDigitado, setTextoDigitado] = useState('');
  const [indiceCaractere, setIndiceCaractere] = useState(0);

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
  const planos = [
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
      name: "Bianchinni ",
      image: bianchi,
      style: { objectFit: 'contain', objectPosition: 'center' }
    },
    {
      name: "Tanac",
      image: tanac,
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
<div className="min-h-screen bg-[rgb(165,25,28)] font-aller">
      {/* Navigation */}
    <nav className="fixed w-full font-aller bg-blue-950 shadow-md py-8 z-50 h-16">
  <div className="container mx-auto px-4 h-full">
    <div className="flex justify-between items-center h-full">
      <div className="flex items-center h-full">
      <img 
        src={navbarlogo} 
        alt="Logo Proprinsul" 
        className="h-24 w-auto object-contain px-2"
      />       
        </div>
          {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <button
            onClick={() => scrollToSection('home')}
            className={`text-white hover:text-red-600 capitalize font-aller ${
              activeSection === 'home' ? 'text-white' : ''
            }`}
          >
            Inicio
          </button>
          <Link to="/about" className="text-white hover:text-red-600 capitalize font-aller">
            Sobre
          </Link>
          <Link to="/plans" className="text-white hover:text-red-600 capitalize font-aller">
            Planos
          </Link>
          {['Serviços', 'Clientes', 'Contato'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`text-white hover:text-red-600 capitalize font-aller ${
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
            className="text-white hover:text-red-600 font-aller"
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
              className="block w-full text-left px-3 py-2 text-white hover:text-red-600 capitalize font-aller"
            >
              Inicio
            </button>
            <Link
              to="/about"
              className="block w-full text-left px-3 py-2 text-white hover:text-red-600 capitalize font-aller"
            >
              Sobre
            </Link>
            <Link
              to="/plans"
              className="block w-full text-left px-3 py-2 text-white hover:text-red-600 capitalize font-aller"
            >
              Planos
            </Link>
            {['Serviços', 'Clientes', 'Contato'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-3 py-2 text-white hover:text-red-600 capitalize font-aller"
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
        className="h-40 w-auto mb-4 ml-28 color-[rgb(193,16,22)]"
        style={{ alignSelf: 'flex-start' }}
      />
      <p className="text-4xl font-aller font-semibold text-[rgb(193,16,22)] text-left max-w-lg">
        {frases[fraseAtual]}
      </p>
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
<section id="Planos" className="py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-12 font-aller text-white">Nossos Planos</h2>
    <div className="flex flex-col md:flex-row justify-center gap-8">
      {planos.map((plan, index) => (
        <div
          key={index}
          className="bg-white p-8 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 w-full max-w-md"
        >
          <h3 className="text-2xl font-aller font-bold mb-4">{plan.name}</h3>
          <div className="text-3xl font-aller font-bold text-red-600 mb-6">{plan.price}</div>
          <ul className="space-y-3">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-center font-aller text-gray-600">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <button className="w-full mt-8 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-aller font-semibold transition duration-300">
            Contratar
          </button>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Partners Section */}
      <section id="Clientes" className="py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold font-aller text-center mb-12 text-white">
      Nossos Parceiros
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
        className="h-24 w-auto object-contain px-2"
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