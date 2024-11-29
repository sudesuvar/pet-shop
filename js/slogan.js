window.onload = function () {
    // Retrieve saved data from localStorage
    const slogan = localStorage.getItem("slogan");
    const youtubeUrl = localStorage.getItem("youtube_url");
    const image = localStorage.getItem("image_slogan");

    // Display the slogan if it exists
    if (slogan) {
        document.querySelector("#hero-slogan").textContent = slogan;
    }

    // Display the YouTube URL if it exists
    if (youtubeUrl) {
        document.querySelector("#hero-youtube-url").textContent = youtubeUrl;
    }

    // Display the image if it exists
    if (image) {
        document.querySelector("#hero-image").src = "path/to/images/" + image; // Adjust path to where images are stored
        document.querySelector("#hero-image-name").textContent = image;
    }
}