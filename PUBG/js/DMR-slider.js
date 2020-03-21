// 변수 지정
var DmrSlides = document.getElementsByClassName('DMR-slider'),
    DmrSlideCount = DmrSlides.length,                 //슬라이드 개수
    DmrCurrentIndex = 0,                            //첫 슬라이드
    btnPrev = document.getElementById('prev'),   //아이디 prev
    btnNext = document.getElementById('nex');   //아이디 next

for( var i = 0; i < DmrSlideCount; i++){
    DmrSlides[i].style.left = (i * 100)+ '%';
}

function DmrGoToSlide(idx){
    sliderContainer[2].style.left = (idx * -100) + '%';
    sliderContainer[2].classList.add('animated');
    DmrCurrentIndex = idx;
}

btnPrev.addEventListener('click',function(e){
    e.preventDefault();
    if(DmrCurrentIndex > 0){
        DmrGoToSlide(DmrCurrentIndex - 1);
    }else{
        DmrGoToSlide(DmrSlideCount-1);
    }

});
btnNext.addEventListener('click',function(e){
    e.preventDefault();
    if(DmrCurrentIndex < DmrSlideCount - 1){
        DmrGoToSlide(DmrCurrentIndex + 1);
    }else{
        DmrGoToSlide(0);
    }
});
DmrGoToSlide(0);
