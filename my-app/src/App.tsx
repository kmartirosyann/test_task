import { FC, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import * as actionTypes from './store/actions/actionTypes';

import { AddItem } from './components/addItem/AddItem';
import { TodoList } from './components/todoList/TodoList';

import './scss/app.scss'

const App:FC =()=> {

  const dispatch = useDispatch()

  useEffect(()=>{
    const getData = window.localStorage.getItem('todoList')
    
    if (getData){
      dispatch({
        type: actionTypes.GET_TODO_DATA,
        payload: JSON.parse(getData) 
      })
    } else {
      dispatch({
        type: actionTypes.GET_TODO_DATA,
        payload: []
      })
    }
  },[dispatch])

  return (
    <div className='app'>
        <AddItem/>
        <TodoList/>
    </div>
  );
}

export default App;
