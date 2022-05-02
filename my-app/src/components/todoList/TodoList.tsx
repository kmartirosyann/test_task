import { useEffect } from 'react';

import { useDispatch ,useSelector} from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';

import { ITodo } from '../../types/type';
import Todo from '../todo/Todo';

export const TodoList = () => {
  
  const {data} = useSelector((state:ITodo) => state)

  const completedTodo = data.filter(item=>!item.completed) 
  const inCompletedTodo = data.filter(item=>item.completed)

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
    <div className='hasTodoBox'>
        <h3>Todo</h3>
        {completedTodo && completedTodo.map(todo=>(
          <div key={todo.id}>
            <Todo {...todo}/> 
          </div>  
        ))
        }
        <h3>Completed</h3>
        {inCompletedTodo && inCompletedTodo.map(todo=>(
          <div key={todo.id}>
            <Todo {...todo}/> 
          </div>  
          ))
          }
    </div>
  )
}
