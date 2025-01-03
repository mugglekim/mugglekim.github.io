const loginForm=document.querySelector('#loginForm');
const inputLogin=document.querySelector('#loginForm>input');
const greeting=document.querySelector('.greeting');
const logoutBtn=document.querySelector('.logout');

let todo_list=[]; //{id, input.value}
const todoForm=document.querySelector('#todoForm');
const inputTodo=document.querySelector('#todoForm>input');
const todoUl=document.querySelector('#todoList');

const LOGIN_KEY='loginName';
const TODO_KEY='todo';


const saveLoginName=(strInput)=>{
  localStorage.setItem(LOGIN_KEY,strInput);
}
const loadLoginName=()=>{
  return localStorage.getItem(LOGIN_KEY);
}
const updateTxt=()=>{
  const greetingTxt=document.querySelector('.greeting>span')
  if(todo_list.length>0){
    greetingTxt.innerHTML=`<span>👇<strong>당신이 할일</strong>이에요.</span>`;
  } else{
    greetingTxt.innerHTML=`<span>👇<strong>할일을 추가</strong>하세요.</span>`;
  }
}
const printLoginName=(strName)=>{
  todoForm.classList.remove('hidden');
  todoUl.classList.remove('hidden');
  logoutBtn.classList.remove('hidden');
  loginForm.classList.add('hidden');
  greeting.innerHTML=`Hello, ${strName}😎!<br><span></span>`;
  updateTxt();
}

const handlerSubmit=(event)=>{
  event.preventDefault(); //기능초기화
  printLoginName(inputLogin.value);
  saveLoginName(inputLogin.value);
  inputLogin.value=null;
}
const logOut=()=>{
  localStorage.removeItem(LOGIN_KEY);
  greeting.innerHTML=`Welcome😊!<br><span><strong>당신은 누구</strong>인가요?</span>`;
  todoForm.classList.add('hidden');
  todoUl.classList.add('hidden');
  logoutBtn.classList.add('hidden');
  loginForm.classList.remove('hidden');
}

const storageSave=()=>{
  //제이썬 사용하여 문자열로 바꾸기
  const strObj=JSON.stringify(todo_list);
  localStorage.setItem(TODO_KEY,strObj);
}
const storageLoad=()=>{
  return localStorage.getItem(TODO_KEY);
}
const saveTodoList=(num,txt)=>{
  const obj={id:num, value:txt}; //객체로 저장하기
  todo_list.push(obj); //배열에 추가하기
  storageSave();
}

const handlerDelBtn=(event)=>{
  //선택한 this 알아오기 target 사용
  // console.log(event.target);
  //부모요소 알아오기 parentElement
  // console.log(event.target.parentElement);

  //부모요소의 아이디 알아오기
  const delId=event.target.parentElement.id;
  //타켓 부모요소의 아이디와 같지 않은 객체들로만 새로 배열만들기
  todo_list=todo_list.filter((item)=>{
    return delId!=item.id;
  });

updateTxt();

  //타켓 부모요소 삭제
  event.target.parentElement.remove();
  //스토리지에 저장
  storageSave();
}

const addTodoList=(id, value)=>{
  //li로 추가
  // console.log(id, value);
  const liElem=document.createElement('li');
  liElem.id=id;
  const spanElem=document.createElement('span');
  const pElem=document.createElement('p');
  const btnElem=document.createElement('button');
  liElem.appendChild(spanElem);
  liElem.appendChild(pElem);
  liElem.appendChild(btnElem);
  spanElem.className='check-box';
  pElem.textContent=value;
  pElem.style.display='inline-block';
  btnElem.className='trash';
  btnElem.addEventListener('click',handlerDelBtn);
  todoUl.appendChild(liElem);
  //todo_list에 배열 추가 및 로컬스토리지에 저장하기
  saveTodoList(id,value);
  //체크박스 클릭시 체크이미지로 변경, 텍스트 컬러 변경
  spanElem.addEventListener('click',()=>{
    spanElem.classList.toggle('checked');
    pElem.classList.toggle('font-gray');
  });
  updateTxt();
}

const handlerTodoSubmit=(event)=>{
  event.preventDefault(); //기능초기화
  let value=inputTodo.value;
  inputTodo.value=null;
  console.log(value);
  addTodoList(Date.now(),value);
}
const todo_init=()=>{
  //로컬스토리지에 저장되어 있는 것을 불러오기
  let loadTodo=storageLoad();
  if(loadTodo){
    //문자열로 저장했던 것을 제이썬을 사용해 다시 배열로 가져오기
    const obj=JSON.parse(loadTodo);
    console.log(obj);
    obj.forEach((item)=>{
      addTodoList(item.id, item.value);
    });
  }
  todoForm.addEventListener('submit',handlerTodoSubmit);
  updateTxt();
}
todo_init();


const init=()=>{
  //처음 실행되는 함수
  //저장된 데이터 확인
  let loginName=loadLoginName();
  if(loginName){
    //화면에 출력
    printLoginName(loginName);
  } else{
    loginForm.addEventListener('submit',handlerSubmit);
  }
  logoutBtn.addEventListener('click',logOut);
}
window.onload=init;