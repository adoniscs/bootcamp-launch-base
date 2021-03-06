const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');
const modal = document.querySelector('.modal');

for(let card of cards) {
    card.addEventListener('click', () => {
        const blogId = card.getAttribute('id');
        modalOverlay.classList.add('active');
        modalOverlay.querySelector('iframe').src = `https://blog.rocketseat.com.br/${blogId}`
    });
};

// Funcao que fecha a modal
document.querySelector('.close-modal').addEventListener('click', () => {
    modalOverlay.classList.remove('active');
});

// Adicionando classe que maximiza o modal
if (!modal.classList.contains("maximize")){
    document.querySelector(".maximize-modal").addEventListener("click", () => {
        modal.classList.add('maximize');
    })
}  modal.classList.remove("maximize")
  