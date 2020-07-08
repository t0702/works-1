/* ** Cast Section ** */

var slide = document.querySelector('section.cast > div.slider'),
   slideLists = document.querySelectorAll('section.cast > .slider > ul > li');
   thumbLists = document.querySelectorAll('section.cast > .contents-area > .slide-list > li'),
   prevBtn = document.querySelector('section.cast > .contents-area > .arrow > .prev'),
   nextBtn = document.querySelector('section.cast > .contents-area > .arrow > .next'),
   profiles = document.querySelectorAll('section.cast > .contents-area > .profile-area > .profile');
   
var count = 0;

// 캐스트 슬라이드 이전버튼 클릭 시 실행될 함수
function OnClickPrev(e){

   console.log('prev');
   // 이전버튼을 클릭하면 count가 -1이 되도록 설정하여 
   // 현재 인덱스는 숨기고 이전 인덱스가 보이도록 설정합니다.
   count--;

   // 만약 count가 -1이 됐다면 가장 마지막 페이지로 이동하도록
   // count를 3으로 변경합니다. 
   if(count == -1){
       count = 3;
   }

   for(var i = 0; i < slideLists.length; i++){
       // 해당 페이지 주인공의 프로필 요소을 숨기고
       profiles[i].style.visibility = 'hidden';
       // 현재 슬라이드에서 -1 된 슬라이드는 보이도록 설정합니다. 
       profiles[count].style.visibility = 'visible';
       // 현재 페이지의 오퍼시티를 0으로 변경합니다.
       slideLists[i].style.opacity = 0;
       // 현재 슬라이드에서 -1 된 슬라이드는 보이도록 설정합니다. 
       slideLists[count].style.opacity = 1;

       // 썸네일 요소에 클래스 selected 를 추가합니다.
        // sekected 욧ㅎ거 추가되면 썸네일의 border그 흰색이 되니다. 
       thumbLists[i].classList.remove('selected');
       thumbLists[count].classList.add('selected');
   }
   
}

// 캐스트 슬라이드 다음버튼 클릭 시 실행될 함수
function OnClickNext(){
   console.log('next');

   // 이전버튼을 클릭하면 count가 +1 이 되도록 설정하여 
   // 현재 인덱스는 숨기고 이전 인덱스가 보이도록 설정합니다.
   count++;
   // 만약 count가 1이 됐다면 가장 처음 페이지로 이동하도록
   // count를 0으로 변경합니다. 
   if(count == 4){
       count = 0;
   }
   // 이전버튼 클릭과 같는 방식입니다.
   for(var i = 0; i < slideLists.length; i++){
       profiles[i].style.visibility = 'hidden';
       profiles[count].style.visibility = 'visible';
       slideLists[i].style.opacity = 0;
       slideLists[count].style.opacity = 1;

       thumbLists[i].classList.remove('selected');
       thumbLists[count].classList.add('selected');
   }
   
}
// 이전 버튼을 클릭하면 OnCLickPRev 함수를 실행합니다.
prevBtn.addEventListener('click',OnClickPrev);
// 다음 버튼을 클릭하면 OnCLickPRev 함수를 실행합니다.
nextBtn.addEventListener('click',OnClickNext);

// 캐스트의 썸네일을 누르면 해당 캐스트의 슬라이드가 보여집니다.
// thumbLists 변수를 배열 객체로 변경합니다.
thumbLists = Array.prototype.slice.call(thumbLists);
function OnClickThumb(e){
   for(var i = 0; i < thumbLists.length; i++){
       // 마우스 이벤트가발생한 thumbList의 인덱스르 찾아 index 변수에 할당합니다.
       var el = e.currentTarget, index = thumbLists.indexOf(el);

       // 프로필과 슬라이드를 가리고 
       // 클릭한 캐스트의 슬라이드와 프로필을 보여지도록 설정합니다.
       profiles[i].style.visibility = 'hidden';
       profiles[index].style.visibility = 'visible';
       slideLists[i].style.opacity = 0;
       slideLists[index].style.opacity = 1;

       // i 번째 썸네일의 클래스 selected를 제거합니다.
       thumbLists[i].classList.remove('selected');
       // 클릭한 썸네일의 클래스 selected를 추가합니다.
       thumbLists[index].classList.add('selected');
   }
}

for(var i = 0; i < thumbLists.length; i++){
    // 썸네일을 클릭하면 OnClickThumb함수를 실행합니다.
   thumbLists[i].addEventListener('click',OnClickThumb);
}

