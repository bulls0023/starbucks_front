const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});
searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});



const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function(){
    console.log(window.scrollY);
    if(window.scrollY > 500){
        //배지 숨기기
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        }); //gsap.to(요소, 지속시간, 옵션)
    }else{
        //배지 보여주기
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
    }
}, 300)); //300 = 300밀리세컨즈를 의미 즉 0.3초, 윈도우 스크롤 이벤트 발생 시 0.3초 이상으로 부하 방지 -> _.throttle()이 해당 기능수행
//_.throttle(함수, 시간)

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7, // 0.7  1.4  2.1  2.8
        opacity: 1
    });//gsap.to(요소, 지속시간, 옵션)
});

//스크롤

new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true, //자동재생
    loop: true //무한반복
});

//광고

new Swiper('.promotion .swiper-container', {
    slidesPerView: 3, //한번에 보여줄 슬라이드 개수
    spaceBetween: 10, //슬라이드 사이 여백
    centeredSlides: true, //1번 슬라이드가 가운데 보이게끔
    loop: true,
    autoplay: {
        delay: 5000
    },
    pagination: {
        el:'.promotion .swiper-pagination', //페이지 번호 요소 선택자
        clickable: true //사용자의 페이지 번호 요소 제어
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});

//스타벅스 프로모션

const prmotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false; //프로모션 영역이 보여졌냐
promotionToggleBtn.addEventListener('click', function(){
    isHidePromotion = !isHidePromotion //!를 사용해서 반대값을 표현
    if(isHidePromotion){
        //숨김처리
        prmotionEl.classList.add('hide');
    }else{
        //보임처리
        prmotionEl.classList.remove('hide');
    }
})

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }
  

function floatingObject(selector, delay, size){
    gasp.to(selector, random(1.5, 2.5), {
        y: size,
        repeat: -1,
        yoyo: true,
        ease: Power1.easeInOut,
        delay: random()
    });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 15);