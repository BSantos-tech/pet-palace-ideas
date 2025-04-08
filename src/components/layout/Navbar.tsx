
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';
import PetIcon from '@/components/ui/PetIcon';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [swappedIcons, setSwappedIcons] = useState(false);
  const [useSecretImage, setUseSecretImage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    setSwappedIcons(!swappedIcons);
    
    // Secret feature - 90% chance to change the logo to the bird image
    if (Math.random() < 0.9) {
      setUseSecretImage(!useSecretImage);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container px-4 mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2" onClick={handleLogoClick}>
          <div className="relative">
            <div 
              className={`w-10 h-10 bg-${swappedIcons ? 'vet-green' : 'vet-blue'} rounded-full flex items-center justify-center 
                transition-all duration-300 ${swappedIcons ? 'z-10 scale-90' : 'z-20 scale-100'}`}
            >
              {useSecretImage ? (
                <PetIcon type="bird" className="text-white animate-paw-wave" size={24} color="#fff" />
              ) : (
                <PetIcon type={swappedIcons ? "dog" : "cat"} className="text-white animate-paw-wave" />
              )}
            </div>
            <div 
              className={`w-10 h-10 bg-${swappedIcons ? 'vet-blue' : 'vet-green'} rounded-full flex items-center justify-center 
                absolute -right-4 -bottom-2 transition-all duration-300 ${swappedIcons ? 'z-20 scale-110' : 'z-10 scale-100'}`}
            >
              {useSecretImage ? (
                <PetIcon type="bird" className="text-white" size={24} color="#fff" />
              ) : (
                <PetIcon type={swappedIcons ? "cat" : "dog"} className="text-white" />
              )}
            </div>
          </div>
          <div className="ml-4">
            <h1 className="font-display font-bold text-xl text-vet-blue-dark">Animal's Life <span className="text-xs font-normal text-vet-blue-dark">© BlueCorp</span></h1>
            <p className="text-xs text-vet-green-dark -mt-1">Clínica Veterinária</p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#inicio" className="text-vet-blue-dark hover:text-vet-blue font-medium transition-colors">Início</a>
          <a href="#servicos" className="text-vet-blue-dark hover:text-vet-blue font-medium transition-colors">Serviços</a>
          <a href="#sobre" className="text-vet-blue-dark hover:text-vet-blue font-medium transition-colors">Sobre</a>
          <a href="#depoimentos" className="text-vet-blue-dark hover:text-vet-blue font-medium transition-colors">Depoimentos</a>
          <a href="#contato" className="text-vet-blue-dark hover:text-vet-blue font-medium transition-colors">Contato</a>
        </nav>

        {/* Emergency Contact */}
        <div className="hidden md:flex items-center gap-2">
          <Button variant="outline" className="flex items-center gap-2 border-vet-orange text-vet-orange-dark hover:bg-vet-orange hover:text-white">
            <Phone size={16} />
            <span className="font-medium">Emergência: (11) 9999-9999</span>
          </Button>
          <Button className="bg-vet-green text-white hover:bg-vet-green-dark">
            Agendar Consulta
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-vet-blue-dark"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <nav className="flex flex-col gap-2">
            <a href="#inicio" className="py-2 px-4 text-vet-blue-dark hover:bg-vet-cream rounded-md" onClick={() => setIsMenuOpen(false)}>Início</a>
            <a href="#servicos" className="py-2 px-4 text-vet-blue-dark hover:bg-vet-cream rounded-md" onClick={() => setIsMenuOpen(false)}>Serviços</a>
            <a href="#sobre" className="py-2 px-4 text-vet-blue-dark hover:bg-vet-cream rounded-md" onClick={() => setIsMenuOpen(false)}>Sobre</a>
            <a href="#depoimentos" className="py-2 px-4 text-vet-blue-dark hover:bg-vet-cream rounded-md" onClick={() => setIsMenuOpen(false)}>Depoimentos</a>
            <a href="#contato" className="py-2 px-4 text-vet-blue-dark hover:bg-vet-cream rounded-md" onClick={() => setIsMenuOpen(false)}>Contato</a>
            <div className="mt-4 flex flex-col gap-2">
              <Button variant="outline" className="justify-center flex items-center gap-2 border-vet-orange text-vet-orange-dark hover:bg-vet-orange hover:text-white">
                <Phone size={16} />
                <span className="font-medium">Emergência: (11) 9999-9999</span>
              </Button>
              <Button className="bg-vet-green text-white hover:bg-vet-green-dark">
                Agendar Consulta
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
