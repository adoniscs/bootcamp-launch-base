const modalOverlay = document.querySelector('.modal__overlay');
const receitas = document.querySelectorAll('.receita');

for(let receita of receitas) {
    receita.addEventListener('click', () => {
        modalOverlay.classList.add('active');
        const imagem = receita.querySelector('img').src;
        modalOverlay.querySelector('h2').innerHTML = receita.querySelector('h3').textContent;
        modalOverlay.querySelector('p').innerHTML = receita.querySelector('p').textContent;
        modalOverlay.querySelector('img').src = imagem;
    });
}

document.querySelector('.modal__close').addEventListener('click', () => {
    modalOverlay.classList.remove('active');
});