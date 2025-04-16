
document.addEventListener('DOMContentLoaded', () => {
  // Mostrar toast de boas-vindas
  showToast({
    title: "Bem-vindo à Animal's Life",
    description: "Navegue pelo nosso site e conheça nossos serviços veterinários.",
    duration: 5000
  });
  
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navbarMenu = document.querySelector('.navbar-menu');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navbarMenu.classList.toggle('active');
    });
  }
  
  // Implementação do slider de imagens para gato/cavalo na seção Hero
  const heroImages = [
    {
      src: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
      alt: "Gato cinzento"
    },
    {
      src: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2",
      alt: "Cavalos marrons"
    }
  ];
  
  let currentHeroImageIndex = 0;
  const heroImage = document.querySelector('.main-image');
  
  function changeHeroImage() {
    const nextIndex = (currentHeroImageIndex + 1) % heroImages.length;
    
    // Fade out
    heroImage.style.opacity = '0';
    
    setTimeout(() => {
      // Mudar a imagem
      heroImage.src = heroImages[nextIndex].src;
      heroImage.alt = heroImages[nextIndex].alt;
      
      // Fade in
      heroImage.style.opacity = '1';
      
      currentHeroImageIndex = nextIndex;
    }, 1000);
  }
  
  // Mudar a imagem a cada 5 segundos
  setInterval(changeHeroImage, 5000);
  
  // Implementação do slider de imagens para cachorro na seção Sobre
  const petImages = [
    {
      src: "https://images.unsplash.com/photo-1534361960057-19889db9621e",
      alt: "Equipe da Animal's Life"
    },
    {
      src: "https://images.unsplash.com/photo-1415369629372-26f2fe60c467",
      alt: "Cachorro fofo"
    },
    {
      src: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca",
      alt: "Gato relaxando"
    },
    {
      src: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca",
      alt: "Coelho branco"
    }
  ];
  
  // Inicializar imagens na seção Sobre
  const aboutImageContainer = document.querySelector('.about-image');
  if (aboutImageContainer) {
    const mainImg = aboutImageContainer.querySelector('img');
    
    // Criar elementos de imagem para todas as imagens
    petImages.forEach((image, index) => {
      const img = document.createElement('img');
      img.src = image.src;
      img.alt = image.alt;
      img.classList.add(index === 0 ? 'visible' : 'hidden');
      
      // Substituir a primeira imagem e adicionar as outras
      if (index === 0) {
        mainImg.src = image.src;
        mainImg.alt = image.alt;
        mainImg.classList.add('visible');
      } else {
        aboutImageContainer.appendChild(img);
      }
    });
  }
  
  let currentAboutImageIndex = 0;
  const aboutImages = document.querySelectorAll('.about-image img');
  
  function changeAboutImage() {
    // Esconder imagem atual
    aboutImages[currentAboutImageIndex].classList.remove('visible');
    aboutImages[currentAboutImageIndex].classList.add('hidden');
    
    // Calcular próxima imagem
    currentAboutImageIndex = (currentAboutImageIndex + 1) % aboutImages.length;
    
    // Mostrar próxima imagem
    aboutImages[currentAboutImageIndex].classList.remove('hidden');
    aboutImages[currentAboutImageIndex].classList.add('visible');
  }
  
  // Mudar a imagem a cada 4 segundos
  setInterval(changeAboutImage, 4000);
  
  // Form submission para o Contact Form
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      const terms = document.getElementById('terms').checked;
      
      if (!name || !email || !phone || !subject || !message || !terms) {
        showToast({
          title: "Erro no formulário",
          description: "Por favor, preencha todos os campos obrigatórios.",
          type: "error",
          duration: 5000
        });
        return;
      }
      
      // Preparar dados para envio
      const formData = {
        name: name,
        email: email,
        phone: phone,
        subject: subject,
        message: message,
        date: new Date().toISOString()
      };
      
      try {
        // Enviar dados para o SheetMonkey
        const response = await fetch('https://api.sheetmonkey.io/form/28hS9T5Dxs14dpCnCBGNLn', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        });
        
        if (response.ok) {
          showToast({
            title: "Mensagem enviada",
            description: "Agradecemos seu contato! Responderemos em breve.",
            type: "success",
            duration: 5000
          });
          
          // Limpar formulário
          contactForm.reset();
        } else {
          throw new Error('Falha ao enviar o formulário');
        }
      } catch (error) {
        console.error('Erro ao enviar formulário:', error);
        showToast({
          title: "Erro ao enviar",
          description: "Houve um problema ao enviar sua mensagem. Tente novamente mais tarde.",
          type: "error",
          duration: 5000
        });
      }
    });
  }
  
  // Modal de Agendamento de Consulta
  const appointmentModal = document.createElement('div');
  appointmentModal.className = 'modal-overlay';
  appointmentModal.innerHTML = `
    <div class="modal">
      <button class="modal-close">&times;</button>
      <div class="modal-header">
        <h3>Agendar Consulta</h3>
        <p>Preencha o formulário abaixo para agendar uma consulta</p>
      </div>
      <div class="modal-body">
        <form id="appointmentForm" class="appointment-form">
          <div class="form-group">
            <label for="ap-name">Nome completo</label>
            <input type="text" id="ap-name" name="name" required placeholder="Digite seu nome completo">
          </div>
          
          <div class="form-group">
            <label for="ap-phone">Telefone</label>
            <input type="tel" id="ap-phone" name="phone" required placeholder="(00) 00000-0000">
          </div>
          
          <div class="form-group">
            <label for="ap-email">Email</label>
            <input type="email" id="ap-email" name="email" required placeholder="seu.email@exemplo.com">
          </div>
          
          <div class="form-group">
            <label for="ap-date">Data da consulta</label>
            <input type="date" id="ap-date" name="date" required min="${new Date().toISOString().split('T')[0]}">
          </div>
          
          <div class="form-group">
            <label for="ap-time">Horário</label>
            <select id="ap-time" name="time" required>
              <option value="" disabled selected>Selecione um horário</option>
              <option value="08:00">08:00</option>
              <option value="09:00">09:00</option>
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
              <option value="17:00">17:00</option>
            </select>
          </div>
          
          <div class="form-group">
            <label for="ap-pet-name">Nome do pet</label>
            <input type="text" id="ap-pet-name" name="pet_name" required placeholder="Nome do seu pet">
          </div>
          
          <div class="form-group">
            <label for="ap-pet-type">Tipo do pet</label>
            <select id="ap-pet-type" name="pet_type" required>
              <option value="" disabled selected>Selecione</option>
              <option value="Cachorro">Cachorro</option>
              <option value="Gato">Gato</option>
              <option value="Pássaro">Pássaro</option>
              <option value="Roedor">Roedor</option>
              <option value="Réptil">Réptil</option>
              <option value="Outro">Outro</option>
            </select>
          </div>
          
          <div class="form-group full-width">
            <label for="ap-notes">Observações</label>
            <textarea id="ap-notes" name="notes" rows="3" placeholder="Descreva os sintomas ou o motivo da consulta"></textarea>
          </div>
          
          <div class="form-group check-group full-width">
            <input type="checkbox" id="ap-terms" name="terms" required>
            <label for="ap-terms">Concordo com os termos de privacidade</label>
          </div>
          
          <button type="submit" class="btn btn-primary full-width">Agendar Consulta</button>
        </form>
      </div>
    </div>
  `;
  
  document.body.appendChild(appointmentModal);
  
  // Manipulação do modal
  const modalOverlay = document.querySelector('.modal-overlay');
  const modalClose = document.querySelector('.modal-close');
  
  modalClose.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
  });
  
  window.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove('active');
    }
  });
  
  // Cadastro de consultas
  const appointmentForm = document.getElementById('appointmentForm');
  
  if (appointmentForm) {
    appointmentForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      // Obter valores do formulário
      const name = document.getElementById('ap-name').value;
      const phone = document.getElementById('ap-phone').value;
      const email = document.getElementById('ap-email').value;
      const date = document.getElementById('ap-date').value;
      const time = document.getElementById('ap-time').value;
      const petName = document.getElementById('ap-pet-name').value;
      const petType = document.getElementById('ap-pet-type').value;
      const notes = document.getElementById('ap-notes').value;
      const terms = document.getElementById('ap-terms').checked;
      
      if (!name || !phone || !email || !date || !time || !petName || !petType || !terms) {
        showToast({
          title: "Erro no formulário",
          description: "Por favor, preencha todos os campos obrigatórios.",
          type: "error",
          duration: 5000
        });
        return;
      }
      
      // Preparar dados para envio
      const formData = {
        name: name,
        phone: phone,
        email: email,
        appointment_date: date,
        appointment_time: time,
        pet_name: petName,
        pet_type: petType,
        notes: notes,
        submission_date: new Date().toISOString(),
        form_type: "appointment"
      };
      
      try {
        // Enviar dados para o SheetMonkey
        const response = await fetch('https://api.sheetmonkey.io/form/28hS9T5Dxs14dpCnCBGNLn', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        });
        
        if (response.ok) {
          showToast({
            title: "Consulta agendada",
            description: "Sua consulta foi agendada com sucesso! Entraremos em contato para confirmar.",
            type: "success",
            duration: 5000
          });
          
          // Limpar formulário e fechar modal
          appointmentForm.reset();
          modalOverlay.classList.remove('active');
        } else {
          throw new Error('Falha ao agendar consulta');
        }
      } catch (error) {
        console.error('Erro ao agendar consulta:', error);
        showToast({
          title: "Erro ao agendar",
          description: "Houve um problema ao agendar sua consulta. Tente novamente mais tarde.",
          type: "error",
          duration: 5000
        });
      }
    });
  }
  
  // Links de navegação suave
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href !== "#") {
        e.preventDefault();
        
        const targetElement = document.querySelector(href);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    });
  });
});

// Funções auxiliares para manipular toasts
function showToast({ title, description, type = 'info', duration = 5000 }) {
  const toastContainer = document.getElementById('toast-container');
  
  // Criar elemento toast
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  // Conteúdo do toast
  toast.innerHTML = `
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      <div class="toast-description">${description}</div>
    </div>
    <button class="toast-close">&times;</button>
  `;
  
  // Adicionar ao container
  toastContainer.appendChild(toast);
  
  // Configurar botão de fechar
  const closeButton = toast.querySelector('.toast-close');
  closeButton.addEventListener('click', () => {
    removeToast(toast);
  });
  
  // Remover automaticamente após duração
  setTimeout(() => {
    removeToast(toast);
  }, duration);
}

function removeToast(toast) {
  toast.style.animation = 'toast-out 0.3s forwards';
  
  setTimeout(() => {
    toast.remove();
  }, 300);
}

// Funções para manipular ações
function handleAction(type, value) {
  switch (type) {
    case 'phone':
      window.location.href = `tel:${value || '1199999999'}`;
      break;
      
    case 'email':
      window.location.href = `mailto:${value || 'contato@animalslife.com.br'}`;
      break;
      
    case 'schedule':
      // Abrir modal de agendamento
      document.querySelector('.modal-overlay').classList.add('active');
      break;
      
    case 'emergency':
      window.location.href = `tel:1199999999`;
      showToast({
        title: "Emergência 24h",
        description: "Ligando para o número de emergência...",
        duration: 3000
      });
      break;
      
    case 'map':
      window.open('https://www.google.com/maps/place/Senac+Araçatuba', '_blank');
      break;
      
    default:
      break;
  }
}
