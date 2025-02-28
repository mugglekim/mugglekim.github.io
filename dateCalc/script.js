const setDateSelect=(id,opt)=>{
  const obj=document.querySelector('#'+id);
  opt.forEach((value)=>{
    const elem=document.createElement('option');
    elem.value=value;
    elem.textContent=value;
    obj.appendChild(elem);
  })
}
const addSelectOpt=()=>{
  //start와 target selectdp option을 추가해 주어야 함
  //year: 1990~2050
  //month: 1~12
  //day: 1~31
  const years=Array.from({length:(2050-1990)+1},(_,i)=>{
    return 1990+i;
  });
  setDateSelect('start-year',years);
  setDateSelect('target-year',years);
  const months=Array.from({length:12}, (_,i)=>{
    return i+1;
  });
  setDateSelect('start-month',months);
  setDateSelect('target-month',months);
  const days=Array.from({length:31},(_,i)=>{
    return i+1;
  });
  setDateSelect('start-day',days);
  setDateSelect('target-day',days);
}
const setSelectValue=(id,value)=>{
  const elem=document.querySelector('#'+id);
  elem.value=value;
}
const setTodayAsDefault=()=>{
  const today=new Date();
  const year=today.getFullYear(); //년
  const month=today.getMonth()+1; //월
  const day=today.getDate(); //일
  setSelectValue('start-year',year);
  setSelectValue('start-month',month);
  setSelectValue('start-day',day);
  setSelectValue('target-year',year);
  setSelectValue('target-month',month);
  setSelectValue('target-day',day);
}

const getCalcTime=(id)=>{
  return document.querySelector('#'+id).value;
}

const calcTime=()=>{
  //시작시간 알아오기
  const startDate=new Date(getCalcTime('start-year'),
                            getCalcTime('start-month')-1,
                            getCalcTime('start-day')
                            )
  //목표시간 알아오기
  const targetDate=new Date(getCalcTime('target-year'),
                            getCalcTime('target-month')-1,
                            getCalcTime('target-day')
                            )
  //남은시간 계산하기
  const today=new Date();
  const reTime=targetDate-today;
  //남은 날짜
  const reDays=Math.floor(reTime/(1000*60*60*24));
  const reHour=Math.floor((reTime%(1000*60*60*24))/(1000*60*60));
  const reMinute=Math.floor((reTime%(1000*60*60))/(1000*60));
  const reSecond=Math.floor((reTime%(1000*60))/(1000));
  document.querySelector('.n-days').textContent=`남은 날짜 : ${reDays}일`;
  document.querySelector('.n-times').textContent=`남은 시간 : ${reDays}일 ${reHour}시간 ${reMinute}분 ${reSecond}초`;
  document.querySelector('.time').textContent=`현재 날짜 ${today.toLocaleString()}`;
}
// const init=()=>{
//   //처음 실행되는 함수
//   addSelectOpt(); //1.select 에 option을 추가
//   //2.option에 현재 날짜가 보여지도록
//   //제일 하단에 현재 시간도 표시
//   setTodayAsDefault();
//   //3. 남은시간 계산
//   //언제 실행이 되어야 할까요? 결과보기 버튼을 눌렀을 때 실행이 되어야 함
//   const resultElem=document.querySelector('button');
//   resultElem.addEventListener('click',calcTime);
//   // calcTime();
//   setInterval(calcTime,1000);
// }
const init=()=>{
  // 처음 실행되는 함수
  addSelectOpt(); // select에 option 추가
  setTodayAsDefault(); // 현재 날짜를 기본값으로 설정

  // 결과보기 버튼 클릭 시 남은 시간 계산 실행
  const resultElem=document.querySelector('button');
  resultElem.addEventListener('click', () => {
    calcTime();
    // 버튼을 누른 후 1초마다 갱신 (한 번 눌러야만 실행됨)
    setInterval(calcTime, 1000);
  });
}

window.onload=init;