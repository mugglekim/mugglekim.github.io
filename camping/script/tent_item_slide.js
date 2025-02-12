const prevBtn=document.querySelector('.item-btn>img:nth-child(1)');
const nextBtn=document.querySelector('.item-btn>img:nth-child(2)');
const itemUl=document.querySelector('ul.item-box');
const itemLi=document.querySelector('ul.item-box>li');

//변수설정
let current=0;
const SLIDE_COUNT=itemUl.childElementCount; //8
const TOTAL=SLIDE_COUNT-2;
const slide_WIDTH=(document.querySelector('.box-slide').clientWidth)/3;
console.log(slide_WIDTH);

//슬라이드 액션
const SlideAct=(idx)=>{
  itemUl.style.transition='0.5s';
  itemUl.style.transform=`translateX(-${slide_WIDTH*idx}px)`;
}
const resetSlideAct=(idx)=>{
  setTimeout(()=>{
    itemUl.style.transition='none';
    itemUl.style.transform=`translateX(-${slide_WIDTH*idx}px)`;
  },500);
}

//prev 버튼 클릭 핸들러
prevBtn.addEventListener('click',()=>{
  current--;
  SlideAct(current);
  // if(current===0){
  //   current=SLIDE_COUNT;
  // }
  if(current<1){
    current=SLIDE_COUNT;
    resetSlideAct(current);
  }
});

//next 버튼 클릭 핸들러
const handerNextBtn=()=>{
  current++;
  SlideAct(current);
  // if(current===TOTAL-1){
  //   current=1;
  // }
  if(current>SLIDE_COUNT){
    current=1;
    resetSlideAct(current);
  }
}
nextBtn.addEventListener('click',handerNextBtn);

//슬라이드 컨텐츠 앞뒤로 클론 붙이기
const cloneSlide=()=>{
  //자식들에 대한 객체
  const slideGroup=itemUl.children;
  const first=slideGroup[0].cloneNode(true);
  const last=slideGroup[SLIDE_COUNT-1].cloneNode(true);
  //1번 앞에 5번이 오도록
  itemUl.prepend(last);
  //5번 뒤에 1번이 오도록
  itemUl.append(first);
  
}

//슬라이드 width 값을 css에서 가져오기
const setCssValue=()=>{
  //css의 변수값 가져오기
  let result=getComputedStyle(document.documentElement).getPropertyValue('--count');
  document.documentElement.style.setProperty('--count',`${TOTAL}`);
}


//초기값
const init=()=>{
  //처음 실행되는 함수
  cloneSlide();
  setCssValue();
  //슬라이드 초기 위치 설정
  itemUl.style.transform=`translateX(-${slide_WIDTH}px)`;
}
window.onload=init;