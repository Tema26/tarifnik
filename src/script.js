function menu(menuItemSelector) {
  const menuItem = document.querySelectorAll(menuItemSelector);
  menuItem.forEach(function(item) {
      item.addEventListener('mouseenter' , showSub);
      item.addEventListener('mouseleave' , hideSub);
  });
}
function showSub() {
  if(this.children.length > 1) {
      this.children[1].style.display = 'flex';
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