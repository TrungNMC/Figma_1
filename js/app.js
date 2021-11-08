
$('.customer-items').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow:`<button type='button' class='slick-prev pull-left'><i class="fas fa-arrow-left"></i></button>`,
    nextArrow:`<button type='button' class='slick-next pull-right'><i class="fas fa-arrow-right"></i></button>`,
  });

var openNav = document.querySelector(".open-menu");
var closeNav = document.querySelector(".close-menu");
var navBar = document.querySelector(".nav-links");


openNav.addEventListener("click", ()=> {
    openNav.style.display = "none";
    closeNav.style.display = "block";
    navBar.style.opacity = "1";
    navBar.style.visibility = "visible";
    navBar.style.right = "22px";
})


closeNav.addEventListener("click", ()=> {
    openNav.style.display = "block";
    closeNav.style.display = "none";
    navBar.style.opacity = "0";
    navBar.style.visibility = "hidden";
    navBar.style.right = "-50px";

})