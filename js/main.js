const modalWindow = document.querySelector('.modal');
const buttonsModal = document.querySelectorAll('.btn_play');

buttonsModal.forEach((item, i) => {
    item.addEventListener('click', () => {
        modalWindow.classList.add('active');
    });
});

modalWindow.addEventListener('click', () => {
    modalWindow.classList.remove('active');
});