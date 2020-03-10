const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// nav items
const navTag = document.querySelector("nav").getElementsByTagName("a");

for(let i = 0; i < navTag.length; i++) {
  navTag[i].innerText = siteContent.nav[`nav-item-${i+1}`]
  navTag[i].style.color = 'green'
}

let newA = document.createElement('a');
newA.textContent = "appended";
newA.setAttribute('href', '#');
newA.setAttribute('style', 'color: green')
let newATwo = document.createElement('a');
newATwo.textContent = "prepended";
newATwo.setAttribute('href', '#');
newATwo.setAttribute('style', 'color: green');
const nav = document.querySelector('nav');
nav.appendChild(newA);
nav.prepend(newATwo);

// cta section
document.querySelector('h1').textContent = siteContent.cta["h1"];
document.getElementById('cta-img').setAttribute('src', siteContent.cta["img-src"]);
document.querySelector('button').textContent = siteContent.cta["button"];

// main-content section
const mainContentH = document.querySelectorAll('h4');
mainContentH[0].textContent = siteContent["main-content"]["features-h4"]
mainContentH[1].textContent = siteContent["main-content"]["about-h4"]
mainContentH[2].textContent = siteContent["main-content"]["services-h4"]
mainContentH[3].textContent = siteContent["main-content"]["product-h4"]
mainContentH[4].textContent = siteContent["main-content"]["vision-h4"]

const mainContentP = document.querySelectorAll('p');
mainContentP[0].textContent = siteContent["main-content"]["features-content"]
mainContentP[1].textContent = siteContent["main-content"]["about-content"]
mainContentP[2].textContent = siteContent["main-content"]["services-content"]
mainContentP[3].textContent = siteContent["main-content"]["product-content"]
mainContentP[4].textContent = siteContent["main-content"]["vision-content"]

document.getElementById("middle-img").setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// contact section
document.querySelector('.contact h4').textContent = siteContent["contact"]["contact-h4"];

const contactP = document.querySelectorAll('.contact p');
contactP[0].textContent = siteContent.contact.address;
contactP[1].textContent = siteContent.contact.phone;
contactP[2].textContent = siteContent.contact.email;

// footer
document.querySelector('footer p').textContent = siteContent["footer"]["copyright"]