
window.onscroll = function () { expand() };

function expand() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    document.getElementById("leftIntro").style.width = "100%";
    document.getElementById("textContainer").style.width = "0%";

  }
  else {
    document.getElementById("leftIntro").style.width = "50%";
    document.getElementById("textContainer").style.width = "50%";

  }
}

//document.getElementById("textIntro").style.width = "0%";
//document.getElementById("textIntro").style.width = "50%";



window.addEventListener("scroll", function () {
  const distance = window.scrollY;

  document.querySelector(".cover").style.transform = `translateY(${distance *
    -.2}px)`;

  document.querySelector(".image").style.transform = `translateY(${distance * -.1}px)`;

  setTimeout(() => {
    document.querySelector(".section").style.transform = `translateY(${distance *
      -.4}px)`;;

  });

});


//  document.querySelector(".image").style.transform = `translateY(${distance * -.01}px)`;