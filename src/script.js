'use strict'
// let el = document.getElementsByClassName('header-menu-nav__item__submenu');
// for(let i=0; i<el.length; i++) {
//     el[i].addEventListener("mouseenter", showSub, false);
//     el[i].addEventListener("mouseleave", hideSub, false);
//  }

//  function showSub(e) {
//     if(this.children.length>1) {
//        this.children[1].style.height = "auto";
//        this.children[1].style.overflow = "visible";
//        this.children[1].style.opacity = "1";
//     } else {
//        return false;
//     }
//  }
//  function hideSub(e) {
//     if(this.children.length>1) {
//       this.children[1].style.height = "0px";
//        this.children[1].style.overflow = "hidden";
//        this.children[1].style.opacity = "0";
//     } else {
//        return false;
//     }
// }

function menu(menuItemSelector) {
   const menuItem = document.querySelectorAll(menuItemSelector);
   menuItem.forEach(function(item) {
       item.addEventListener('click' , showSub);
       item.addEventListener('mouseleave' , hideSub);
   });
}
function showSub() {
   if(this.children.length > 1) {
       this.children[1].style.display = 'block';
   } else {
       return false;
   }
}

function hideSub() {
   if(this.children.length > 1) {
       this.children[1].style.display = 'none';
   } else {
       return false;
   }
}

menu('.header-menu-nav__item');