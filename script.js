// Menu Hamburguer (para dispositivos móveis)
const menuToggle = document.querySelector('#menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Scroll suave para os links de navegação
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1); // Pegando o ID do alvo
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 50, // Ajuste de deslocamento
            behavior: 'smooth'
        });
    });
});

// Validação do formulário de inscrição na newsletter
const form = document.querySelector('.newsletter form');
form.addEventListener('submit', (e) => {
    const emailInput = form.querySelector('input[type="email"]');
    const email = emailInput.value;
    
    if (!isValidEmail(email)) {
        alert('Por favor, insira um e-mail válido.');
        e.preventDefault();
    }
});

function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

// Efeito de fade-in para as imagens enquanto rola a página
const images = document.querySelectorAll('img');

function checkVisibility() {
    images.forEach(img => {
        const rect = img.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            img.classList.add('visible');
        }
    });
}

// Adicionar evento de scroll para ativar o efeito de fade-in
window.addEventListener('scroll', checkVisibility);

// Verificar visibilidade das imagens ao carregar a página
window.addEventListener('load', checkVisibility);
