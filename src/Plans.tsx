import React from 'react';
import empresario from './public/img/empresarioteste.png';
import navbarlogo from './public/img/navbarlogo.png';

import { 
  Menu, 
  X,
  Shield,
  Clock,
  Headphones,
  FileText,
  Users,
  Briefcase
} from 'lucide-react';
import { Link } from 'react-router-dom';

function Plans() {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const plans = [

    {
      name: "Plano Gestão Preventiva",
      price: "R$ 899/mês",
      description: "Perfeito para empresas de médio porte que necessitam de cobertura mais abrangente",
      features: [
        {
          icon: Shield,
          title: "Inspeção quinzenal",
          description: "Verificações mais frequentes para maior segurança"
        },
        {
          icon: Clock,
          title: "Manutenção preventiva e corretiva",
          description: "Cobertura completa de manutenção"
        },
        {
          icon: Headphones,
          title: "Suporte 12x7",
          description: "Suporte técnico estendido"
        },
        {
          icon: FileText,
          title: "Relatórios detalhados",
          description: "Análises completas e recomendações"
        },
        {
          icon: Users,
          title: "Treinamento básico",
          description: "Capacitação da equipe para emergências"
        }
      ]
    },
    {
      name: "Plano Proteção Total",
      price: "Sob consulta",
      description: "Solução completa para grandes empresas com necessidades específicas de segurança",
      features: [
        {
          icon: Shield,
          title: "Inspeção semanal",
          description: "Monitoramento constante dos sistemas"
        },
        {
          icon: Clock,
          title: "Manutenção completa",
          description: "Cobertura total de todos os equipamentos"
        },
        {
          icon: Headphones,
          title: "Suporte 24x7",
          description: "Assistência técnica disponível 24 horas"
        },
        {
          icon: FileText,
          title: "Relatórios personalizados",
          description: "Documentação adaptada às suas necessidades"
        },
        {
          icon: Users,
          title: "Treinamento avançado",
          description: "Programa completo de capacitação"
        },
        {
          icon: Briefcase,
          title: "Consultoria dedicada",
          description: "Assessoria especializada permanente"
        }
      ]
    }
  ];

  return (
<div className="min-h-screen bg-[rgb(165,25,28)] font-aller overflow-x-hidden">
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
    <div className="md:hidden bg-blue-950 w-full">
      <div className="flex flex-col items-center px-4 py-2 space-y-2">
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

        {/* Hero Section */}
       
        {/* Problema que a consultoria resolve */}
        <section id="problema" className="py-20">
          <div className="container mx-auto px- mt-10">
            <h2 className="text-5xl font-bold font-aller text-center mb-12 text-white">
              Quanto custa uma interdição total na sua empresa?
            </h2>
            <div className="flex md:flex-row justify-center items-center gap-x-12">
              {/* Bloco Branco com a Lista de Problemas */}
              <div className="bg-white rounded-lg shadow-lg p-10 flex-1 min-h-[300px] max-w-lg md:max-w-xl">
                <ul className="space-y-6 text-gray-800 font-aller font-bold text-lg">
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">•</span>
                    Empresas são multadas e até interditadas por falta de conformidade.
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">•</span>
                    Perdem contratos, oportunidades e colocam vidas em risco.
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">•</span>
                    A burocracia atrasa decisões e gera custos desnecessários.
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">•</span>
                    A prevenção é sempre mais barata do que a correção.
                  </li>
                </ul>
              </div>
              {/* Imagem */}
              <div className="flex items-center justify-center flex-1 max-w-sm">
                <img
                  src={empresario} // Substitua pelo caminho correto da imagem
                  alt="Problema que a consultoria resolve"
                  className="rounded-lg shadow-lg h-auto"
                />
              </div>
            </div>
          </div>
        </section>
          
            {/* Título acima do Plans Grid */}
    <div className="text-center mb-8">
      <h2 className="text-5xl font-bold font-aller text-white">
        Planos Proprinsul
      </h2>
        <p className="text-lg font-aller text-white/90 mt-2">
          Dois planos com soluções sob medida para sua empresa.
        </p>
    </div>
    {/* Plans Grid */}
    <div className="flex justify-center gap-8 mb-12">
      {plans.map((plan, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 w-full max-w-md"
        >
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <div className="text-3xl font-bold text-red-600 mb-4">{plan.price}</div>
            <p className="text-gray-600 mb-6">{plan.description}</p>
            <button className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300">
              Contratar Agora
            </button>
          </div>
          <div className="bg-gray-50 p-8">
            <h4 className="font-semibold mb-4">O que está incluído:</h4>
            <div className="space-y-4">
              {plan.features.map((feature, idx) => (
                <div key={idx} className="flex items-start">
                  <feature.icon className="h-6 w-6 text-red-600 mr-3 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold font-aller">{feature.title}</h5>
                    <p className="text-sm text-gray-600 font-aller">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>

        {/* CTA Section */}
        <div className="bg-white rounded-lg shadow-xl p-8 text-center font-aller">
          <h2 className="text-3xl font-bold mb-4">Precisa de um Plano Personalizado?</h2>
          <p className="text-gray-600 mb-6">
            Entre em contato conosco para desenvolvermos uma solução sob medida para sua empresa
          </p>
                 <a
                href="#Whtasapp Automação"
                className="bg-red-600 m-8 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold font-aller transition duration-300"
              >
                Quero Regularizar Minha Empresa
              </a>

     
        </div>

        {/* Footer */}
        <footer className="bg-blue-950 text-white py-2 mt-20">
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
)

    
}

export default Plans;