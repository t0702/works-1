var sliderContainer = document.getElementsByClassName('slider-container'),
    ArSlides = document.getElementsByClassName('AR-slider'),
    ArSlideCount = ArSlides.length,//슬라이드 개수
    currentIndex = 0,//첫 슬라이드
    btnPrev = document.getElementById('prev'),
    btnNext = document.getElementById('nex');

for( var i = 0; i < ArSlideCount; i++){ // 슬라이드가 있으면 가로로 배열하기
    ArSlides[i].style.left = (i * 100)+ '%';
}

function goToSlide(idx){ // 슬라이드 이동 함수 
    for(var k = 0; k < sliderContainer.length; k++){
        sliderContainer[0].style.left = (idx * -100) + '%';
        sliderContainer[0].classList.add('animated');
    }
    // sliderContainer[0].style.left = (idx * -100) + '%';
    // sliderContainer[0].classList.add('animated');
    currentIndex = idx;
}


btnPrev.addEventListener('click',function(e){ //버튼 클릭하면 슬라이드 이동시키기
    e.preventDefault();
    if(currentIndex > 0){
        goToSlide(currentIndex - 1);
    }else{
        goToSlide(ArSlideCount-1);
    }
});
btnNext.addEventListener('click',function(e){
    e.preventDefault();
    if(currentIndex < ArSlideCount - 1){
        goToSlide(currentIndex + 1);
    }else{
        goToSlide(0);
    }
});
goToSlide(0);
