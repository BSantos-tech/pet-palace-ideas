
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Phone, ArrowRight } from 'lucide-react';
import PetIcon from '@/components/ui/PetIcon';

const HeroSection: React.FC = () => {
  return (
    <section id="inicio" className="pt-28 pb-16 md:pt-32 md:pb-24">
      <div className="vet-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-vet-blue-dark mb-4">
              Cuidados Veterinários com <span className="text-vet-green">Amor</span> e <span className="text-vet-orange">Carinho</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Nossa clínica veterinária oferece atendimento completo e especializado para garantir a saúde e o bem-estar do seu melhor amigo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-vet-green text-white hover:bg-vet-green-dark h-12 px-6 text-base font-medium flex items-center gap-2">
                <Calendar size={18} />
                Agendar Consulta
                <ArrowRight size={16} />
              </Button>
              <Button variant="outline" className="border-vet-orange text-vet-orange-dark hover:bg-vet-orange hover:text-white h-12 px-6 text-base font-medium flex items-center gap-2">
                <Phone size={18} />
                Emergência 24h
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="bg-white shadow-lg rounded-lg p-4 text-center">
                <div className="bg-vet-blue/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <PetIcon type="cat" className="text-vet-blue" size={24} />
                </div>
                <h3 className="font-display font-semibold">Consultas</h3>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-4 text-center">
                <div className="bg-vet-green/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <PetIcon type="dog" className="text-vet-green" size={24} />
                </div>
                <h3 className="font-display font-semibold">Vacinas</h3>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-4 text-center">
                <div className="bg-vet-orange/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <PetIcon type="bird" className="text-vet-orange" size={24} />
                </div>
                <h3 className="font-display font-semibold">Exames</h3>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1" 
                alt="Veterinário cuidando de gato" 
                className="rounded-2xl shadow-xl object-cover w-full h-[500px]"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 z-20 w-40 h-40 bg-white p-3 rounded-xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1452378174528-3090a4bba7b2" 
                alt="Cachorro feliz" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="absolute -top-8 -right-8 z-0 w-full h-full bg-vet-green/20 rounded-2xl"></div>
            <div className="absolute top-8 left-8 w-20 h-20 bg-vet-blue/30 rounded-full animate-float"></div>
            <div className="absolute bottom-24 right-12 w-16 h-16 bg-vet-orange/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
