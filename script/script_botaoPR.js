/*// Seleciona o botão e o card
const toggleCardButton = document.getElementById('toggleCardButton');
const card = document.getElementById('card');

// Adiciona um evento de clique ao botão
toggleCardButton.addEventListener('click', function () {
    card.classList.toggle('hidden'); // Alterna a visibilidade do card
});
*/

/*// Seleciona o botão e o card
const toggleCardButton = document.getElementById('toggleCardButton');
const card = document.getElementById('card');

// Adiciona um evento de clique ao botão
toggleCardButton.addEventListener('click', function () {
    // Alterna entre as classes "hidden" e "visible" para o card
    if (card.classList.contains('hidden')) {
        card.classList.remove('hidden');
        card.classList.add('visible');
    } else {
        card.classList.remove('visible');
        card.classList.add('hidden');
    }
});
*/

// Seleciona o botão e o card
const toggleCardButton = document.getElementById('toggleCardButton');
const card = document.getElementById('card');

// Função para alternar a visibilidade do card
function toggleCard() {
    if (card.classList.contains('hidden')) {
        card.classList.remove('hidden');
        card.classList.add('visible');
    } else {
        card.classList.remove('visible');
        card.classList.add('hidden');
    }
}

// Mostra o card ao clicar no botão
toggleCardButton.addEventListener('click', function (event) {
    event.stopPropagation(); // Impede que o clique no botão feche o card
    toggleCard();
});

// Esconde o card ao clicar em qualquer outro lugar da página
document.addEventListener('click', function (event) {
    if (!card.classList.contains('hidden')) {
        card.classList.remove('visible');
        card.classList.add('hidden');
    }
});

// Impede que cliques no card fechem ele
card.addEventListener('click', function (event) {
    event.stopPropagation();
});

