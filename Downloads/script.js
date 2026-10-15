
const products = [
    { id: 1, name: "Smartphone", category: "Electronics", price: 12999 },
    { id: 2, name: "Laptop", category: "Electronics", price: 35999 },
    { id: 3, name: "T-Shirt", category: "Clothes", price: 499 },
    { id: 4, name: "Jeans", category: "Clothes", price: 899 },
    { id: 5, name: "Watch", category: "Accessories", price: 1299 },
    { id: 6, name: "Headphones", category: "Accessories", price: 799 }
];

// Display Products
function displayProducts(productList) {
    const productGrid = document.getElementById("productGrid");
    productGrid.innerHTML = "";

    productList.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p class="price">₱${product.price.toLocaleString("en-PH")}</p>
            <button type="button" onclick="viewProduct(${product.id})">
                View Product
            </button>
        `;

        productGrid.appendChild(card);
    });

    if (productList.length === 0) {
        productGrid.innerHTML = "<p>No products found.</p>";
    }
}

// Filter Products
function filterProducts(category) {
    if (category === "All") {
        displayProducts(products);
    } else {
        const filtered = products.filter(product =>
            product.category === category
        );
        displayProducts(filtered);
    }
}

// Filter Button Events
document.getElementById("all").addEventListener("click", () => {
    filterProducts("All");
});

document.getElementById("category1").addEventListener("click", () => {
    filterProducts("Electronics");
});

document.getElementById("category2").addEventListener("click", () => {
    filterProducts("Clothes");
});

document.getElementById("category3").addEventListener("click", () => {
    filterProducts("Accessories");
});

// View Product
function viewProduct(id) {
    const product = products.find(item => item.id === id);

    if (product) {
        alert(
            "Product: " + product.name +
            "\nCategory: " + product.category +
            "\nPrice: ₱" + product.price.toLocaleString("en-PH")
        );
    }
}

// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name.length < 3) {
        alert("Error: Name must be at least 3 characters long.");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Error: Please enter an email containing '@' and '.'.");
        return;
    }

    if (message.length < 10) {
        alert("Error: Message must be at least 10 characters long.");
        return;
    }

    alert("Success! Your message has been submitted.");
    this.reset();
});

// Display All Products on Page Load
displayProducts(products);
