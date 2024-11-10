// Sample product data (replace with your actual product data)
const products = [
  {
    image: "images/product-1.jpg",
    title: "Abstract Art Print 1",
    price: 29.99,
    category: "abstract",
    popularity: 4,
    newest: false
  },
  {
    image: "images/product-2.jpg",
    title: "Landscape Art Print 1",
    price: 39.99,
    category: "landscape",
    popularity: 5,
    newest: true
  },
  // ... more product objects
];

// Get references to the filter and sort elements
const categoryFilter = document.getElementById("category");
const sortByFilter = document.getElementById("sort-by");
const productGrid = document.querySelector(".product-grid");

// Function to display products in the grid
function displayProducts(productsToDisplay) {
  productGrid.innerHTML = ""; // Clear the grid

  productsToDisplay.forEach(product => {
    const productElement = `
      <div class="product">
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>Price: $${product.price.toFixed(2)}</p>
        <button class="add-to-cart">Add to Cart</button>
      </div>
    `;
    productGrid.innerHTML += productElement;
  });
}

// Function to filter and sort products
function filterAndSortProducts() {
  const selectedCategory = categoryFilter.value;
  const selectedSortBy = sortByFilter.value;

  let filteredProducts = products;

  // Filter by category
  if (selectedCategory !== "all") {
    filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
  }

  // Sort products
  switch (selectedSortBy) {
    case "popularity":
      filteredProducts.sort((a, b) => b.popularity - a.popularity);
      break;
    case "price-low-to-high":
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case "price-high-to-low":
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case "newest":
      filteredProducts.sort((a, b) => b.newest - a.newest);
      break;
  }

  displayProducts(filteredProducts);
}

// Event listeners for filter and sort changes
categoryFilter.addEventListener("change", filterAndSortProducts);
sortByFilter.addEventListener("change", filterAndSortProducts);

// Initial display of products
displayProducts(products);
