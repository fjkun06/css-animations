const btns = Array.from(document.querySelectorAll("button"));

console.log(btns);

// var myIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   myIndex++;
//   if (myIndex > x.length) { myIndex = 1 }
//   x[myIndex - 1].style.display = "block";
//   setTimeout(carousel, 6000); // Change image every 2 seconds
// }

btns.forEach((btn, index) =>
  btn.addEventListener("click", () => {
    showDivs((slideIndex = index + 1));
    // currentDiv(index + 1);
    console.log(index + 1);
  })
);

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function currentDiv(n) {
  showDivs((slideIndex = n));
}

function showDivs(n) {
  var i;
  const slides = document.getElementsByClassName("mySlides");
  // var dots = document.getElementsByClassName("demo");

  //mkx carousel 360
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // for (i = 0; i < btns.length; i++) {
  //   btns[i].className = btns[i].className.replace(" w3-red", "");
  // }
  slides[slideIndex - 1].style.display = "block";
  btns[slideIndex - 1].className += " w3-red";
}
