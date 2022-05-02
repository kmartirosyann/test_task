import { FC } from 'react';

import { AddItem } from './components/addItem/AddItem';
import { TodoList } from './components/todoList/TodoList';

import './scss/app.scss'

const App:FC =()=> {

  return (
    <div className='app'>
        <AddItem/>
        <TodoList/>
    </div>
  )
}

export default App;
