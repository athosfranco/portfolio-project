/* Função que aumenta o tamanho do Nav */
function openNav() {
  document.getElementById("navcollapsed").style.opacity = "0";
  document.getElementById("navcollapsed").style.marginLeft = "34vw";
  document.getElementById("mySidebar").style.width = "40vw";
  document.getElementById("main").style.marginLeft = "40vw";
  document.getElementById("portfolio").style.marginLeft = "0";
  document.getElementById("main").style.marginRight = "5vw";
  document.getElementById("arrowleft").style.opacity = "100";
  document.getElementById("profile-container").style.opacity = "100";
  document.getElementById("nav-container").style.opacity = "100";
  document.getElementById("icon-container").style.opacity = "100";
}

/* Função que fecha o Nav */
function closeNav() {
  document.getElementById("mySidebar").style.width = "6vw";
  document.getElementById("main").style.marginLeft = "8vw";
  document.getElementById("openbtn").style.marginLeft = "5vw";
  document.getElementById("portfolio").style.marginLeft = "8vw";
  document.getElementById("navcollapsed").style.opacity = "100";
  document.getElementById("navcollapsed").style.marginLeft = "0.5vw";
  document.getElementById("arrowleft").style.opacity = "0";
  document.getElementById("main").style.marginRight = "5vw";
  document.getElementById("profile-container").style.opacity = "0";
  document.getElementById("nav-container").style.opacity = "0";
  document.getElementById("icon-container").style.opacity = "0";
  document.getElementsById("mainheadline").style.fontSize = "4rem";
}
