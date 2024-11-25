
// Ensure this block is not repeated
let selectedImage = null;

function uploadImage(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            selectedImage = e.target.result; // Base64 image data
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function addProduct() {
    const productName = document.getElementById("productName").value;
    const productPrice = document.getElementById("productPrice").value;

    if (!productName || !productPrice || !selectedImage) {
        alert("Please fill in all fields!");
        return;
    }

    const productId = `product-${Date.now()}`;

    const productCard = document.createElement("div");
    productCard.className = "uk-card uk-card-default uk-card-body uk-margin-right";
    productCard.style.width = "200px";
    productCard.id = productId;

    productCard.innerHTML = `
        <img src="${selectedImage}" alt="${productName}" style="width: 100%; height: 120px; object-fit: cover;">
        <h5>${productName}</h5>
        <p>Price: $${productPrice}</p>
        <button class="uk-button uk-button-danger uk-button-small" onclick="deleteProduct('${productId}')">Delete</button>
    `;

    document.getElementById("productList").appendChild(productCard);

    document.getElementById("productForm").reset();
    selectedImage = null; // Reset after adding
}

function deleteProduct(productId) {
    const productCard = document.getElementById(productId);
    if (productCard) {
        productCard.remove();
    }
}
