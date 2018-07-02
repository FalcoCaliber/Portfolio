const menu = document.getElementById("menu");
// Buttons
const hamButton = document.getElementById("hamburgerButton");
const amButton = document.getElementById('amButton');
const portButton = document.getElementById('portButton');
const contButton = document.getElementById('contButton');
const navButton = document.getElementsByClassName('navButton');
// nav switches
const aboutMeSwitch = document.getElementById('aboutMeSwitch');
const portfolioSwitch = document.getElementById('portfolioSwitch');
const contactSwitch = document.getElementById('contactSwitch');
// display elements
const signatureBox = document.getElementById('signatureBox');
const portfolio = document.getElementById('portfolio');
const aboutMe = document.getElementById('aboutMe');
const contact = document.getElementById('contact');

console.log('alive');

// button swappers and display toggles
amButton.addEventListener('click', e => {
  if (aboutMeSwitch.checked === false) {
    portfolioSwitch.checked = false;
    contactSwitch.checked = false;
    aboutMeSwitch.checked === true;
    $(signatureBox).hide(600)
    $(contact).hide(300)
    $(portfolio).hide(300)
    $(aboutMe).delay(300).slideToggle(800)
  } else {
    $(aboutMe).hide(300);
    $(signatureBox).delay(300).show(600);
  }
})

portButton.addEventListener('click', e => {
  if (portfolioSwitch.checked === false) {
    aboutMeSwitch.checked = false;
    contactSwitch.checked = false;
    portfolioSwitch.checked === true;
    $(signatureBox).hide(600)
    $(aboutMe).hide(300);
    $(contact).hide(300);
    $(portfolio).delay(300).slideToggle(800);
  } else {
    $(portfolio).hide(300);
    $(signatureBox).delay(300).show(600);
  }
})

contButton.addEventListener('click', e => {
  if (contactSwitch.checked === false) {
    aboutMeSwitch.checked = false;
    portfolioSwitch.checked = false;
    contactSwitch.checked === true;
    $(signatureBox).hide(300);
    $(portfolio).hide(300);
    $(aboutMe).hide(300);
    $(contact).delay(300).show(600);
  } else {
    $(contact).hide(300);
    $(signatureBox).delay(300).show(600);
  }
})



// nav toggle
hamButton.addEventListener("click", e => {
  $('.navItem').animate({
   height: 'toggle'
    })
  });

// onLoad Function
$(document).ready(function(){
  $(aboutMe).hide();
  $(contact).hide();
  $(portfolio).hide();
$('.navItem').animate({
  height: 'toggle'
 });
});
