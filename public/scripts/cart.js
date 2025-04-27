function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsDiv = document.getElementById('cart-items');
    const totalDiv = document.getElementById('total-price');

    cartItemsDiv.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;

        cartItemsDiv.innerHTML += `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}">
          <div class="cart-item-info">
            <h3>${item.name}</h3>
            <p>₹${item.price} x ${item.quantity}</p>
          </div>
          <div>Subtotal: ₹${item.price * item.quantity}</div>
        </div>
      `;
    });

    totalDiv.innerText = `Total: ₹${total}`;
}

function checkout() {
    alert('Checkout not implemented yet 😄');
}

window.onload = loadCart;