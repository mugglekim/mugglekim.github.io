const todayTxt=document.querySelector('.left>.today');
const clockElem=document.querySelector('h1');


const getClock=()=>{
  //시계설정
  const now=new Date(); //현재시간
  //년,월,일 가져오기
  const year=String(now.getFullYear());
  const month=String(now.getMonth()+1);
  const day=String(now.getDate());
  const dayStr=`${year}/${month}/${day}`;
  todayTxt.textContent=dayStr;
  //시,분,초 가져오기
  //class=clock인 객체의 텍스트를 변경
  const hours=String(now.getHours()).padStart(2,'0');
  const minutes=String(now.getMinutes()).padStart(2,'0');
  const seconds=String(now.getSeconds()).padStart(2,'0');
  const timeStr=`${hours}:${minutes}:${seconds}`;
  clockElem.textContent=timeStr;
};


getClock();
setInterval(getClock,1000);
