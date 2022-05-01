import { useSelector } from 'react-redux';

import { ITodo } from '../../types/type';
import Todo from '../todo/Todo';

export const TodoList = () => {
  const {data} = useSelector((state:ITodo) => state)

  const completedTodo = data.filter(item=>!item.completed) 
  const inCompletedTodo = data.filter(item=>item.completed)
  
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
