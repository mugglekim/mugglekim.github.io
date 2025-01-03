const bgFile=[
  'bg_1.jpg','bg_2.jpg','bg_3.jpg'
];

const setRandomBG=()=>{
  //random으로 이미지 나타내기
  const updateBg=bgFile[Math.floor(Math.random()*bgFile.length)];
  // 배경 이미지 넣는 형식 url('img주소')
  const bgImg=`url(./images/${updateBg})`;
  // main에 추가
  const mainBg=document.querySelector('main');
  mainBg.style.backgroundImage=bgImg;
}
setRandomBG();



