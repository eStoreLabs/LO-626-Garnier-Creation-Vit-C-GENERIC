(() => {
  const hideButton = document.querySelector('#es-rc .es-ingr__menu');
  const hideText = document.querySelector('#es-rc .es-ingr__hide');

  const toggleCollapse = () => {
    const ingrDiv = document.querySelector('#es-rc .es-ingr');
    const upArrow = document.querySelector('#es-rc .es-ingr__up');

    ingrDiv.classList.toggle('es-ingr--collapsed');

    if (ingrDiv.classList.contains('es-ingr--collapsed')) {
      hideText.textContent = 'ROZWIŃ';
      upArrow.style.transform = 'rotate(180deg)'; // Strzałka skierowana w górę
    } else {
      hideText.textContent = 'ZWIŃ';
      upArrow.style.transform = 'rotate(0deg)'; // Strzałka skierowana w górę
    }
  };

  if (hideButton) {
    hideButton.addEventListener('click', toggleCollapse); // Nasłuchiwanie kliknięcia
  }

  const swiper = new Swiper('#es-rc .es-swiper', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 30,
    autoHeight: false,
    pagination: {
      el: '#es-rc .es-swiper-pagination',
    },
    navigation: {
      nextEl: '#es-rc .es-swiper-button-next',
      prevEl: '#es-rc .es-swiper-button-prev',
    },
  });
})();
