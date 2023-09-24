let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("picSlide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// function jam() {
//     var sekarang = new Date();
//     var jam = sekarang.getHours();
//     var menit = sekarang.getMinutes();
//     var detik = sekarang.getSeconds();
//     var waktu = jam + ":" + menit + ":" + detik;

//     document.getElementsByClassName("jam").textContent = waktu;
//   }

//   setInterval(jam, 1000);
// jam();