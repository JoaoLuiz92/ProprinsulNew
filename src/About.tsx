import React from 'react';
import { Link } from 'react-router-dom';
import Tatiana from './public/img/TatianaFoto.jpg';
import Simone from './public/img/Simone.jpeg';
import Roni from './public/img/Roni.png';
import navbarlogo from './public/img/navbarlogo.png';

function About() {
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
    }
  ];

  return (
        <div className="min-h-screen bg-[rgb(165,25,28)] font-aller">
          
        <nav className="fixed w-full bg-blue-950 bg-opacity-100 z-50 shadow-md backdrop-blur-none">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center">
              <img 
            src={navbarlogo} 
            alt="Logo Proprinsul" 
            className="h-24 w-auto object-contain px-2"
          />       
          </Link>

           <Link to="/" className="hidden md:block text-gray-600 hover:text-red-600">
            <span className="text-white hover:text-red-600 capitalize font-allere">Voltar</span>
          </Link>
        </div>
      </nav>

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
        
      <div className="bg-white rounded-lg shadow-xl mt-6 p-8 mb-12">
  <h1 className="text-4xl font-aller text-center font-bold mb-8 text-gray-800">Uma história de solidez e crescimento</h1>
      <p className="text-lg font-aller text-gray-600 mb-6">
        A Proprinsul existe desde 1976, e desde 2011 está sob nova gestão familiar. 
        Quando assumimos, tínhamos apenas 1 carro e 3 funcionários.
         Hoje, somos mais de 40 colaboradores, contamos com uma frota de 10 veículos e
          3 endereços. Seguimos crescendo com a mesma essência:
          entregar prevenção de verdade, com responsabilidade,
           experiência e compromisso com o cliente.
      </p>
    </div>

        <h2 className="text-4xl font-bold font-aller mb-12 text-white text-center">Nossa Liderança</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden z-10  duration-300 hover:scale-105">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-74 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold font-aller text-gray-800 mb-2">{member.name}</h3>
                <p className="text-red-600 font-semibold font-aller mb-4">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-blue-950 text-white py-2 mt-20  border-gray-70">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
            <img 
            src={navbarlogo} 
            alt="Logo Proprinsul" 
            className="h-24 w-auto object-contain px-2"
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