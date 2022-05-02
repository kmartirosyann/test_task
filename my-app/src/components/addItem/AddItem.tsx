import React, {FC, useState } from 'react';

import * as actionTypes from '../../store/actions/actionTypes';
import { useDispatch } from 'react-redux';

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
     dispatch({
       type: actionTypes.ADD_ITEM_TODO,
       payload:todoList
     })
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
