const menuicon=document.querySelector('#menu');
const navlink=document.querySelector('.nav-link');
menuicon.onclick = () => {
    navlink.classList.toggle('active');
}