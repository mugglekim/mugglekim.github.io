const prevBtn=document.querySelector('.item-btn>img:nth-child(1)');
const nextBtn=document.querySelector('.item-btn>img:nth-child(2)');
const slideWrap=document.querySelector('.box-slide');
const slideUl=document.querySelector('ul.item-box');
const itemLi=document.querySelector('ul.item-box>li');

let current=1;
const SLIDE_COUNT=slideUl.childElementCount; //8
const TOTAL=SLIDE_COUNT+2;
const slide_WIDTH=itemLi+(document.querySelector('.slideWarp').clientWidth*0.01);

//슬라이드 액션
const SlideAct=(idx)=>{
  slideUl.style.transition='0.5s';
  slideUl.style.transform=`translateX(-${slide_WIDTH*idx}px)`;
}
const resetSlideAct=(idx)=>{
  setTimeout(()=>{
    slideUl.style.transition='none';
    slideUl.style.transform=`translateX(-${slide_WIDTH*idx}px)`;
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
  const slideGroup=slideUl.children;
  const first=slideGroup[0].cloneNode(true);
  const last=slideGroup[SLIDE_COUNT-1].cloneNode(true);
  //1번 앞에 5번이 오도록
  slideUl.prepend(last);
  //5번 뒤에 1번이 오도록
  slideUl.append(first);
}

const init=()=>{
  cloneSlide();
}
window.onload=init;