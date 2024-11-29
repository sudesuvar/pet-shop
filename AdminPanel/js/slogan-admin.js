document.querySelector("button[type='submit']").addEventListener("click", function (e) {
    e.preventDefault(); // Formun varsayılan gönderimini engelle

    // Form verilerini al
    const slogan = document.getElementById("slogan").value;
    const youtubeUrl = document.getElementById("youtube_url").value;
    const image = document.getElementById("image_upload").files[0] ? document.getElementById("image_upload").files[0].name : null;

    // localStorage'a verileri kaydet
    localStorage.setItem("slogan", slogan);
    localStorage.setItem("youtube_url", youtubeUrl);
    localStorage.setItem("image_slogan", image);

    // Kullanıcıya bildirim ver
    alert("Veriler başarıyla kaydedildi!");
});
