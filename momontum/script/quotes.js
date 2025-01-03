const quotes=[
  {
    quote:'“문제점을 찾지 말고 해결책을 찾으라.”',
    author:'헨리포드'
  },
  {
    quote:'“내일을 실현하는데 유일한 한계는 오늘의 의심이다.”',
    author:'프랭클린D.루즈벨트'
  },
  {
    quote:'“고통이 남기고 간 뒤를 보라!<br>고난이 지나면 반드시 기쁨이 스며든다.”',
    author:'괴테'
  },
  {
    quote:'“행복은 습관이다. 그것을 몸에 지니라.”',
    author:'허버드'
  },
  {
    quote:'“절대 어제를 후회하지 마라.<br>인생은 ‘오늘의 나’ 안에 있고 내일은 스스로 만드는 것이다.”',
    author:'L.론허바드'
  }
];
//랜덤 : Math.random() : 0~1 사이의 값으로 출력됨
//랜덤으로 출력하고자 하는 객체의 길이값을 곱해주고, 소수점은 버려야함
const num=Math.floor(Math.random()*quotes.length);
const today=quotes[num];

const quoteTxt=document.querySelector('.quote>span:first-child');
const quotePerson=document.querySelector('.quote>span:last-child');
quoteTxt.innerHTML=today.quote;
quotePerson.textContent=today.author;
