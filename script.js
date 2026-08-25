const PRODUCTS = [
  { id: 1, name: "Cotton T-Shirt", emoji: "👕", price: 18 },
  { id: 2, name: "Canvas Bag", emoji: "👜", price: 22 },
  { id: 3, name: "Ceramic Mug", emoji: "☕", price: 12 },
  { id: 4, name: "Notebook", emoji: "📓", price: 8 },
];

const grid = document.getElementById("productGrid");

grid.innerHTML = PRODUCTS.map(p => `
  <div class="product-card">
    <div class="product-thumb">${p.emoji}</div>
    <p class="product-name">${p.name}</p>
    <p class="product-price">$${p.price.toFixed(2)}</p>
    <button class="btn add-btn" data-id="${p.id}">Add to Cart</button>
  </div>
`).join("");

let cartCount = 0;
const cartLink = document.querySelector(".cart-link");

grid.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-btn")) {
    cartCount++;
    cartLink.textContent = `Cart (${cartCount})`;
  }
});
