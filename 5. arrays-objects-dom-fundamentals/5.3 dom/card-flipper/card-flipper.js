let card = document.querySelector('#my-card');

card.style.backgroundColor = 'rgba(114, 189, 255, 0.6)';

// Add click event listener to toggle the flip
card.addEventListener('click', function () {
    card.classList.toggle('flipped');
});

console.log(card.classList);