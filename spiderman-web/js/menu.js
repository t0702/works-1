/*  ** Menu Control ** */
/* 메뉴 페이지를 컨트롤합니다. */

var boxList = document.querySelectorAll('.box-list > section'),
    boxListWrap = document.querySelector('.box-list'),
    
    closeBtn = document.querySelector('header .hamburger'),
    closeBtnEls = document.querySelectorAll('header .hamburger > div'),
    menuTitle = document.querySelector('.top-menu > span'),
    logoLink = document.querySelector('header > nav > h1 ');


// boxList 변수에는 메뉴의 각 페이지
// boxList 변수를 배열 객체로 변환합니다.
boxList = Array.prototype.slice.call(boxList);

// boxList를 클릭하면 실행할 함수
function selectBox(e){
    // 마우스 이벤트가 발생한 타겟의 인덱스를 idx 변수에 할당합니다.
    var el = e.currentTarget, idx = boxList.indexOf(el);

    // boxList를 클릭하면 zoom 클래스를 추가 합니다.
    boxList[idx].classList.add('zoom');

    // 함수가 실행되면 boxList를 감싸고 있는 요소의 width값을 100vw로 설정합니다.
    boxListWrap.style.width = '100vw';

    // 메뉴 아이콘 옆의 해당 페이지명을 변경합니다.
    // boxList 요소가 zoom 클래스를 포함하고 있다면
    if(boxList[idx].classList.contains('zoom')){

        // boxList n번째 인덱스가 zoom 클래스를 포함하고있다면
        // menuTitle의 HTML을 해당 페이지명으로 변경합니다.
        if(boxList[0].classList.contains('zoom')){
            menuTitle.innerHTML = 'HOME';
        }
        if(boxList[1].classList.contains('zoom')){
            menuTitle.innerHTML = 'SYNOPSIS';
        }
        if(boxList[2].classList.contains('zoom')){
            menuTitle.innerHTML = 'CAST';
        }
        if(boxList[3].classList.contains('zoom')){
            menuTitle.innerHTML = 'TRAILER';
        }   
    }

    /* Hamburger Btn Ani */
    // 각 boxList를 선택 시 햄버거 메뉴 아이콘을 변형합니다 (애니메이션).
    closeBtnEls[0].style.top = '0px';
    closeBtnEls[0].style.transform = 'rotate(0)';
    closeBtnEls[0].style.transition = 'transform .3s';
    closeBtnEls[0].style.transition = '.3s';

    closeBtnEls[1].style.transform = 'rotate(0)';
    closeBtnEls[1].style.opacity = '1';
    closeBtnEls[1].style.transition = '.3s';

    closeBtnEls[2].style.top = '20px';
    closeBtnEls[2].style.transform = 'rotate(0)';
    closeBtnEls[2].style.transition = 'transform.3s';
    closeBtnEls[2].style.transition = '.3s';
}

for(var i = 0; i < boxList.length; i++){
    // boxList를 클릭하면 selectBox 함수를 실행합니다.
    boxList[i].addEventListener('click', selectBox);
}

// 메뉴 닫기 버튼 요소들을 배열객체로 변경합니다.
closeBtnEls = Array.prototype.slice.call(closeBtnEls);


// 메뉴 닫기 버튼을 클릭시 실행될 함수 
function closeMenu(){
    for(var i = 0; i < boxList.length; i++){

        // 닫기 버튼을 누르면 boxList의 zoom 클래스를 제거합니다.
        boxList[i].classList.remove('zoom');
        // boxList를 감싸고있는 요소의 width를 98vw로 변경합니다.
        boxListWrap.style.width = '98vw';
        // 각 페이지에서 닫기버튼을 누르면 메뉴버튼 옆의 페이지 명을 MENU로 변경합니다.
        menuTitle.innerHTML = 'MENU';

        /* Hamburger Open Ani */
        // 햄버거 닫기 버튼을 누르면 실행될 애니메이션
        closeBtnEls[0].style.top = '10px';
        closeBtnEls[0].style.transform = 'rotate(45deg)';
        closeBtnEls[0].style.transition = 'top .2s';
        closeBtnEls[0].style.transition = 'transform .2s';

        closeBtnEls[1].style.transform = 'rotate(45deg)';
        closeBtnEls[1].style.opacity = '0';
        closeBtnEls[1].style.transition = '.3s';
        
        closeBtnEls[2].style.top = '10px';
        closeBtnEls[2].style.transform = 'rotate(-45deg)';
        closeBtnEls[2].style.transition = 'top .2s';
        closeBtnEls[2].style.transition = 'transform .2s';

        console.log(closeBtnEls);
    }
    // 시놉시스 페이지의 홈커밍 시놉시스 닫기
    // homeComing의 show 클래스를 제거합니다.
    homeComing.classList.remove('show');


    /* 시놉시스 페이지를 나갈때 자식 요소들 가리기 (홈커밍) */
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
    backBtn.style.pointerEvents = 'none';
    hcSynopsis.style.pointerEvents = 'none';

    /* 시놉시스 페이지를 나갈때 자식 요소들 가리기 (파프롬홈) */
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

    
    // 시놉시스 페이지의 홈커밍 시놉시스 닫기
    homeComing.classList.remove('show');


    // 캐스트 페이지를 닫을 때
    for(var i = 0; i < slideLists.length; i++){
        // 캐스트 페이지의 요소들을 보이지 않도록 설정합니다.
        profiles[i].style.visibility = 'hidden';
        profiles[0].style.visibility = 'visible';
        slideLists[i].style.opacity = 0;
        slideLists[0].style.opacity = 1;
 
        thumbLists[i].classList.remove('selected');
        thumbLists[0].classList.add('selected');
    }

    // 캐스트 페이지를 닫을때 캐스트 페이지의 첫번째 슬라이드로 다시 돌아오도록 설정합니다.
    count = 0;


    /* * trailer 목록까지 닫기 * */
    traPrevBtn.classList.remove('showBtn');
    traNextBtn.classList.remove('showBtn');
    videoListWrap.classList.remove('WrapOpen');
    videoListBackBtn.classList.remove('showBack');
    for(var i = 0; i < videoList.length; i++){
        videoList[i].classList.remove('ListOpen');
    }
    boxListWrap.style.width = '100vw';
    
}
// 닫기 버튼에 클릭 마우스 이벤트를 적용합니다.
closeBtn.addEventListener('click', closeMenu);
