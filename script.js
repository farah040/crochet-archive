window.addEventListener('click', (event) => {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if(event.target === modal) {
            modal.style.display = "none";
        }
    })
})

const cards = {
    'chick': ['images/cards/chick.webp', 'images/cards/chick2.webp'],
    'bee': ['images/cards/bee.webp', 'images/cards/bee2.webp'],
    'bonbon': ['images/cards/bonbon.webp', 'images/cards/bonbon2.webp'],
    'cactus': ['images/cards/cactus.webp'],
    'couple-bears': ['images/cards/couple-bears.webp'],
    'hedgehog': ['images/cards/hedgehog.webp', 'images/cards/hedgehog2.webp'],
    'owl': ['images/cards/owl.webp'],
    'sun-earth': ['images/cards/sun-earth.webp'],
}

let images = []
let currentIndex = 0;

const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage')
const prevBtn = document.getElementById('prevBtn')
const nextBtn = document.getElementById('nextBtn')
const closeBtn = document.getElementById('closeBtn')

function showImage(index) {
    if(index < 0) index = images.length - 1; // loop to last image
    if(index >= images.length) index = 0; // loop to first image
    currentIndex = index;
    modalImage.src = images[currentIndex] // update the image src to display
}

function openModal(projectPhotos, startIndex = 0) {
    images = projectPhotos;

    nextBtn.style.display = '';
    prevBtn.style.display = '';

    if(images.length <= 1) {
        nextBtn.style.display = 'none';
        prevBtn.style.display = 'none';
    }

    modal.style.display = 'flex';
    showImage(startIndex);
}

prevBtn.addEventListener('click', () => {
    showImage(currentIndex - 1);
});

nextBtn.addEventListener('click', () => {
    showImage(currentIndex + 1);
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const modalKey = card.getAttribute('data-modal');
        if(modalKey && cards[modalKey]) {
            openModal(cards[modalKey]);
        }
        else {
            console.warn(`No images found for moday key: ${modalKey}`);
        }
    });
});
