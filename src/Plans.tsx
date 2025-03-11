import React from 'react';
import tabelaCorp from './public/img/tabelaCorp.png';
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
import Logo from './public/img/logo.png';

function Plans() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const plans = [
    {
      name: "Plano Essencial",
      price: "R$ 499/mês",
      description: "Ideal para pequenas empresas que buscam conformidade básica com as normas de segurança",
      features: [
        {
          icon: Shield,
          title: "Inspeção mensal",
          description: "Verificação completa dos equipamentos de segurança"
        },
        {
          icon: Clock,
          title: "Manutenção preventiva",
          description: "Manutenção regular para prevenir falhas"
        },
        {
          icon: Headphones,
          title: "Suporte 8x5",
          description: "Suporte técnico em horário comercial"
        },
        {
          icon: FileText,
          title: "Relatórios básicos",
          description: "Documentação essencial de conformidade"
        }
      ]
    },
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
    <div className="min-h-screen bg-gradient-to-br from-red-600 via-red-800 to-navy-900">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={Logo} className="h-8 w-8 text-red-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">Proprinsul</span>
          </Link>
          <Link to="/" className="hidden md:block text-gray-600 hover:text-red-600">
            <span className="ml-2 text-xl font-bold text-gray-800">Voltar</span>
          </Link>

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
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 py-3">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-600 hover:text-red-600"
              >
                Voltar para Home
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Escolha o Plano Ideal para Sua Empresa
          </h1>
          <p className="text-xl text-white/90">
            Soluções personalizadas para garantir a segurança do seu negócio
          </p>
           <div className="flex justify-center mt-8 mb-8 ">
            <img src={tabelaCorp} className='rounded-lg w-full max-w-5xl transform transition duration-300 hover:scale-105' />
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
  {plans.map((plan, index) => (
    <div
      key={index}
      className="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-105"
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
                <h5 className="font-semibold">{feature.title}</h5>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ))}
</div>
        {/* CTA Section */}
        <div className="bg-white rounded-lg shadow-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Precisa de um Plano Personalizado?</h2>
          <p className="text-gray-600 mb-6">
            Entre em contato conosco para desenvolvermos uma solução sob medida para sua empresa
          </p>
          <Link
            to="https://wa.me/555332255270"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300"
          >
            Fale Conosco
          </Link>
        </div>
      </div>

      {/* Footer */}
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

export default Plans;