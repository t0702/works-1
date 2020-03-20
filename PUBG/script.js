var heading = document.getElementsByClassName('menu-heading'),
    menuArea = document.getElementsByClassName('menu-area'),
    listArea = document.getElementsByClassName('list-area'),
    activeMenu = document.getElementsByClassName('menu-area active');

for(var i = 0; i <heading.length; i++){
    heading[i].addEventListener('click', function(e){
        for( var j = 0; j < menuArea.length; j++){
            menuArea[j].classList.remove('active');
            e.target.parentNode.classList.add('active');
            activelist(); 
        }
    })
}

function activelist(){
    for(var x = 0; x < listArea.length; x++){
        listArea[x].style.display = 'none';
    }
    var activePanel = document.querySelector('.menu-area.active .list-area'); //querySelector : css선택자
    activePanel.style.display = "block";
}


    







// activateBody();

// function activateBody(){
//     for(var x = 0; x < subMenuBox.length; x++){
//         subMenuBox[x].style.display = 'none';
//     }
//     var activePanel = document.querySelector('.menu-area.active .list-area'); //querySelector : css선택자
//     activePanel.style.display="block"
// }





    //menuBox가 active일 경우 클릭하면 subMenuBox의 스타일 display:가 block이 된다.

/*
function switchDisplay() {

    var parent = this.parentNode;
    var target = parent.getElementsByTagName("div")[1];
  
    if (target.style.display == "none") {
      target.style.display="block";
    } else {
      target.style.display="none";
    }
    return false;
  }
*/