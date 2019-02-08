particlesJS.load('particles-js', 'particles.json', function () {
  console.log('Loaded');
});
ScrollReveal({ reset: true });


// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
// showSlides(slideIndex += n);
// }

// function currentSlide(n) {
// showSlides(slideIndex = n);
// }

// function showSlides(n) {
// var i;
// var slides = document.getElementsByClassName("mySlides");
// var dots = document.getElementsByClassName("dot");
// if (n > slides.length) {slideIndex = 1}    
// if (n < 1) {slideIndex = slides.length}
// for (i = 0; i < slides.length; i++) {
//   slides[i].style.display = "none";  
// }
// for (i = 0; i < dots.length; i++) {
//   dots[i].className = dots[i].className.replace(" active", "");
// }
// slides[slideIndex-1].style.display = "block";  
// dots[slideIndex-1].className += " active";
// }



ScrollReveal().reveal('.projects', { duration: 2000 });
ScrollReveal().reveal('.widget', { interval: 200 });

ScrollReveal().reveal('.widget-list', { duration: 5000 });

var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName('projectImage');

img[0].onclick = function () {
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  var titleText = document.getElementById("titlemodal");
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = "An android application designed to streamline networking on major social media through the use of NFC." + 
  " Developer using Android Studio and Java with an easy to understand UI for fast and elegant networking sessions" + 
  " This idea was for QHacks 2019 and judged as a potential candidate for the top 5 finalist position." + 
  " In 36 hours, I created the UI, integrated Firebase storage for resumes, and learned the basics of NFC technology.";
  titleText.innerHTML = "CONNECT";
  var button = document.getElementById("button")
  button.onclick = function(){
    window.open("https://github.com/G-Gautam/Connect", "_blank")
  }
}
img[1].onclick = function () {
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  var titleText = document.getElementById("titlemodal");
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = "A static website utilizing advanced styling concepts in HTML, CSS, JavaScript, and Bootstrap."+
  " In addition to serving as the VP Finance for the club, I go above and beyond in taking initiative at stages where I can help!"+
  " We recently landed Li-Ning as a sponsor but they required for their logo placement on a public paid URL." +
  " I volunteered to create a website which serves to the club members by hosting the club timings and club events."+
  " Furthermore, I integrated the facebook plugin to show updates from the club's social media platform."+
  " Visit the site at www.uwobadminton.com";
  titleText.innerHTML = "University Badminton Club Website";
  var button = document.getElementById("button")
  button.onclick = function(){
    window.open("https://github.com/G-Gautam/BadmintonWebsite", "_blank")
  }
}
img[2].onclick = function () {
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  var titleText = document.getElementById("titlemodal");
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = "A native android application designed on Android Studio with Google Cloud Vision for a perfect personal alarm clock."+
  " I personally struggle some days to get out of bed and start my day. I repeatedly hit the snooze button wasting hours of precious time."+
  " To fix this problem, I desined a Smart Alarm which cannot be snoozed. A user can only dismiss the alarm if they take a picture of their toothbrush!"+
  " By using GCP image recoginition, the user is forced to get out of bed and head to the next most common task - brushing teeth!" +
  " As a coder, I try to identify pesky problems in my life and find creative solutions in the form of software.";
  titleText.innerHTML = "Smart Alarm";
  var button = document.getElementById("button")
  button.onclick = function(){
    window.open("https://github.com/G-Gautam/smartalarm", "_blank")
  }
}
img[3].onclick = function () {
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  var titleText = document.getElementById("titlemodal");
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = "An intro project to machine learning and algorithms made in python. As an aspiring developer, I'm always eager to learn"+
  " the new industry trends and technologies. This project is meant to serve as an introduction to opencv, numpy, tensorflow, and matplotlib."+
  " I use these libraries and play around with the filters to learn regression and extrapolate data from an exisisting dataset. This project coupled with"+
  " web scraping will be used for a stock picker project.";
  titleText.innerHTML = "Regression Python";
  var button = document.getElementById("button")
  button.onclick = function(){
    window.open("https://github.com/G-Gautam/IntroRegression", "_blank")
  }
}
img[4].onclick = function () {
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  var titleText = document.getElementById("titlemodal");
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = "For my operating system course, my team and I designed a python chess application to showcase multithreading among other technologies."+
  " It is a multiplayer chess game hosted on an AWS server. Clients run on Ubuntu (one of the course requirements) each occupying their own thread."+
  " Any number of people can play the same chess game following the honor system. The game utilized various python libraries to design the GUI and game logic" +
  " The game works by reading commands for the moves which are made by the two players in an text input box." +
  " The commands will be formatted and sent to a socket programming server. The up-to-date state of the chess board will" + 
  " be sent between the players via the server in FEN (Forsyth–Edwards Notation) which will be read by each players’ local client";
  titleText.innerHTML = "WE Chess";
  var button = document.getElementById("button")
  button.onclick = function(){
    window.open("https://github.com/G-Gautam/wechess", "_blank")
  }
}
img[5].onclick = function () {
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  var titleText = document.getElementById("titlemodal");
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = "A standalone python application which scrapes the web for stock prices of any given company. The Stock Web Scraping" +
  " project takes an input from the user in the form of a ticker. It then scrapes cbnc.com for the stock price and percent change for the given company." + 
  " The data is exported to an excel sheet with the ticker, price, percent change, and timestamp of the information. This project is step 1 for a stock" + 
  " picker ML python project currently under construction.";
  titleText.innerHTML = "Stock Web Scraping";
  var button = document.getElementById("button")
  button.onclick = function(){
    window.open("https://github.com/G-Gautam/Webscraping", "_blank")
  }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("lol")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}
