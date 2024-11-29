// İletişim Bilgilerini Kaydet
document.querySelector("button[type='submit']").addEventListener("click", function (e) {
    e.preventDefault(); // Formun varsayılan gönderimini engelle
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;

    // localStorage'a bilgileri kaydet
    localStorage.setItem("address", address);
    localStorage.setItem("phone", phone);
    localStorage.setItem("email", email);

    alert("İletişim bilgileri başarıyla kaydedildi!");
});
