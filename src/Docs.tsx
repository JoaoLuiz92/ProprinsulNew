import React from 'react';
import navbarlogo from './public/img/navbarlogo.png';
import { 
  Menu, 
  X,
  FileText,
  Download,
  Eye,
  Shield,
  FileCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Importar os documentos
import doc1 from './public/docs/CERTIDÃO CREA PROPRINSUL VALID. 31-03-26 (1).pdf';
import doc2 from './public/docs/Registro 007775_2013 _ Avaliação da Conformidade.pdf';

function Docs() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const documents = [
    {
      id: 1,
      title: "Certidão CREA Proprinsul",
      description: "Certidão de registro no CREA.",
      icon: FileText,
      file: doc1,
      category: "Certificações"
    },
    {
      id: 2,
      title: "Registro 007775/2013 - Avaliação da Conformidade",
      description: "Documento de registro e avaliação de conformidade técnica.",
      icon: FileCheck,
      file: doc2,
      category: "Certificações"
    }
  ];

  const handleOpenDocument = (file: string) => {
    window.open(file, '_blank');
  };

  const handleDownloadDocument = (file: string, title: string) => {
    const link = document.createElement('a');
    link.href = file;
    link.download = `${title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[rgb(165,25,28)] font-aller overflow-x-hidden flex flex-col">
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
            <Link to="/docs" className="text-white hover:text-red-600 capitalize font-aller">
              Certificações
            </Link>
            <Link
              to="https://proprinsul.webnode.page/"
              className="text-white hover:text-red-600 capitalize font-aller"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zona Segura
            </Link>
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
              <Link
                to="/docs"
                className="block w-full text-left text-white hover:text-red-600 capitalize"
              >
                Certificações
              </Link>
              <Link
                to="https://proprinsul.webnode.page/"
                className="block w-full text-left text-white hover:text-red-600 capitalize"
                target="_blank"
                rel="noopener noreferrer"
              >
                Zona Segura
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
      {/* Hero Section */}
      <section className="pt-28 pb-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Shield className="h-20 w-20 text-white" />
          </div>
          <h1 className="text-5xl font-bold font-aller text-white mb-4">
            Central de Certificados
          </h1>
          <p className="text-xl font-aller text-white/90 max-w-2xl mx-auto">
            Acesse nossos certificados oficiais, certificações e comprovantes de conformidade.
          </p>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              >
                {/* Document Header */}
                <div className="bg-blue-950 p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 rounded-full p-3">
                      <doc.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <span className="text-red-400 text-sm font-semibold uppercase tracking-wide">
                        {doc.category}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-1">
                        {doc.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Document Body */}
                <div className="p-6">
                  <p className="text-gray-600 font-aller mb-6">
                    {doc.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleOpenDocument(doc.file)}
                      className="flex-1 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg font-semibold transition duration-300"
                    >
                      <Eye className="h-5 w-5" />
                      Visualizar
                    </button>
                    <button
                      onClick={() => handleDownloadDocument(doc.file, doc.title)}
                      className="flex-1 flex items-center justify-center gap-2 bg-blue-950 hover:bg-blue-900 text-white px-4 py-3 rounded-lg font-semibold transition duration-300"
                    >
                      <Download className="h-5 w-5" />
                      Baixar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-xl p-8 text-center font-aller max-w-3xl mx-auto">
            <FileCheck className="h-16 w-16 text-red-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Documentação Completa</h2>
            <p className="text-gray-600 mb-6">
                    Todos os nossos certificados estão disponíveis para consulta. Se você precisa de algum certificado específico ou tem dúvidas sobre nossa certificação, entre em contato conosco.
                </p>
            <a
              href="https://wa.me/555332255270"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold font-aller transition duration-300"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </section>

      </main>

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-2 mt-auto">
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

export default Docs;

