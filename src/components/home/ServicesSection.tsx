
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Stethoscope, Syringe, Microscope, Scissors, Heart, ShoppingBag, Clock, Activity } from 'lucide-react';

const services = [
  {
    icon: Stethoscope,
    title: 'Consultas',
    description: 'Consultas de rotina, preventivas e para problemas específicos com nossos veterinários especialistas.',
    color: 'bg-vet-blue/10',
    iconColor: 'text-vet-blue'
  },
  {
    icon: Syringe,
    title: 'Vacinação',
    description: 'Programa completo de vacinação para cães, gatos e outros animais de estimação.',
    color: 'bg-vet-green/10',
    iconColor: 'text-vet-green'
  },
  {
    icon: Microscope,
    title: 'Exames Laboratoriais',
    description: 'Exames de sangue, urina e outros diagnósticos com resultados rápidos e precisos.',
    color: 'bg-vet-orange/10',
    iconColor: 'text-vet-orange'
  },
  {
    icon: Scissors,
    title: 'Banho e Tosa',
    description: 'Serviços de banho, tosa e estética para manter seu pet limpo e saudável.',
    color: 'bg-vet-blue/10',
    iconColor: 'text-vet-blue'
  },
  {
    icon: Heart,
    title: 'Cirurgias',
    description: 'Procedimentos cirúrgicos realizados por equipe especializada em ambiente seguro.',
    color: 'bg-vet-green/10',
    iconColor: 'text-vet-green'
  },
  {
    icon: ShoppingBag,
    title: 'Pet Shop',
    description: 'Alimentação, medicamentos, acessórios e tudo que seu pet precisa em um só lugar.',
    color: 'bg-vet-orange/10',
    iconColor: 'text-vet-orange'
  },
  {
    icon: Clock,
    title: 'Emergência 24h',
    description: 'Atendimento emergencial disponível 24 horas por dia, todos os dias da semana.',
    color: 'bg-vet-blue/10',
    iconColor: 'text-vet-blue'
  },
  {
    icon: Activity,
    title: 'Especialidades',
    description: 'Cardiologia, dermatologia, odontologia, ortopedia e outras especialidades veterinárias.',
    color: 'bg-vet-green/10',
    iconColor: 'text-vet-green'
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section id="servicos" className="py-16 md:py-24 bg-gray-50">
      <div className="vet-container">
        <h2 className="section-title text-center">Nossos Serviços</h2>
        <p className="section-subtitle text-center">
          Oferecemos uma ampla gama de serviços veterinários para cuidar da saúde e do bem-estar do seu pet.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md p-6 transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className={`${service.color} rounded-full w-14 h-14 flex items-center justify-center mb-4`}>
                <service.icon className={service.iconColor} size={28} />
              </div>
              <h3 className="text-xl font-display font-semibold text-vet-blue-dark mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <Button variant="link" className="p-0 text-vet-blue hover:text-vet-blue-dark">
                Saiba mais <ArrowRight size={16} className="ml-1" />
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-vet-blue hover:bg-vet-blue-dark text-white">
            Ver todos os serviços
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
