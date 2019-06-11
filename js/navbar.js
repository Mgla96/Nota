function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginRight = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginRight = "0";
  document.body.style.backgroundColor = "#f1f1f1";
}

function updateNavWidth(x) {
  closeNav();
  if(x.matches) {
    document.getElementsByClassName('sidenav')[0].style.width = "100%";
  }
}

var x = window.matchMedia("(min-width: 576px)");
updateNavWidth(x);
x.addListener(updateNavWidth);
