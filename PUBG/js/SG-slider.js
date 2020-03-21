
var SgSlides = document.getElementsByClassName('SG-slider'),
    SgSlideCount = SgSlides.length,                 //슬라이드 개수
    SgCurrentIndex = 0,                            //첫 슬라이드
    btnPrev = document.getElementById('prev'),
    btnNext = document.getElementById('nex');

for( var i = 0; i < SgSlideCount; i++){
SgSlides[i].style.left = (i * 100)+ '%';
}

function SgGoToSlide(idx){
sliderContainer[3].style.left = (idx * -100) + '%';
sliderContainer[3].classList.add('animated'); 
SgCurrentIndex = idx;
}

btnPrev.addEventListener('click',function(e){
e.preventDefault();
if(SgCurrentIndex > 0){
    SgGoToSlide(SgCurrentIndex - 1);
}else{
    SgGoToSlide(SgSlideCount-1);
}
});
btnNext.addEventListener('click',function(e){
e.preventDefault();
if(SgCurrentIndex < SgSlideCount - 1){
    SgGoToSlide(SgCurrentIndex + 1);
}else{
    SgGoToSlide(0);
}
});

SgGoToSlide(0);