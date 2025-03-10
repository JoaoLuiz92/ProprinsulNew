import React from 'react';
import { Flame } from 'lucide-react';
import { Link } from 'react-router-dom';
import Tatiana from './public/img/TatianaFoto.jpg';
import Simone from './public/img/Simone.jpeg';
import Roni from './public/img/Roni.jpeg';
import Logo from './public/img/logo.png';

function About() {
  const team = [
    {
      name: "Tatiana Fiss Garcez",
      role: "CEO",
      image: Tatiana,
      description: "Com mais de 15 anos de experiência no setor de prevenção de incêndios, Tatiana lidera a Proprinsul com visão inovadora e compromisso com a excelência. Sua dedicação à segurança e proteção estabeleceu a empresa como referência no sul do Brasil."
    },
    {
      name: "Simone Fiss Garcez",
      role: "Diretora",
      image: Simone,
      description: "Responsável pela gestão operacional, Simone traz sua expertise em gestão de projetos e relacionamento com clientes. Sua abordagem hands-on e foco em resultados têm sido fundamentais para o crescimento sustentável da empresa."
    },
    {
      name: "Roni Garcez",
      role: "Diretor",
      image: Roni,
      description: "Com vasta experiência técnica, Roni supervisiona todos os aspectos técnicos e operacionais da Proprinsul. Sua dedicação à inovação e qualidade garante que nossos serviços sempre excedam as expectativas dos clientes."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 via-red-800 to-navy-900">
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={Logo} className="h-8 w-8 text-red-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">Proprinsul</span>
          </Link>

           <Link to="/" className="hidden md:block text-gray-600 hover:text-red-600">
            <span className="ml-2 text-xl font-bold text-gray-800">Voltar</span>
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-20">
        <div className="bg-white rounded-lg shadow-xl p-8 mb-12">
          <h1 className="text-4xl font-bold mb-8 text-gray-800">Nossa História</h1>
          <p className="text-lg text-gray-600 mb-6">
            Fundada em 2010, a Proprinsul nasceu da visão de criar uma empresa que não apenas oferecesse serviços de prevenção de incêndios, mas que se tornasse uma parceira verdadeira na proteção do patrimônio e da vida de nossos clientes.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Ao longo dos anos, construímos uma reputação sólida baseada em competência técnica, atendimento personalizado e compromisso com a excelência. Nossa equipe altamente qualificada e dedicada trabalha incansavelmente para garantir as melhores soluções em prevenção e combate a incêndios.
          </p>
          <p className="text-lg text-gray-600">
            Hoje, somos reconhecidos como referência no setor, atendendo empresas de diversos segmentos em todo o sul do Brasil, sempre com o mesmo compromisso com a qualidade e segurança que nos trouxe até aqui.
          </p>
        </div>

        <h2 className="text-4xl font-bold mb-12 text-white text-center">Nossa Liderança</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-74 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-red-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-8 mt-20">
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

export default About;