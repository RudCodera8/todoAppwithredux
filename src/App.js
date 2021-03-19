import React from 'react';
import Input from './components/Input';
import './App.css';
import './components/TodoItem'
import TodoItem from './components/TodoItem';
import {useSelector} from 'react-redux';
import {selectTodoList} from './features/todoSlice'



function App() {

const todoList = useSelector(selectTodoList)

  return (
    <div className="App">
        {/*Todolist*/}
        <div className = 'App__container'>
          <div className = 'App__todoContainer'>
              {
                todoList.map(item => (

                  <TodoItem 
                  name={item.item}
                  done={item.done}
                  id={item.id}
                  />
                ) )  



              }
            </div>
          </div>
        {/*done*/}
        {/*input*/}
        <Input />
    </div>
  );
}

export default App;
