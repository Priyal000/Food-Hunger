function addToCart(dishName, price) {

  let cart = JSON.parse(localStorage.getItem('cart'));
  // console.log(cart, dishName, price);
  if (!cart) {
    cart = [];
  }

  cart.push({
    name: dishName,
    price: price
  });
  // console.log(cart);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert("Item has been added to Your cart!! Go Down to Checkout");
  displayCartItems();
}

displayCartItems();
function displayCartItems() {
  let cart = JSON.parse(localStorage.getItem('cart'));
  let cartContainer = document.getElementById('cart');

  let cartItems = '';

  if (cart) {
    cart.forEach(item => {
      cartItems += '<div class="cart-item"><h4>Name :' + item.name + '</h4><p>Price :' + item.price + '</p><button id ="dltBtn" onclick="deleteItems(this.name)">Delete Item</button></div>'
    });
    console.log(this.name);
  }
  cartContainer.innerHTML = cartItems;
}

function deleteItems(name, index) {
  let cart = JSON.parse(localStorage.getItem('cart'));
  // console.log(cart, dishName, price);
  if (!cart) {
    cart = [];
  }

  // cart.push({
  //   name: dishName,
  //   price: price
  // });
  cart.splice(index, 1);
  // console.log(cart)
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCartItems();
}

// navBar Display Function

function showNav() {
  let a = document.getElementById('navigate');
  //  console.log(a)
  a.innerHTML = ` <ul>
 <li class='navs'><a class='navs' href="index.html">Home</a></li>
 <li class='navs'><a class='navs' href="about.html">About Us</a></li>
 <li class='navs'><a class='navs' href="contact.html">Contact Us</a></li>
</ul>`
  document.getElementById('navigate').style.display = "block"
  document.getElementById('show').style.display = "none"
  document.getElementById('hide').style.display = "block"

}

function hideNav() {
  document.getElementById('navigate').style.display = "none"

  document.getElementById('show').style.display = "block"
  document.getElementById('hide').style.display = "none"
}