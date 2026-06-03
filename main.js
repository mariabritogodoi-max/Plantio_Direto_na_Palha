// Aguarda o carregamento do DOM para evitar erros
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const menuLinks = document.querySelectorAll('.nav-menu a');

    // Função para abrir/fechar o menu hambúrguer
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Altera o ícone visual entre hambúrguer (☰) e fechar (X)
        if (navMenu.classList.contains('active')) {
            hamburger.innerHTML = '&times;'; // Ícone de fechar (X)
        } else {
            hamburger.innerHTML = '&#9776;'; // Ícone de hambúrguer (☰)
        }
    });

    // Fecha o menu automaticamente ao clicar em qualquer link (melhora a experiência do usuário)
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.innerHTML = '&#9776;';
        });
    });
});