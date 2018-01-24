/*jslint browser:true */
//const [current, imgs] = [document.querySelector('#current'), document.querySelectorAll('.imgs img')];
const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img");
const opacity = 0.6;

// Set first img opacity
imgs[0].style.opacity = opacity;

//Set event listener for a click on images to run the imgClick function
imgs.forEach(img => img.addEventListener("click", imgClick));

function imgClick(e) {
  // Reset the opacity
  imgs.forEach(img => (img.style.opacity = 1));

  // Change current image to src of clicked image
  current.src = e.target.src;

  // Add fade in class
  current.classList.add("fade-in");

  // Remove fade-in class after .5 seconds
  setTimeout(() => current.classList.remove("fade-in"), 500);

  // Change the opacity to opacity var
  e.target.style.opacity = opacity;
}
