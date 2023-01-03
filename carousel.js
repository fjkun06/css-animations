const btns = Array.from(document.querySelectorAll("button"));

console.log(btns);

var myIndex = 0;
var slideIndex = 1;
let canceler;

// carousel();

function raf(func, ms) {
  let start = performance.now();
  const loop = curr => {

    if (curr - start >= ms) {
      func(curr);
      start = curr;
      // console.log("start: ", curr);
    }

    canceler = requestAnimationFrame(loop);
  };
  canceler = requestAnimationFrame(loop);
}

//runnx fxn
showDivs(slideIndex);
function gameLoop(timestamp) {
  slideIndex++;
  console.log("sI: ", slideIndex);

  showDivs(slideIndex);
}


  raf(gameLoop, 5000);

function carousel() {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
  // myIndex++;

  slideIndex++;

//   if (myIndex > x.length) { myIndex = 1 }
//   x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 5000); // Change image every 2 seconds
}

btns.forEach((btn, index) =>
  btn.addEventListener("click", () => {
    showDivs((slideIndex = index + 1));
    // currentDiv(index + 1);
  })
);


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
    // slides[i].style.opacity = "0";
    slides[i].style.display = "none";
  }
  // for (i = 0; i < btns.length; i++) {
  //   btns[i].className = btns[i].className.replace(" w3-red", "");
  // }
  // slides[slideIndex - 1].style.opacity = "1";
  slides[slideIndex - 1].style.display = "block";
  btns[slideIndex - 1].className += " w3-red";
}
