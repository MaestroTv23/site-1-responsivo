document.addEventListener("DOMContentLoaded", function () {
    // Variáveis para controlar o estado dos slides
    let currentSlide = 0; 
    const totalSlides = document.querySelectorAll('.slide img').length; // Total de slides
    const intervalTime = 5000; // Tempo de 5 segundos
    let intervalId; // Identificador para o intervalo de transição automática

    // Função para avançar para o próximo slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides; // Avança para o próximo slide (loop)
        updateSlider(); // Atualiza a exibição dos slides
    }

    // Função para atualizar a exibição dos slides
    function updateSlider() {
        const slides = document.querySelector('.slide');
        const newTransformValue = `translateX(-${currentSlide * 100}%)`; // Calcula a transformação para o slide atual
        slides.style.transform = newTransformValue; // Aplica a transformação

        // Atualiza a classe 'active' nos links de navegação
        const navLinks = document.querySelectorAll('.slider-nav a');
        navLinks.forEach((link, index) => {
            link.classList.toggle('active', index === currentSlide); // Adiciona ou remove a classe 'active' conforme o slide atual
        });
    }

    // Função para iniciar a transição automática
    function startAutoSlide() {
        intervalId = setInterval(nextSlide, intervalTime); // Configura o intervalo para chamar nextSlide a cada intervalTime milissegundos
    }

    // Função para interromper a transição automática
    function stopAutoSlide() {
        clearInterval(intervalId); // Limpa o intervalo, interrompendo a transição automática
    }

    // Configura a transição automática ao carregar a página
    startAutoSlide();

    // Adiciona a capacidade de clicar manualmente nos links de navegação
    const navLinks = document.querySelectorAll('.slider-nav a');
    navLinks.forEach((link, index) => {
        link.addEventListener('click', function () {
            currentSlide = index; // Atualiza o slide atual com o índice do link clicado
            updateSlider(); // Atualiza a exibição dos slides
            stopAutoSlide(); // Interrompe a transição automática
            startAutoSlide(); // Reinicia a transição automática
        });
    });
});

