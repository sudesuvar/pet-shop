window.addEventListener("DOMContentLoaded", () => {
    // Misyon ve vizyon bilgilerini localStorage'dan al
    const savedMisyon = localStorage.getItem('saved-mission') || 'Misyon bilgisi bulunamadı.';
    const savedVizyon = localStorage.getItem('saved-vision') || 'Vizyon bilgisi bulunamadı.';

    // Fotoğrafı localStorage'dan al
    const savedPhoto = localStorage.getItem('saved-photo');

    // 'Our Mission' ve 'Our Vision' metinlerini göstermek için querySelector kullanarak öğeleri seç
    const misyonElement = document.querySelector('#saved-misyon');
    const vizyonElement = document.querySelector('#saved-vizyon');

    // Misyon ve vizyon bilgilerini ilgili alanlarda göster
    if (misyonElement) {
        misyonElement.textContent = savedMisyon;
    }
    if (vizyonElement) {
        vizyonElement.textContent = savedVizyon;
    }

    // Fotoğrafı göstermek için öğeyi seç
    const photoElement = document.querySelector('#about-photo');

    // Eğer fotoğraf varsa, src özelliğini güncelle
    if (savedPhoto && photoElement) {
        photoElement.src = savedPhoto;
    }
});