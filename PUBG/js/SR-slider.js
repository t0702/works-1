// 변수 지정
var sliderContainer = document.getElementsByClassName('slider-container'), //slider-container
    SrSlides = document.getElementsByClassName('SR-slider'),
    SrSlideCount = SrSlides.length,                 //슬라이드 개수
    SrCurrentIndex = 0,                            //첫 슬라이드
    btnPrev = document.getElementById('prev'),   //아이디 prev
    btnNext = document.getElementById('nex');   //아이디 next

// 슬라이드가 있으면 가로로 배열하기
for( var i = 0; i < SrSlideCount; i++){
    SrSlides[i].style.left = (i * 100)+ '%';
}

// 슬라이드 이동 함수 
function SrGoToSlide(idx){
    sliderContainer[1].style.left = (idx * -100) + '%';
    sliderContainer[1].classList.add('animated');   //silder-container에 클래스명 animated 추가.
    SrCurrentIndex = idx;
}


//버튼 클릭하면 슬라이드 이동시키기
btnPrev.addEventListener('click',function(e){
    e.preventDefault();
    //goToSlide(currentIndex - 1);
    //처음이 아니라면 이전. goToSlide(currentIndex - 1);
    //처음이라면 goToSlide(???)
    if(SrCurrentIndex > 0){
        SrGoToSlide(SrCurrentIndex - 1);
    }else{
        SrGoToSlide(SrSlideCount-1);
    }

});
btnNext.addEventListener('click',function(e){
    e.preventDefault();
    //goToSlide(currentIndex + 1);

    if(SrCurrentIndex < SrSlideCount - 1){
        SrGoToSlide(SrCurrentIndex + 1);
    }else{
        SrGoToSlide(0);
    }
});

// 첫번째 슬라이드 먼저 보이도록 하기
SrGoToSlide(0);



// var WeaponType = document.getElementsByClassName('type');
// var Ar = document.getElementById('AR');
// // 변수 지정
// var slides = document.getElementsByClassName('slider');

// for(var j = 0; j < WeaponType.length; j++){
//     WeaponType[j].addEventListener('click', function(){
//         for(var z = 0; z < WeaponType.length; z++){
//             sliderContainer[z].style.display = 'block'

//             if(sliderContainer == WeaponType){
//                 sliderContainer[z].style.display = 'none';
//             }
//         }



        
//     });
// }


