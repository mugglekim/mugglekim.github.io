const prevBtn=document.querySelector('.item-btn>img:nth-child(1)');
const nextBtn=document.querySelector('.item-btn>img:nth-child(2)');
const imgSlider=document.querySelector('ul.item-box');
const slideGroup=imgSlider.children;

let current=0;
const SLIDE_COUNT=imgSlider.childElementCount/3; //8
const IMG_WIDTH=document.querySelector('ul.item-box').clientWidth/SLIDE_COUNT;

//슬라이드 액션
const SlideAct=(idx)=>{
  imgSlider.style.transition='0.3s';
  imgSlider.style.transform=`translateX(-${IMG_WIDTH*idx}px)`;
}
const resetSlideAct=(idx)=>{
  setTimeout(()=>{
    imgSlider.style.transition='0.3s';
    imgSlider.style.transform=`translateX(-${IMG_WIDTH*idx}px)`;
  },100);
}

//prev 버튼 클릭 핸들러
prevBtn.addEventListener('click',()=>{
  current--;
  SlideAct(current);
  // if(current===0){
  //   current=SLIDE_COUNT;
  // }
  if(current<0){
    current=SLIDE_COUNT-1;
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
  if(current>=SLIDE_COUNT){
    current=0;
    resetSlideAct(current);
  }
}
nextBtn.addEventListener('click',handerNextBtn);