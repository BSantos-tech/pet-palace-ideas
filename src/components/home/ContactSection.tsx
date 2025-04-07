
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contato" className="py-16 md:py-24">
      <div className="vet-container">
        <h2 className="section-title text-center">Entre em Contato</h2>
        <p className="section-subtitle text-center">
          Estamos à disposição para esclarecer suas dúvidas e agendar consultas para o seu pet.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-2xl font-display font-semibold text-vet-blue-dark mb-6">Informações de Contato</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-vet-blue/10 rounded-full p-3">
                  <MapPin className="text-vet-blue" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Endereço</h4>
                  <p className="text-muted-foreground">
                    Av. Paulista, 1000 - Bela Vista
                    <br />São Paulo - SP, 01310-100
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-vet-green/10 rounded-full p-3">
                  <Phone className="text-vet-green" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Telefones</h4>
                  <p className="text-muted-foreground mb-1">Agendamento: (11) 9999-8888</p>
                  <p className="text-muted-foreground">Emergência: (11) 9999-9999</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-vet-orange/10 rounded-full p-3">
                  <Mail className="text-vet-orange" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">E-mail</h4>
                  <p className="text-muted-foreground mb-1">contato@petcare.com.br</p>
                  <p className="text-muted-foreground">atendimento@petcare.com.br</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-vet-blue/10 rounded-full p-3">
                  <Clock className="text-vet-blue" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Horário de Funcionamento</h4>
                  <p className="text-muted-foreground mb-1">Segunda-Sexta: 8h - 20h</p>
                  <p className="text-muted-foreground mb-1">Sábado: 8h - 16h</p>
                  <p className="text-muted-foreground">Domingo: Emergência 24h</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden h-64 shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976701966634!2d-46.65567388440374!3d-23.563200367552036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1649088389050!5m2!1spt-BR!2sbr" 
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                title="Localização da PetCare"
              ></iframe>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-display font-semibold text-vet-blue-dark mb-6">Envie-nos uma Mensagem</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input id="name" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input id="phone" placeholder="Seu telefone" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" placeholder="seu.email@exemplo.com" />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="pet-name">Nome do Pet</Label>
                  <Input id="pet-name" placeholder="Nome do seu pet" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pet-type">Tipo de Pet</Label>
                  <select id="pet-type" className="w-full h-10 px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-vet-blue focus:border-transparent">
                    <option value="">Selecione</option>
                    <option value="dog">Cachorro</option>
                    <option value="cat">Gato</option>
                    <option value="bird">Pássaro</option>
                    <option value="other">Outro</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea 
                  id="message" 
                  placeholder="Como podemos ajudar você e seu pet?" 
                  rows={5} 
                />
              </div>
              
              <Button className="w-full bg-vet-green text-white hover:bg-vet-green-dark">
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
