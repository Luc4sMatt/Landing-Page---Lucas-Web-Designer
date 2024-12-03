
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: true,
    fade: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });

  document.querySelectorAll('.btn-stiles').forEach(button => {
    button.addEventListener('click', () => {
        const cardContent = button.parentElement; // Seleciona o card-content pai do botão
        const description = cardContent.querySelector('.description'); // Seleciona a descrição

        if (description.classList.contains('expandida')) {
            // Recolhe o conteúdo
            description.classList.remove('expandida');
            cardContent.classList.remove('expandido');
            button.textContent = 'Ler mais'; // Atualiza o texto do botão
        } else {
            // Expande o conteúdo
            description.classList.add('expandida');
            cardContent.classList.add('expandido');
            button.textContent = 'Ler menos'; // Atualiza o texto do botão
        }
    });
});

