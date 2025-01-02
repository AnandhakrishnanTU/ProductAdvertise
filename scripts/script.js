const showmore = document.querySelector('.show-more');
const details = document.getElementById('details');
const about = document.getElementById('about');
const products = document.getElementById('products');
const faq = document.getElementById('faq');
const contact = document.getElementById('contact');
const navAbout = document.querySelector('.nav-about');
const navProducts = document.querySelector('.nav-products');
const navFaq = document.querySelector('.nav-faq');
const navContact = document.querySelector('.nav-contact');

showmore.addEventListener('click', () => {
    details.scrollIntoView({
        behavior: 'smooth'
    });
});

navAbout.addEventListener('click', () => {
    about.scrollIntoView({
        behavior: 'smooth'
    });
});

navProducts.addEventListener('click', () => {
    products.scrollIntoView({
        behavior: 'smooth'
    });
});

navFaq.addEventListener('click', () => {
    faq.scrollIntoView({
        behavior: 'smooth'
    });
});

navContact.addEventListener('click', () => {
    contact.scrollIntoView({
        behavior: 'smooth'
    })
})

const boxes = document.querySelector(".boxes");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const box = document.querySelector('.box');
let boxwidth1 = box.clientWidth;

let currentPosition = 0; // Tracks the current scroll position
const boxWidth = boxwidth1 + 20; // Width of one box including margin

rightArrow.addEventListener("click", () => {
    const maxScroll = -(boxes.children.length - 1) * boxWidth;
    if (currentPosition > maxScroll) {
        currentPosition -= boxWidth;
        boxes.style.transform = `translateX(${currentPosition}px)`;
    }
});

leftArrow.addEventListener("click", () => {
    if (currentPosition < 0) {
        currentPosition += boxWidth;
        boxes.style.transform = `translateX(${currentPosition}px)`;
    }
});


function toggleFaq(element) {
    const answer = element.nextElementSibling;
    const isOpen = answer.classList.contains("open");

    // Close all other FAQ items
    document.querySelectorAll(".faq-answer").forEach((ans) => ans.classList.remove("open"));
    document.querySelectorAll(".faq-question span").forEach((span) => span.textContent = "+");

    // Toggle the clicked FAQ
    if (!isOpen) {
        answer.classList.add("open");
        element.querySelector("span").textContent = "-";
    }
}

function submit(){
    const name = document.querySelector('.name');
    const email = document.querySelector('.email');
    const message = document.querySelector('.message');
    const sendmessage = document.querySelector('.send-message');

    name.value='';
    email.value='';
    message.value='';
    sendmessage.style.visibility='visible';

    setTimeout(() => {
        sendmessage.style.visibility='hidden';
    }, 2000);
}
