// localStorage'dan bilgileri çek ve ilgili alanlara yerleştir
window.addEventListener("DOMContentLoaded", () => {
    const address = localStorage.getItem("address") || "Kocaeli Üniversitesi, Umuttepe Kampüsü";
    const phone = localStorage.getItem("phone") || "+90 555 555 5555";
    const email = localStorage.getItem("email") || "info@example.com";

    // HTML alanlarına bilgileri yerleştir
    document.querySelectorAll(".bi-geo-alt + .text-start span").forEach(span => {
        span.textContent = address;
    });

    document.querySelectorAll(".bi-geo-alt + span").forEach(span => {
        span.textContent = address;
    });

    document.querySelectorAll(".bi-envelope-open + .text-start span").forEach(span => {
        span.textContent = email;
    });

    document.querySelectorAll(".bi-envelope-open + span").forEach(span => {
        span.textContent = email;
    });

    document.querySelectorAll(".bi-phone-vibrate + .text-start span").forEach(span => {
        span.textContent = phone;
    });

    document.querySelectorAll(".bi-phone-vibrate + span").forEach(span => {
        span.textContent = phone;
    });
});
