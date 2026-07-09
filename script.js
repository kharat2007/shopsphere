const menu=document.querySelector(".menu-btn");
const nav=document.querySelector(".nav-links");

menu.onclick=()=>{
nav.classList.toggle("active");
}
// Live Search

const search=document.getElementById("searchInput");

search.addEventListener("keyup",()=>{

const value=search.value.toLowerCase();

document.querySelectorAll(".product-card").forEach(card=>{

card.style.display=card.innerText.toLowerCase().includes(value)
?"block":"none";

});

});

// Category Filter

const filterBtns=document.querySelectorAll(".filter-btn");

filterBtns.forEach(btn=>{

btn.onclick=()=>{

filterBtns.forEach(b=>b.classList.remove("active"));

btn.classList.add("active");

const category=btn.dataset.category;

document.querySelectorAll(".product-card").forEach(card=>{

card.style.display=(category==="all"||card.classList.contains(category))
?"block":"none";

});

};

});
// Cart Counter

let cart=0;

document.querySelectorAll(".cart-btn").forEach(button=>{

button.onclick=()=>{

cart++;

document.getElementById("cartCount").innerHTML="🛒 "+cart;

button.innerHTML="✅ Added";

setTimeout(()=>{

button.innerHTML="Add to Cart";

},1000);

};

});

// Wishlist

document.querySelectorAll(".wishlist").forEach(button=>{

button.onclick=()=>{

button.classList.toggle("active");

button.innerHTML=
button.classList.contains("active")
?"❤️":"🤍";

};

});
document
.getElementById("newsletterForm")
.addEventListener("submit",function(e){

e.preventDefault();

document.getElementById("newsletterMsg").innerHTML=
"✅ Successfully Subscribed!";

this.reset();

});
const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

topBtn.style.display=window.scrollY>300?"block":"none";

});

topBtn.onclick=()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

};