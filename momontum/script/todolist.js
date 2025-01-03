const TODO_KEY='todo';
let todo_list=[]; //{id, input.value}
const todoForm=document.querySelector('#todoForm');
const inputTodo=document.querySelector('#todoForm>input');
const todoUl=document.querySelector('#todoList');

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
  const btnElem=document.createElement('button');
  liElem.appendChild(spanElem);
  liElem.appendChild(btnElem);
  spanElem.textContent=value;
  btnElem.innerHTML='&times;';
  btnElem.className='todo-btn';
  btnElem.addEventListener('click',handlerDelBtn)
  todoUl.appendChild(liElem);

  //todo_list에 배열 추가 및 로컬스토리지에 저장하기
  saveTodoList(id,value);
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
    obj.forEach((item)=>{
      addTodoList(item.id, item.value);
    });
  }
  todoForm.addEventListener('submit',handlerTodoSubmit);
}
todo_init();