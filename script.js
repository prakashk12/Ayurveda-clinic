// ======================================
// CHARAKA AYURVEDIC CLINIC
// script.js
// ======================================

// Sticky Header
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
        header.style.background = "#ffffff";
    } else {
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.08)";
    }
});

// ================================
// Smooth Scroll
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});

// ================================
// Active Navigation
// ================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ================================
// Reveal Animation
// ================================

const reveals = document.querySelectorAll(
".card,.why-card,.testimonial,.doctor-box,.about-grid,.hero-text,.hero-image");

function revealOnScroll() {

    const trigger = window.innerHeight - 100;

    reveals.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < trigger) {

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        }

    });

}

reveals.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = "all .8s ease";

});

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// ================================
// Contact Form Validation
// ================================

const form = document.querySelector("form");

if (form) {

form.addEventListener("submit", function(e){

e.preventDefault();

const name = form.querySelector('input[type="text"]');
const phone = form.querySelector('input[type="tel"]');
const message = form.querySelector("textarea");

if(name.value.trim()===""){

alert("Please enter your name.");

name.focus();

return;

}

if(phone.value.trim()===""){

alert("Please enter your phone number.");

phone.focus();

return;

}

if(phone.value.length<10){

alert("Please enter a valid phone number.");

phone.focus();

return;

}

alert(
"Thank you for contacting Charaka Ayurvedic Clinic.\n\nWe will contact you shortly."
);

form.reset();

});

}

// ================================
// Animated Counter
// ================================

const counters = document.querySelectorAll(".counter");

function runCounter(counter){

const target = +counter.dataset.target;

let count = 0;

const speed = target / 120;

function update(){

count += speed;

if(count < target){

counter.innerText = Math.ceil(count);

requestAnimationFrame(update);

}else{

counter.innerText = target;

}

}

update();

}

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

runCounter(entry.target);

observer.unobserve(entry.target);

}

});

});

counters.forEach(counter=>observer.observe(counter));

// ================================
// Scroll To Top Button
// ================================

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = "↑";

scrollBtn.id = "scrollTop";

document.body.appendChild(scrollBtn);

scrollBtn.style.position = "fixed";
scrollBtn.style.right = "20px";
scrollBtn.style.bottom = "95px";
scrollBtn.style.width = "50px";
scrollBtn.style.height = "50px";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.border = "none";
scrollBtn.style.background = "#2E7D32";
scrollBtn.style.color = "#fff";
scrollBtn.style.fontSize = "24px";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
scrollBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {

if(window.scrollY>300){

scrollBtn.style.display="block";

}else{

scrollBtn.style.display="none";

}

});

scrollBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// ================================
// Image Hover Effect
// ================================

document.querySelectorAll("img").forEach(img=>{

img.addEventListener("mouseover",()=>{

img.style.transition=".4s";

img.style.transform="scale(1.03)";

});

img.addEventListener("mouseout",()=>{

img.style.transform="scale(1)";

});

});

// ================================
// Loading Animation
// ================================

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});

document.body.style.opacity="0";
document.body.style.transition="opacity .8s";

// ================================
// Console Message
// ================================

console.log("Charaka Ayurvedic Clinic Website Loaded Successfully");