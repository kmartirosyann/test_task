import React,{FC, memo, useState} from 'react';

import { useDispatch } from 'react-redux';
import { loadTodoList,deleteTodoItems,editCheckBox } from '../../store/actions/actionRequest';

import { TodoItems} from '../../types/type';

import '../../scss/todoItemBox.scss';


const Todo:FC<TodoItems> = (props) => {
  const {completed,title,id} = props

  const [text,setText] = useState(title)

  const dispatch = useDispatch()

  const handleChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setText(e.target.value)
  }

  const handleUpdate =()=>{
    dispatch(loadTodoList(id,text)) 
  }

  const removeTodoItem =()=>{
    dispatch(deleteTodoItems(id))
  }

  const changeCheck =()=>{
    dispatch(editCheckBox(id))
  }

  return (
    <div>
      <ul id="incomplete-tasks">
        <li>
          <input type="checkbox"checked={completed} onChange={changeCheck}/>
          <input type="text" value={text} onChange={handleChange}/>
          <div>
          <button className="edit" onClick={handleUpdate}>Edit</button>
          <button className="delete" onClick={removeTodoItem}>Delete</button>
          </div>
      </li>        
      </ul>
    </div>
  )
}

export default memo(Todo)