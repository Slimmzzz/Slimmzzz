let popup = document.querySelector('.popup');
let overlay = document.querySelector('.overlay');
let closeButton = document.querySelector('.close-btn');
let englishSertificate = document.querySelector('.english');
let rsSchoolSertificate = document.querySelector('.rsschool');

englishSertificate.addEventListener('click', () => {
    overlay.style.display = 'block';
    popup.style.display = 'block';
    let englishClone = englishSertificate.cloneNode(true);
    popup.prepend(englishClone);
});

rsSchoolSertificate.addEventListener('click', () => {
    overlay.style.display = 'block';
    popup.style.display = 'block';
    let rsClone = rsSchoolSertificate.cloneNode(true);
    popup.prepend(rsClone);
});

closeButton.addEventListener('click', () => {
    overlay.style.display = 'none';
    popup.style.display = 'none';
    popup.removeChild(popup.children[0]);
});

overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    popup.style.display = 'none';
    popup.removeChild(popup.children[0]);
})
