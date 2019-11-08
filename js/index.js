const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//navigation
naviItems = Object.values(siteContent.nav);
const anchor = document.querySelectorAll("nav a");
anchor.forEach((ele, i) => (ele.textContent = naviItems[i]));
anchor.forEach(ele => (ele.style.color = "green"));
// anchor[0].textContent = siteContent["nav"]["nav-item-1"];
// anchor[1].textContent = siteContent["nav"]["nav-item-2"];
// anchor[2].textContent = siteContent["nav"]["nav-item-3"];
// anchor[3].textContent = siteContent["nav"]["nav-item-4"];
// anchor[4].textContent = siteContent["nav"]["nav-item-5"];
// anchor[5].textContent = siteContent["nav"]["nav-item-6"];

//Fixing the h1 on the topcontent
let topImg = document.getElementById("cta-img");
topImg.src = siteContent["cta"]["img-src"];
let ctaBlock = document.querySelector(".cta-text");
let ctaText3 = document.querySelector(".cta-text h1");
ctaText3.textContent = "Awesome";
let ctaText2 = document.createElement("h1");
ctaText2.textContent = "is";
ctaText2.style.marginBottom = 0;
let ctaText1 = document.createElement("h1");
ctaText1.textContent = "Dom";
ctaText1.style.marginBottom = 0;
console.log(ctaText1);
ctaBlock.prepend(ctaText2);
ctaBlock.prepend(ctaText1);

//adding text to button
let ctaBtn = document.querySelector(".cta-text button");
ctaBtn.textContent = siteContent["cta"]["button"];

//top content
let titlePagrs = Object.entries(siteContent["main-content"]);
let titleh4 = titlePagrs.map(item => {
  if (item[0].includes("h4")) {
    return item[1];
  }
});
let titlesData = titleh4.filter(item => item != undefined);
console.log(titlesData);
let pagrs = titlePagrs.map(item => {
  if (item[0].includes("content")) {
    return item[1];
  }
});
let pagrData = pagrs.filter(item => item != undefined);

let titles = document.querySelectorAll("h4");
titles.forEach((item, i) => (item.textContent = titlesData[i]));
// titles[0].textContent = siteContent["main-content"]["features-h4"];
// titles[1].textContent = siteContent["main-content"]["about-h4"];
// titles[2].textContent = siteContent["main-content"]["services-h4"];
// titles[3].textContent = siteContent["main-content"]["product-h4"];
// titles[4].textContent = siteContent["main-content"]["vision-h4"];

let mainParagraphs = document.querySelectorAll(".main-content p");
mainParagraphs.forEach((item, i) => (item.textContent = pagrData[i]));

//middle img
const midImg = document.getElementById("middle-img");
midImg.src = "./img/mid-page-accent.jpg";

//contact section
contactData = Object.values(siteContent.contact);
const contactEls = document.querySelectorAll(".contact *");
contactEls.forEach((item, i) => (item.textContent = contactData[i]));
contactEls[1].style.width = "20%";
// contactTitle.textContent = siteContent["contact"]["contact-h4"];
// const contactFill = document.querySelectorAll(".contact p");
// contactFill[0].textContent = siteContent["contact"]["address"];
// contactFill[0].style.width = "20%";
// contactFill[1].textContent = siteContent["contact"]["phone"];
// contactFill[2].textContent = siteContent["contact"]["email"];

//footer
const copyText = document.querySelector("footer p");
copyText.textContent = siteContent["footer"]["copyright"];

//append
const join = document.createElement("a");
join.textContent = "Join Us";
join.href = "#";
join.style.color = "green";
console.log(join);

const navbar = document.querySelector("nav");
navbar.append(join);

//prepend
const first = document.createElement("a");
first.textContent = "First";
first.href = "#";
first.style.color = "green";
console.log(first);
navbar.prepend(first);

//Event listener button ----THE BLUE WAVE
ctaBtn.addEventListener("click", ele => {
  document.querySelectorAll("a").forEach(ele => (ele.style.color = "blue"));
  document.querySelectorAll("p").forEach(ele => (ele.style.color = "blue"));
  let mainContent = document.querySelector(".main-content .top-content");
  let secretInfo = document.createElement("div");
  mainContent.prepend(secretInfo);

  let secretTitle = document.createElement("h4");
  secretTitle.textContent = "Secret Paragraph";
  let secretP = document.createElement("p");
  secretP.textContent = `You have discovered what few people could ever hope to discover...well actually anyone who clicks that button
  will find this hidden message...a message that is telling you that you found this message. Really interesting. Glad you could partake.`;
  secretInfo.prepend(secretP);
  secretInfo.prepend(secretTitle);
  secretInfo.classList.add("text-content");
  secretInfo.style.paddingRight = "1%";
  secretTitle.style.color = "red";
  secretP.style.color = "darkgreen";
});
