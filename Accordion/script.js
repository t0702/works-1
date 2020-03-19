var btnCollapse = document.getElementById('btn-collapse'),
    heading = document.getElementsByClassName('panel-heading'),
    question = document.getElementsByClassName('panel-question'),
    answer = document.getElementsByClassName('panel-body');

//제목을 클릭하면 할 일
for(var i = 0; i < heading.length; i++){ //헤딩들 마다 할 일
    heading[i].addEventListener('click', function(e){
        for( var j = 0; j < question.length; j++){
            question[j].classList.remove('active');
            e.target.parentNode.classList.add('active'); //parentNode > 부모
            activateBody();
        }//question들 마다 할 일
    });
}

function activateBody(){
    // 1. panel-body 모두 안보이도록 answer / css의 경우 display:none;
    for(var x = 0; x < answer.length; x++){
        answer[x].style.display = 'none';
    }

    // 2. 클래스명 active가 있는 panel-question 자식 중 panel-body 나타나도록
    //.panel-question.active .panel-body
    var activePanel = document.querySelector('.panel-question.active .panel-body'); //querySelector : css선택자
    activePanel.style.display="block"
}
activateBody();

//collapse all 버튼을 클릭하면 모든 answer들을 안보이도록 한다.
btnCollapse.addEventListener('click', function(){
    for( var i = 0; i < answer.length; i++){
        answer[i].style.display = 'none';
    }
});