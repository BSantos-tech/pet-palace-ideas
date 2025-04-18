
import React from 'react';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone, Clock } from 'lucide-react';
import PetIcon from '@/components/ui/PetIcon';
import { useToast } from '@/components/ui/use-toast';

const Footer: React.FC = () => {
  const { toast } = useToast();

  const handleContactClick = (type: string, value?: string) => {
    switch (type) {
      case 'phone':
        window.location.href = `tel:${value}`;
        break;
      case 'email':
        window.location.href = `mailto:${value}`;
        break;
      case 'schedule':
        // Scroll to the contact form section
        const contactSection = document.getElementById('contato');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
          // Pre-select appointment option if we add that later
        }
        toast({
          title: "Agendar Consulta",
          description: "Preencha o formulário de contato para agendar sua consulta.",
          duration: 5000,
        });
        break;
      case 'emergency':
        window.location.href = `tel:1199999999`;
        toast({
          title: "Emergência 24h",
          description: "Ligando para o número de emergência...",
          duration: 3000,
        });
        break;
      case 'map':
        window.open('https://www.google.com/maps/place/Senac+Araçatuba', '_blank');
        break;
      default:
        break;
    }
  };

  return (
    <footer className="bg-vet-blue-dark text-white">
      <div className="vet-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10">
          {/* About Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <PetIcon type="cat" className="text-vet-blue" />
                </div>
                <div className="w-10 h-10 bg-vet-green rounded-full flex items-center justify-center absolute -right-4 -bottom-2">
                  <PetIcon type="dog" className="text-white" />
                </div>
              </div>
              <div className="ml-2">
                <h3 className="font-display font-bold text-lg text-white">Animal's Life</h3>
                <p className="text-xs text-vet-green -mt-1">Clínica Veterinária</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Cuidando com amor e dedicação do seu melhor amigo desde 2010. Nossa missão é proporcionar saúde e bem-estar para todos os pets.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-vet-green transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-vet-green transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-vet-green transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-300 hover:text-white transition-colors">Início</a></li>
              <li><a href="#servicos" className="text-gray-300 hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#sobre" className="text-gray-300 hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#depoimentos" className="text-gray-300 hover:text-white transition-colors">Depoimentos</a></li>
              <li>
                <a 
                  href="#contato" 
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    handleContactClick('schedule');
                  }}
                >
                  Contato
                </a>
              </li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Nossos Serviços</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    handleContactClick('schedule');
                  }}
                >
                  Consultas
                </a>
              </li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cirurgias</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Vacinação</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Exames</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Banho e Tosa</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Pet Shop</a></li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    handleContactClick('emergency');
                  }}
                >
                  Emergência 24h
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <MapPin className="mt-1 flex-shrink-0 cursor-pointer" size={18} 
                  onClick={() => handleContactClick('map')} />
                <span className="text-gray-300 cursor-pointer" onClick={() => handleContactClick('map')}>
                  Araçatuba, Senac
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="cursor-pointer" onClick={() => handleContactClick('phone', '1199999999')} />
                <span 
                  className="text-gray-300 cursor-pointer" 
                  onClick={() => handleContactClick('phone', '1199999999')}
                >
                  (11) 9999-9999
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="cursor-pointer" onClick={() => handleContactClick('email', 'contato@animalslife.com.br')} />
                <span 
                  className="text-gray-300 cursor-pointer" 
                  onClick={() => handleContactClick('email', 'contato@animalslife.com.br')}
                >
                  contato@animalslife.com.br
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-gray-300">Segunda-Sexta: 8h - 20h</p>
                  <p className="text-gray-300">Sábado: 8h - 16h</p>
                  <p className="text-gray-300">Domingo: Emergência 24h</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 py-6">
        <div className="vet-container">
          <p className="text-center text-sm text-gray-400">
            © 2025 Animal's Life Clínica Veterinária. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
