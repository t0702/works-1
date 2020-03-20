// 변수 지정
var sliderWrapper = document.getElementsByClassName('weapon-wrap'), //weapon-wrap
    sliderContainer = document.getElementsByClassName('slider-container'), //slider-container
    slides = document.getElementsByClassName('AR-slider'),
    slideCount = slides.length,                 //슬라이드 개수
    currentIndex = 0,                            //첫 슬라이드
    topHeight = 0,                               //높이가 제일 높은 슬라이드
    btnPrev = document.getElementById('prev'),   //아이디 prev
    btnNext = document.getElementById('nex');   //아이디 next

// 슬라이드가 있으면 가로로 배열하기
for( var i = 0; i < slideCount; i++){
    slides[i].style.left = (i * 100)+50+ '%';
}

// 슬라이드 이동 함수 
function goToSlide(idx){
    sliderContainer[0].style.left = (idx * -100) + '%';
    sliderContainer[0].classList.add('animated');   //silder-container에 클래스명 animated 추가.
    currentIndex = idx;
}

//버튼 기능 업데이트 함수
function updateBtn(){
    //처음 슬라이드일 때
    if(currentIndex == 0){
        btnNext.classList.add('disabled');
    }else{
        btnNext.classList.remove('disabled');
    }
    //마지막 슬라이드일 때
    if(currentIndex == slideCount -1){
        btnPrev.classList.add('disabled');
    }else{
        btnPrev.classList.remove('disabled');
    }
}

//버튼 클릭하면 슬라이드 이동시키기
btnPrev.addEventListener('click',function(e){
    e.preventDefault();
    //goToSlide(currentIndex - 1);
    //처음이 아니라면 이전. goToSlide(currentIndex - 1);
    //처음이라면 goToSlide(???)
    if(currentIndex > 0){
        goToSlide(currentIndex - 1);
    }else{
        goToSlide(slideCount-1);
    }

});
btnNext.addEventListener('click',function(e){
    e.preventDefault();
    //goToSlide(currentIndex + 1);

    if(currentIndex < slideCount - 1){
        goToSlide(currentIndex + 1);
    }else{
        goToSlide(0);
    }
});





// 첫번째 슬라이드 먼저 보이도록 하기
goToSlide(0);






