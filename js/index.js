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
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
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

let cta = document.getElementById("cta-img");
cta.setAttribute('src', siteContent["cta"]["img-src"])

let middle = document.getElementById("middle-img");
middle.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


//navbar text content and color

let nav = document.querySelectorAll("a");
nav.forEach((item, index) => {
   item.textContent = siteContent["nav"][`nav-item-${index+1}`];
   item.style.color = 'green';
   
});

//add new items to navbar. 


let header = document.querySelector("nav");
let login = document.createElement('a');
login.textContent = "Login";
login.style.color = "green";
header.appendChild(login);

let gallery = document.createElement('a');
gallery.textContent = "Gallery";
gallery.style.color = "green";
header.prepend(gallery);


//splits text content to dynamically add br

let ctaText = document.querySelector("h1");
var array = siteContent["cta"]["h1"].split(" ");
var space = document.createElement('br');
ctaText.textContent = array[0];
ctaText.appendChild(space);
var is = document.createTextNode("");
is.textContent = array[1];
ctaText.appendChild(is);

var space2 = document.createElement('br');
ctaText.appendChild(space2);
var awesome = document.createTextNode("");
awesome.textContent = array[2];
ctaText.appendChild(awesome);






//button 

let button = document.querySelector("button");
button.textContent = siteContent["cta"]["button"];


//top content 

let topParent = document.querySelector(".top-content");

let topChildren = Array.from(topParent.children);

let features = topChildren[0].children;
features[0].textContent = siteContent["main-content"]["features-h4"];
features[1].textContent = siteContent["main-content"]["features-content"];

let about = topChildren[1].children;
about[0].textContent = siteContent["main-content"]["about-h4"];
about[1].textContent = siteContent["main-content"]["about-content"];

//bottom content

let bottomParent = document.querySelector(".bottom-content");

let bottomChildren = Array.from(bottomParent.children);

let services = bottomChildren[0].children;
services[0].textContent = siteContent["main-content"]["services-h4"];
services[1].textContent = siteContent["main-content"]["services-content"];


let product = bottomChildren[1].children;
product[0].textContent = siteContent["main-content"]["product-h4"];
product[1].textContent = siteContent["main-content"]["product-content"];

let vision = bottomChildren[2].children;
vision[0].textContent = siteContent["main-content"]["vision-h4"];
vision[1].textContent = siteContent["main-content"]["vision-content"];


//contact 

let contactParent = document.querySelector(".contact");

let contactChildren = Array.from(contactParent.children);

contactChildren[0].textContent = siteContent["contact"]["contact-h4"];


//slice address paragraph to display in different lines as in the original html file. 

contactChildren[1].textContent = siteContent["contact"]["address"].slice(0,18);


var br = document.createElement('br');
contactChildren[1].appendChild(br);

var address = document.createTextNode("");

address.textContent = siteContent["contact"]["address"].slice(19,33);
contactChildren[1].appendChild(address);

//phone and email

contactChildren[2].textContent = siteContent["contact"]["phone"];
contactChildren[3].textContent = siteContent["contact"]["email"];


//footer

let footer = document.querySelector("footer");
footer.textContent = siteContent["footer"]["copyright"];






