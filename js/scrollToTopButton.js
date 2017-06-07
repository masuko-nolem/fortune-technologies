// When the user scrolls down 150px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 150) {
      document.getElementById("topButton").style.opacity = "1";
  } else {
      document.getElementById("topButton").style.opacity = "0";
  }
}
