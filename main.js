const typingElement = document.querySelector(".typing");
const roles = ["Java Full Stack Developer", "Freelancer", "UI/UX Enthusiast"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentRole = roles[roleIndex];
  const visibleText = currentRole.substring(0, charIndex);
  typingElement.textContent = visibleText;

  if (!isDeleting && charIndex < currentRole.length) {
    charIndex++;
    setTimeout(type, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 60);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(type, 1000);
  }
}
// Initialize typing effect when the DOM is fully loaded

document.addEventListener("DOMContentLoaded", type);

// sticky navbar
window.onscroll = function (){

    // var sticky = navbar.offsetTop;
    var navbar = document.getElementById("navbar");

    if (window.scrollY > 55) {
        navbar.classList.add("sticky");
    } 
    else {
        navbar.classList.remove("sticky");
    }

    // scroll to top
    let button = document.getElementById("btn");

    if (document.documentElement.scrollTop > 90) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

function scrolltoTop(){
    document.documentElement.scrollTop = 0;
}

function toggleMenu() {
    let menu = document.getElementById("menu");
    let menubar = document.querySelector(".menu-btn i");

    menu.classList.toggle("active");
    menubar.classList.toggle("active");
}


    document.getElementById("contact-form").addEventListener("submit", function(e) {
        e.preventDefault(); // prevent default form submission

        emailjs.sendForm("service_k59rjd7", "template_yl4piti", this)
            .then(function(response) {
                alert("Message sent successfully!");
            }, function(error) {
                alert("Failed to send message. Error: " + JSON.stringify(error));
            });
    });


