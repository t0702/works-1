var heroName = document.getElementsByClassName("type_wrap"),
  heroLi = document.getElementsByClassName("type"),
  hmcHero = document.getElementsByClassName("weapon-wrap2");

for (var i = 0; i < heroLi.length; i++) {
  heroLi[i].addEventListener("mouseenter", function(ev) {
    for (var j = 0; j < heroName.length; j++) {
      heroName[j].classList.remove("active");
      ev.target.parentNode.classList.add("active");
      activateBody();
    }
  });
}
function activateBody() {
  for (var x = 0; x < hmcHero.length; x++) {
    hmcHero[x].style.display = "none";
  }
  var activePanel = document.querySelector(".type_wrap.active .weapon-wrap2");
  activePanel.style.display = "flex";
}
activateBody();


// ---

for (var i = 0; i < heroLi.length; i++) {
  heroLi[i].addEventListener("click", function(ev) {
    for (var j = 0; j < heroName.length; j++) {
      heroName[j].classList.remove("active2");
      ev.target.parentNode.classList.add("active2");
      activateBody2();
    }
  });
}
function activateBody2() {
  for (var x = 0; x < hmcHero.length; x++) {
    hmcHero[x].style.display = "none";
  }
  var activePanel2 = document.querySelector(".type_wrap.active2 .weapon-wrap2");
  activePanel2.style.display = "flex";
}
activateBody2();

