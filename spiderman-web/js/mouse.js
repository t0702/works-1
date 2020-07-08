/* Main Big Title Move */
// 메인페이지의 빅타이포에 마우스를 움직일때마다 마우스의 방향을 따라 움직이는 스크립트입니다.

var BigTitle = document.querySelector('.big-title'),
    home = document.querySelector('section.home');

function TitleMove(e){
    // 클라이언트 영역 내의 x좌표를 mouseX 변수에 할당합니다.
    var mouseX = e.clientX;
    // 클라이언트 영역 내의 y좌표를 mouseY 변수에 할당합니다.
    var mouseY = e.clientY;
    
    // 마우스가 이동될 거리를 posX에 대입합니다.
    // posX와 posY 변수를 생성해 빅타이포의 위치(left, top)값을 변경합니다.
    // posX > 변마우스의 x좌표의 2를 곱한 x좌표에서 570으로 나눈 만큼만 이동하도록 설정
    // posY > 마우스의 y좌표의 3를 곱한 y좌표에서 670으로 나눈 만큼만 이동하도록 설정
    // top / left값 더해줍니다. (뷰포트를 사용할 것)
    var posX = ((2 * mouseX) / 570) + 47;
    var posY = ((3 * mouseY) / 670) + 53;
    console.log(posX);
    
    // 뷰포트를 사용하여 어떤 해상도에서도 같은 비율로 움직일 수 있도록 설정합니다.
    BigTitle.style.left = posX +'vw';
    BigTitle.style.top = posY +'vh';
};

home.addEventListener('mousemove', TitleMove);
