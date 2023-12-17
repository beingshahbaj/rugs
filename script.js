const nvBar = document.querySelector(".navbar");
const menuList = document.querySelector(".menu-list");
console.log(menuList)
const aTag = menuList.children;

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 600) {
    nvBar.style.backgroundColor = "white";
    nvBar.style.color = "black";

    for (let i = 0; i < aTag.length; i++) {
      aTag[i].classList.add("text-dark");
      aTag[i].classList.remove("text-white");
      // TagA[i].classList.add("text-dark")
      // TagA[i].classList.remove("text-white")

    }
  } else {
    nvBar.style.backgroundColor = "";
    nvBar.style.color = "white";
    for (let i = 0; i < aTag.length; i++) {
      aTag[i].classList.remove("text-dark");
      aTag[i].classList.add("text-white");
      

    }
  }
});

window.addEventListener("wheel", (e) => {
  if (e.deltaY < 0) {
    nvBar.style.top = "0";
  }
  if (e.deltaY > 0) {
    nvBar.style.top = "-100%";
  }

  if (e.offsetX < 0) {
    closeMenu()
  }
});

const open = document.querySelector(".open");
const close = document.querySelector(".close");
const menu = document.querySelector(".mobilemenu");
const box = document.querySelector(".box");

const closeMenu = () => {
  open.classList.remove("close");
  close.classList.add("close");
  menu.style.left = "-100%";
};

// Event listener for the box
box.addEventListener("click", (event) => {
  event.stopPropagation();

  open.classList.toggle("close");
  close.classList.toggle("close");

  menu.style.left = "0";
});

// Event listener for the close button
close.addEventListener("click", (event) => {
  event.stopPropagation();
  closeMenu();
});

// Event listener for clicks outside the menu
document.addEventListener("click", (event) => {
  const isMenuClicked = menu.contains(event.target);
  if (!isMenuClicked) {
    closeMenu();
  }
});

const designe = document.getElementsByClassName("designe");
const designeBox = document.querySelector(".designes");

// console.log(designe);

// Array.from(designe).forEach((element) => {
 
//   element.addEventListener("click", () => {
//     element.classList.toggle("color");
   
    
//     designeBox.classList.toggle("bottom");
//     designeBox.classList.toggle("top");
//   });
// });

function color() {
  nvBar.style.backgroundColor = "white";
  nvBar.style.color = "black";
  for (let i = 0; i < aTag.length; i++) {
    aTag[i].classList.add("text-dark");
    aTag[i].classList.remove("text-white");
  }
}
