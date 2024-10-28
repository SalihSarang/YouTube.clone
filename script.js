$('.chip-container').slick({
    slidesToShow: 15,
    slidesToScroll: 2,
    arrows:true,
    variableWidth:true,
    prevArrow:`<div> <svg  style="height: 35px; flex-shrink: 0;" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path d="M14.96 18.96 8 12l6.96-6.96.71.71L9.41 12l6.25 6.25-.7.71z"></path></svg> </div>`,
    nextArrow:`<div> <svg  style="height: 35px; flex-shrink: 0;" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path d="m9.4 18.4-.7-.7 5.6-5.6-5.7-5.7.7-.7 6.4 6.4-6.3 6.3z"></path></svg></div>`
})

let toggleLogo = document.querySelector('.toggle-logo');
let menu = document.querySelector('.menu');
let pageContent = document.querySelector('.page-content');
let newMdSt=document.querySelector('.new-md-st');

    toggleLogo.addEventListener("click",function(){
    menu.classList.toggle("is-active");
    newMdSt.classList.toggle("is-on");
    
    pageContent.classList.toggle("is-active");
   })

let toggleLogoSm=document.querySelector('.toggle-logo-sm');
let sideBar=document.querySelector('.silide-bar');


    toggleLogoSm.addEventListener("click",function(){
    sideBar.classList.toggle("is-on");
   })