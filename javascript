const products = [
{
id:1,
name:"Laptop",
price:45000,
image:"https://via.placeholder.com/250"
},
{
id:2,
name:"Smartphone",
price:15000,
image:"https://via.placeholder.com/250"
},
{
id:3,
name:"Headphones",
price:2000,
image:"https://via.placeholder.com/250"
},
{
id:4,
name:"Smart Watch",
price:5000,
image:"https://via.placeholder.com/250"
}
];

let cart = [];

const productList = document.getElementById("product-list");

products.forEach(product => {
productList.innerHTML += `
<div class="product">
<img src="${product.image}">
<h3>${product.name}</h3>
<p>₹${product.price}</p>
<button onclick="addToCart(${product.id})">
Add to Cart
</button>
</div>
`;
});

function addToCart(id){

const item = products.find(product => product.id === id);

cart.push(item);

updateCart();
}

function updateCart(){

const cartItems = document.getElementById("cart-items");

cartItems.innerHTML = "";

let total = 0;

cart.forEach((item,index)=>{

total += item.price;

cartItems.innerHTML += `
<li>
${item.name} - ₹${item.price}
<button onclick="removeItem(${index})">
Remove
</button>
</li>
`;
});

document.getElementById("cart-count").innerText = cart.length;
document.getElementById("total").innerText = total;
}

function removeItem(index){

cart.splice(index,1);

updateCart();
}

function checkout(){

if(cart.length===0){
alert("Cart is Empty");
return;
}

alert("Order Placed Successfully!");

cart = [];

updateCart();
}
