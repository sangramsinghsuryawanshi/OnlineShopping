function addToCart(productName, price) {
   const cartItems = document.getElementById('cart-items');
   const li = document.createElement('li');
   li.textContent = `${productName} - $${price.toFixed(2)}`;
   cartItems.appendChild(li);
}