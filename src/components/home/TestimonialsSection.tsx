
import React from 'react';
import { Star, Quote } from 'lucide-react';
import PetIcon from '@/components/ui/PetIcon';

const testimonials = [
  {
    name: 'Ana Silva',
    petName: 'Luna',
    petType: 'cat',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
    text: 'Minha gatinha Luna recebeu um atendimento excepcional na PetCare. Os veterinários são muito atenciosos e cuidadosos. Recomendo a todos que amam seus pets!'
  },
  {
    name: 'Carlos Oliveira',
    petName: 'Thor',
    petType: 'dog',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    text: 'O Thor estava muito doente e a equipe da PetCare salvou a vida dele. São profissionais extremamente dedicados e competentes. Sou muito grato!'
  },
  {
    name: 'Mariana Costa',
    petName: 'Pipoca',
    petType: 'bird',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 5,
    text: 'Meu passarinho recebeu um tratamento especializado que não encontrei em outras clínicas. Os veterinários da PetCare são verdadeiros especialistas!'
  },
  {
    name: 'Rafael Mendes',
    petName: 'Bob',
    petType: 'dog',
    image: 'https://randomuser.me/api/portraits/men/55.jpg',
    rating: 5,
    text: 'Ambiente super acolhedor e profissionais capacitados. Meu cachorro Bob sempre é atendido com muito carinho e atenção. A PetCare é sensacional!'
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-vet-cream">
      <div className="vet-container">
        <h2 className="section-title text-center">O Que Nossos Clientes Dizem</h2>
        <p className="section-subtitle text-center">
          A satisfação dos nossos clientes e o bem-estar dos seus pets são nossa prioridade.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md p-6 relative"
            >
              <div className="absolute -top-4 -right-4 bg-vet-blue rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                <Quote className="text-white" size={18} />
              </div>

              <div className="flex items-center gap-3 mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="rounded-full w-14 h-14 object-cover border-2 border-vet-green"
                />
                <div>
                  <h4 className="font-display font-semibold">{testimonial.name}</h4>
                  <div className="flex items-center gap-1">
                    <span className="text-sm text-muted-foreground">e {testimonial.petName}</span>
                    <PetIcon type={testimonial.petType as any} className="text-vet-orange" size={14} />
                  </div>
                </div>
              </div>

              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={16} />
                ))}
              </div>

              <p className="text-muted-foreground">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
