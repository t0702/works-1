var heading = document.getElementsByClassName('menu-heading'),
    menuBox = document.getElementsByClassName('menu-box'),
    subMenuBox = document.getElementsByClassName('sub-menu-box');

for(var i = 0; i <heading.length; i++){
    heading[i].addEventListener('click', function(e){
        for( var j = 0; j < menuBox.length; j++){
            menuBox[j].classList.remove('active');
            e.target.parentNode.classList.add('active');
            activateBody();
        }
    })
}

function activateBody(){
    for(var x = 0; x < subMenuBox.length; x++){
        subMenuBox[x].style.display = 'none';
    }
    var activePanel = document.querySelector('.menu-box.active .sub-menu-box'); //querySelector : css선택자
    activePanel.style.display="block"
}
activateBody();