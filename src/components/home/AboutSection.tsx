
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Users, Award, Heart } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-16 md:py-24">
      <div className="vet-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="section-title">Sobre a PetCare</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Desde 2010, a Clínica PetCare tem sido referência em cuidados veterinários, 
              oferecendo serviços de alta qualidade com profissionais dedicados e apaixonados por animais.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-2">
                <div className="bg-vet-green/10 rounded-full p-1 mt-1">
                  <Check className="text-vet-green" size={16} />
                </div>
                <p>Equipe de veterinários especialistas com formação nas melhores universidades</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="bg-vet-green/10 rounded-full p-1 mt-1">
                  <Check className="text-vet-green" size={16} />
                </div>
                <p>Equipamentos modernos e tecnologia de ponta para diagnósticos precisos</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="bg-vet-green/10 rounded-full p-1 mt-1">
                  <Check className="text-vet-green" size={16} />
                </div>
                <p>Ambiente acolhedor e tranquilo para reduzir o estresse dos animais</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="bg-vet-green/10 rounded-full p-1 mt-1">
                  <Check className="text-vet-green" size={16} />
                </div>
                <p>Atendimento personalizado, tratando cada pet como único</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="bg-vet-blue/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                  <Users className="text-vet-blue" size={24} />
                </div>
                <h4 className="font-display font-semibold text-xl">15+</h4>
                <p className="text-sm text-muted-foreground">Especialistas</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="bg-vet-green/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                  <Award className="text-vet-green" size={24} />
                </div>
                <h4 className="font-display font-semibold text-xl">12+</h4>
                <p className="text-sm text-muted-foreground">Anos de experiência</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="bg-vet-orange/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                  <Heart className="text-vet-orange" size={24} />
                </div>
                <h4 className="font-display font-semibold text-xl">5000+</h4>
                <p className="text-sm text-muted-foreground">Pets atendidos</p>
              </div>
            </div>

            <Button className="bg-vet-blue hover:bg-vet-blue-dark text-white">
              Conheça nossa equipe
            </Button>
          </div>

          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1441057206919-63d19fac2369" 
                  alt="Veterinário com cachorro" 
                  className="rounded-lg h-48 object-cover w-full mb-4"
                />
                <img 
                  src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1" 
                  alt="Gato sendo examinado" 
                  className="rounded-lg h-64 object-cover w-full"
                />
              </div>
              <div className="mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1452378174528-3090a4bba7b2" 
                  alt="Cachorro em consulta" 
                  className="rounded-lg h-64 object-cover w-full mb-4"
                />
                <img 
                  src="https://images.unsplash.com/photo-1582562124811-c09040d0a901" 
                  alt="Veterinário com pet" 
                  className="rounded-lg h-48 object-cover w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
