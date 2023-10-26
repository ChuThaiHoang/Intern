let nav = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    nav.classList.toggle('active');
    cartItem.classList.remove('active');
    search.classList.remove('active');
}
let cartItem = document.querySelector('.cart-items-container');
document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    nav.classList.remove('active');
    search.classList.remove('active');
}
let search = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    search.classList.toggle('active');
    nav.classList.remove('active');
    cartItem.classList.remove('active');
}
window.onscroll = () =>{
    nav.classList.remove('active');
    cartItem.classList.remove('active');
    search.classList.remove('active');
}