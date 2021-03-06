import React, {FC, useState } from 'react';

import { useDispatch } from 'react-redux';
import {addTodoListItem} from '../../store/actions/actionRequest'

import { uId } from '../../util/uid';

import '../../scss/addItem.scss';

export const AddItem:FC = () => {

  const [title,setTitle] = useState<string>('')

  const dispatch = useDispatch()

  const changeHandle =(e:React.ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.target.value)
  }

  const todoList = {
    id:uId(),
    title,
    completed:false
  }

  const handleSubmit =()=>{
    if(title !==''){ 
     dispatch(addTodoListItem(todoList))
     setTitle('')
    }
  }

  return (
    <div className='formBox'>
      <label htmlFor='new-task'>add item</label>
      <div>
        <input 
          id='new-task'
          type='text' 
          name='title' 
          onChange={changeHandle} 
          value = {title}
        />
        <button onClick={handleSubmit}>Add</button>
      </div>
    </div>
  )
}
