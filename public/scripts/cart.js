let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addtocart(productid, productImg, productname, productprice) {
    let existingProduct = cart.find(item => item.id === productid);

    if (existingProduct) {
        existingProduct.quantity += 1;
        alert("product added to cart")
    } else {
        cart.push({
            id: productid,
            img: productImg,
            name: productname,
            price: productprice,
            quantity: 1
        });
        alert("Product added to cart")
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

function renderCart() {
    let cartItemsDiv = document.getElementById('cart-items');


    let total = 0;
    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        const imagePath = item.img ? `/uploads/${item.img}` : '/uploads/default.jpg';
        cartItemsDiv.innerHTML += `
            <div class="cart-item">
            <img src="${imagePath}" alt="${item.name}" width="100" height="80">
               ${item.name} (x${item.quantity}) - ₹${item.price * item.quantity}
                <button onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
    });

    document.getElementById('cart-total').textContent = total;
}
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}
renderCart();


