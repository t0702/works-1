/* ** trailer Section ** */

   var videoListBtn = document.querySelector('.video-btn'),
   videoListBtnText = document.querySelector('.video-btn span'),
   videoListBackBtn = document.querySelector('.video-btn-back'),
   videoListWrap = document.querySelector('.video-list'),
   videoList = videoListWrap.querySelectorAll('li'),

   video = document.querySelector('.video-area > video'),

   // 트레일러의 링크를 배열로 저장합니다.
   tras = [
       "./video/HC1.mp4",
       "./video/HC2.mp4",
       "./video/HC3.mp4",
       "./video/FFH1.mp4",
       "./video/FFH2.mp4"
   ],

   // 트레일러 목록의 이전버튼
   traPrevBtn = document.querySelector('section.trailer > .video-prev'),
   // 트레일러 목록의 다음버튼
   traNextBtn = document.querySelector('section.trailer > .video-next'),
   traDiscript = 
   // 해당 트레일러에 대한 설명
   document.querySelectorAll('section.trailer > .contents > .discript');

// videoListBtn를 클릭하면 블럭안의 식을 실행합니다.
function OnVideoListBtn(e){
   // console.log("sadasdasd");
   console.log(prevBtn);

   // 토글을 사용하여 버튼을 클릭할때마다 인터랙션이 반복 실행되도록 설정합니다.
   // 트레일러 페이지의 트레일러 더보기 버튼을 클릭시 펼쳐집니다.
   traPrevBtn.classList.toggle('showBtn');
   traNextBtn.classList.toggle('showBtn');
   videoListWrap.classList.toggle('WrapOpen');
   videoListBackBtn.classList.toggle('showBack');
   for(var i = 0; i < videoList.length; i++){
       videoList[i].classList.toggle('ListOpen');
   }
}

// 트레일러 더보기 버튼을 클릭하면 OnVideoListBtn함수를 실행합니다.
videoListBtn.addEventListener('click', OnVideoListBtn);

// 트레일러 목록을 배열객체로 변경합니다.
videoList = Array.prototype.slice.call(videoList);
// 트레일러 설명부분을 배열객체로 변경합니다.
traDiscript = Array.prototype.slice.call(traDiscript);
function OnLinkVideo(e){
    // 클릭한 요소를 $el에 담고 $el의 인덱스를 찾아 id 변수에 하당합니다.
    // 트레일러 목록은 5개이지만 한바퀴를 돌려 회전시키기 위해 5개를 두번씩 배치하여 총 10개의 목록이 있습니다.
    // 때문에 인덱스를 찾고 나머지가 5가 되도록 하여 0~4번까지의 인덱스를 지정합니다
    // 클릭한 요소 영상 링크의 인덱스를 tra에 할당합니다.
    var $el = e.currentTarget, id = videoList.indexOf($el) % 5, tra = tras[id];
    // console.log($el, videoList.indexOf($el) % 5);  

    console.log(id)

    // console.log(tras[id])
    // video의 속성의 src를 tra(영상링크)로 변경합니다.
    video.setAttribute("src", tra);

    for(var i = 0; i < traDiscript.length; i++){
        if(id == i){
            // 인덱스와 i가 가 같다면 i번째 인덱스의 트레일러 설명에 클래스 OnActive를 추가합니다.
            traDiscript[i].classList.add('OnActive');
        }else{
            // 인덱스와 i가 가 같지않다면인덱스의 트레일러 설명에 클래스 OnActive를 제거합니다.
            traDiscript[i].classList.remove('OnActive');
        }
    }

}

for(var i = 0; i < videoList.length; i++){
   videoList[i].addEventListener('click', OnLinkVideo);
}

var deg = 45;
function OnPrev(){
   deg += 36;
   videoListWrap.style.transform = 'translate(42%, 42%) rotate(' + deg + 'deg)';
   console.log('prev -36deg');
}
function OnNext(){
   deg -= 36;
   videoListWrap.style.transform = 'translate(42%, 42%) rotate(' + deg + 'deg)';
   console.log('next36deg');
}

traPrevBtn.addEventListener('click', OnPrev);
traNextBtn.addEventListener('click', OnNext);