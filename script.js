
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
  
  // Form submission
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
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
      
      // Simulando envio do formulário
      showToast({
        title: "Mensagem enviada",
        description: "Agradecemos seu contato! Responderemos em breve.",
        type: "success",
        duration: 5000
      });
      
      // Limpar formulário
      contactForm.reset();
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
      // Rolar para a seção de contato
      const contactSection = document.getElementById('contato');
      if (contactSection) {
        window.scrollTo({
          top: contactSection.offsetTop - 80,
          behavior: 'smooth'
        });
        
        // Pré-selecionar opção de agendamento no formulário (se o elemento existir)
        const subjectSelect = document.getElementById('subject');
        if (subjectSelect) {
          setTimeout(() => {
            subjectSelect.value = 'consulta';
          }, 800);
        }
      }
      
      showToast({
        title: "Agendar Consulta",
        description: "Preencha o formulário de contato para agendar sua consulta.",
        duration: 5000
      });
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
