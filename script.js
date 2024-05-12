const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const submenu = document.querySelector(".submenu")
const items = document.querySelectorAll(".item");



function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        
        // adds the menu (hamburger) icon
        toggle.querySelector("a").innerHTML = "<i class=’fas bars’>+</i>";
    } else {
        menu.classList.add("active");
        
        // adds the close (x) icon
        toggle.querySelector("a").innerHTML = "<i class=’fas bars’>-</i>";
    }
}

function toggleItem() {
    if (this.classList.contains(".submenu-active")) {
        this.classList.remove(".submenu-active");
        // this.classList.remove("submenu-open")
    } else if (menu.querySelector(".submenu-active")) {
        menu.querySelector(".submenu-active").classList.remove("submenu-active");
        // this.classList.remove("submenu-open")
        this.classList.add("submenu-active");
    } else {
        this.classList.add("submenu-active");
        // submenu.classList.remove("submenu-open")
    }
}


for (let item of items) {
    if (item.querySelectorAll(".item")) {
      item.addEventListener("click", toggleItem, false);
      item.addEventListener("keypress", toggleItem, false);
    }
       
}

function toggleSubmenu () {
    // menu.querySelector(".submenu").classList.add("submenu-open")


    if (submenu.classList.contains(".submenu")) {
        // this.classList.remove("submenu-open");
        menu.querySelector(".submenu").classList.remove("submenu-open")
        // menu.querySelector(".submenu").classList.add("submenu-open")
    }
    else if (submenu.querySelector("submenu-open")) {
        
        menu.querySelector(".submenu").classList.remove("submenu-open")
        // menu.querySelector(".submenu").classList.add(".submenu-open")
        submenu.classList.add("submenu-open")
    } 
    else  {
        // submenu.classList.remove("submenu-open")
        menu.querySelector(".submenu").classList.add("submenu-open")
        // menu.querySelector(".submenu").classList.remove("submenu-open")
    }
}


function closeDropDown(e) {


}

/* Close Submenu From Anywhere */
function closeSubmenu(e) {

        if (menu.querySelector(".submenu-active")) {
            let isClickInside = menu
                .querySelector(".submenu-active")
                .contains(e.target);
            
        if (!isClickInside && menu.querySelector(".submenu-active")) {
            menu.querySelector(".submenu-active").classList.remove("submenu-active");
            menu.querySelector(".submenu").classList.remove("submenu-open");
        }
    }
}


  function iClick() {
    alert("hello")
  }

toggle.addEventListener("click", toggleMenu, false);
document.addEventListener("click", closeSubmenu, false)

// console.log(toggle)

// console.log(menu)

// console.log(submenu)

// console.log(items)