// Fotoğraf Yükleme ve Önizleme
document.getElementById('photo-upload').addEventListener('change', function (event) {
    var file = event.target.files[0];
    var reader = new FileReader();

    reader.onload = function (e) {
        var imagePreview = document.getElementById('preview-image');
        imagePreview.style.display = 'block';
        imagePreview.src = e.target.result;
    }

    if (file) {
        reader.readAsDataURL(file);
    }
});

// Kaydet butonuna tıklanınca çalışacak fonksiyon
document.getElementById('save-button').addEventListener('click', function () {
    // Misyon ve vizyon bilgilerini al
    const misyon = document.getElementById('misyon-textarea').value;
    const vizyon = document.getElementById('vizyon-textarea').value;

    // Fotoğraf bilgisini al (eğer fotoğraf yüklendiyse)
    const photoInput = document.getElementById('photo-upload');
    const previewImage = document.getElementById('preview-image');
    let photoURL = null;

    if (photoInput.files && photoInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            photoURL = e.target.result;

            // Fotoğrafı localStorage'a kaydet
            localStorage.setItem('saved-photo', photoURL);

            // Fotoğrafı kartta göster
            document.getElementById('saved-photo').src = photoURL;
            document.getElementById('saved-photo').style.display = 'block'; // Fotoğrafı göster
        };
        reader.readAsDataURL(photoInput.files[0]);
    }

    // Misyon ve vizyonu localStorage'a kaydet
    localStorage.setItem('saved-mission', misyon);
    localStorage.setItem('saved-vision', vizyon);

    // Verileri Kaydet ve Kartta Göster
    document.getElementById('saved-misyon').textContent = "Misyon: " + misyon;
    document.getElementById('saved-vizyon').textContent = "Vizyon: " + vizyon;

    // Başarı mesajı veya başka bir işlem
    alert('Misyon, vizyon ve fotoğraf kaydedildi!');
});
