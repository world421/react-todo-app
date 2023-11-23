import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoMain from './TodoMain';
import TodoHeader from './TodoHeader';
import './scss/TodoTemplate.scss';

const TodoTemplate = () => {
  // 서버에 할 일 목록 (json) 을 요청(fetch) 해서 받아와야 함.

  // todos 배열을 상태 관리

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: '산책하기',
      done: true,
    },
    {
      id: 2,
      title: '오늘 주간 신문 읽기',
      done: true,
    },
    {
      id: 3,
      title: '햄버거 만들어먹기',
      done: false,
    },
    {
      id: 4,
      title: 'React 복습하기',
      done: false,
    },
  ]);

  // id값 시퀀스 함수
  const makeNewId = () => {
    if (todos.length === 0) return 1;
    return todos[todos.length - 1].id + 1; // 맨 마지막 할일 객체의 id보다 하나 크게
  };

  /**
   todoInput에게 todoText를 받아오는 함수
   자식 컴포넌트가 부모컴프넌트에게 데이터를 전달 할 때는
   일반 props사용이 불가능.
   부모 컴포넌트에서 함수를 선언 (매개변수 꼭 선언 ) -> props로 함수를 전달
   자식 컴포넌트에서 전달받은 함수를 호출하면서 매개값으로 데이터를 전달.

   */

  const addTodo = (todoText) => {
    const newTodo = {
      id: makeNewId(),
      title: todoText,
      done: false,
    }; // fetch를 이용해서 백엔드에 insert 요청 보내야됨.

    // todos.push(newTodo); (x) ->useState 변수는 setter로 변경
    // setTodos(newTodo); (x)
    // react의 상태변수는 불변성 (immutable) 을 가지기 때문에
    // 기존 상태에서 변경은 불가능 - > 새로운 상태로 만들어서 변경해야 한다.
    setTodos((oldTodos) => {
      // 가장 최신의 상태
      return [...oldTodos, newTodo]; // 배열로 갈아끼워야함 !
    });
  };

  // 할 일 삭제 처리 함수
  const removeTodo = (id) => {
    // 주어진 배열의 값들을 순회하여 조건에 맞는 요소들만 모아서 새로운 배열로 리턴.
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  // 할 일 체크 처리 함수
  const checkTodo = (id) => {
    /* const copytoods = [...todos];
    for (let ctodo of copytoods) {
      if (ctodo.id === id) {
        ctodo.done = !ctodo.done;
      }
    }

    setTodos(copytoods);
    */
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  // 체크가 안된 할일의 개수 카운트 하기
  const countRestTodo = (id) => todos.filter((todo) => !todo.done).length;

  return (
    <div className='TodoTemplate'>
      <TodoHeader count={countRestTodo} />
      <TodoMain
        todoList={todos}
        remove={removeTodo}
        check={checkTodo}
      />
      <TodoInput addTodo={addTodo} />
    </div>
  );
};

export default TodoTemplate;
