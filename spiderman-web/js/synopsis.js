/* ** Synopsis Section ** */

   var cardBox = document.querySelector('section.synopsis > div.cardbox'),
   homeComing = document.querySelector('section.synopsis > .cardbox > .cardwrap > .homecoming'),
   hcText = document.querySelector('section.synopsis > .cardbox > .cardwrap > div.homecoming > .card-text'),

   ffHome = document.querySelector('section.synopsis > .cardbox > .cardwrap > .ffhome'),
   ffText = document.querySelector('section.synopsis > .cardbox > .cardwrap > div.ffhome > .card-text'),
   hcSynopsis = document.querySelector('section.synopsis > .hc-synopsis'),
   hcSynopText = document.querySelector('section.synopsis > .hc-synopsis > .text-area > .text-inner'),

   ffhSynopsis = document.querySelector('section.synopsis > .ffh-synopsis'),
   ffhSynopText = document.querySelector('section.synopsis > .ffh-synopsis > .text-area > .text-inner'),

   graBg = document.querySelectorAll('section.synopsis > .cardbox > .cardwrap .gra-bg'),

   backBtn = document.querySelector('section.synopsis > .back-btn');

// 홈커밍 시놉시스 클릭시 확장 (시놉시스 열기) 함수
function openHC(){
   console.log('Open Homecoming');

   // show 클래스를 추가한다.
   homeComing.classList.add('show');
   

   /* card area */
   // 홈커밍 카드가 확장되고 안의 요소들을 안보이게 합니다.
   homeComing.style.width = "100%";
   homeComing.style.height = "100%";
   homeComing.style.right = "0";
   homeComing.style.top = "50%";
   homeComing.style.transform = "translate(0, -50%)";
   homeComing.style.border = "none";
   hcText.style.visibility = "hidden";
   hcText.style.opacity = 0;
   hcText.style.transition = '.4s';
   graBg[0].style.visibility = "hidden";
   graBg[0].style.opacity = 0;
   graBg[0].style.transition = '.4s';

   // 홈커밍 카드가 열릴 때 파프롬홈 시놉시스는 숨깁니다.
   ffHome.style.display = 'none';

   /* synopsis area */
   // 홈커밍의 시놉시스가 등장하는 인터랙션입니다.
   hcSynopsis.style.visibility = 'visible';
   hcSynopsis.style.opacity = 1;
   hcSynopsis.style.transition = '.4s';
   hcSynopText.style.right = '50%';
   hcSynopText.style.opacity = 1;
   hcSynopText.style.transition = '.3s ease-out';
   hcSynopText.style.transitionDelay = '.3s';

   /* close btn */
   // 홈커밍 카드가 열리면 시놉시스 닫기 버튼를 보이게 합니다.
   backBtn.style.opacity = 1;
   backBtn.style.pointerEvents = 'auto';
   backBtn.style.transition = '.4s';
}

// 파프롬홈 시놉시스 클릭시 확장 (시놉시스 열기) 함수
function openFFH(){
   console.log('Open far from home');
   ffHome.classList.add('show');

   /* card area */
   // 파프롬홈 카드가 확장되고 안의 요소들을 안보이게 합니다.
   ffHome.style.width = "100%";
   ffHome.style.height = "100%";
   ffHome.style.left = "0";
   ffHome.style.top = "50%";
   ffHome.style.transform = "translate(0, -50%)";
   ffHome.style.border = "none";
   ffHome.style.backgroundSize = "100%";
   ffHome.style.backgroundPosition = "50% 57%";
   ffText.style.visibility = "hidden";
   ffText.style.opacity = 0;
   ffText.style.transition = '.4s';
   graBg[1].style.visibility = "hidden";
   graBg[1].style.opacity = 0;
   graBg[1].style.transition = '.4s';

   // 파프롬홈 카드가 열릴 때 파프롬홈 시놉시스는 숨깁니다.
   homeComing.style.display = 'none';

   /* synopsis area */
   // 파프롬홈 시놉시스가 등장하는 인터랙션입니다.
   ffhSynopsis.style.visibility = 'visible';
   ffhSynopsis.style.opacity = 1;
   ffhSynopsis.style.transition = '.4s';
   ffhSynopText.style.left = '50%';
   ffhSynopText.style.opacity = 1;
   ffhSynopText.style.transition = '.3s ease-out';
   ffhSynopText.style.transitionDelay = '.3s';

   /* close btn */
   // 파프롬홈 카드가 열리면 시놉시스 닫기 버튼를 보이게 합니다.
   backBtn.style.opacity = 1;
   backBtn.style.pointerEvents = 'auto';
   backBtn.style.transition = '.4s';
}
// 홈커밍에 클릭 마우스 이벤트를 적용합니다.
homeComing.addEventListener('click', openHC);
// 파프롬홈에 클릭 마우스 이벤트를 적용합니다.
ffHome.addEventListener('click', openFFH);

// 시놉시스를 닫을 때 실행될 함수
function closeSynop(e){
   /* 홈커밍 시놉시스 닫을 때  */
   // show 클래스를 갖고있다면 블럭 안의 식을 실행합니다.
   if(homeComing.classList.contains('show')){
       console.log('Close Homecoming');
       // show 클래스를 제거합니다.
       homeComing.classList.remove('show');

       /* card area */
       homeComing.style.width = '340px';
       homeComing.style.height = '580px';
       homeComing.style.right = "5%";
       homeComing.style.border = "1px solid #ccc";
       hcText.style.visibility = "visible";
       hcText.style.opacity = 1;
       graBg[0].style.visibility = "visible";
       graBg[0].style.opacity = 1;
       ffHome.style.display = 'block';
       
       /* synopsis area */
       hcSynopsis.style.opacity = 0;
       hcSynopsis.style.transition = '.3s';
       hcSynopText.style.opacity = 0;
       hcSynopText.style.right = '150%';
       hcSynopText.style.transition = '.3s ease-out';
       hcSynopsis.style.pointerEvents = 'none';

       /* btn */
       backBtn.style.opacity = 0;
       hcSynopsis.style.pointerEvents = 'none';
       
   } 
   /* 파프롬홈 시놉시스 닫을 때  */
   // show 클래스를 갖고있다면 블럭 안의 식을 실행합니다.
   else if(ffHome.classList.contains('show')){
       console.log('Close Far From Home');
       // show 클래스를 제거합니다.
       homeComing.classList.remove('show');

       /* card area */
       ffHome.style.width = '340px';
       ffHome.style.height = '580px';
       ffHome.style.left = "5%";
       ffHome.style.border = "1px solid #ccc";
       ffText.style.visibility = "visible";
       ffText.style.opacity = 1;
       graBg[1].style.visibility = "visible";
       graBg[1].style.opacity = 1;
       homeComing.style.display = 'block';

       /* synopsis area */
       ffhSynopsis.style.opacity = 0;
       ffhSynopsis.style.transition = '.3s';
       ffhSynopText.style.opacity = 0;
       ffhSynopText.style.left = '150%';
       ffhSynopText.style.transition = '.3s ease-out';
       ffhSynopsis.style.pointerEvents = 'none';

       /* btn */
       backBtn.style.opacity = 0;
       hcSynopsis.style.pointerEvents = 'none';
   }
}
// 닫기 버튼에 마우스클릭 이벤트를 설정합니다.
backBtn.addEventListener('click', closeSynop);
