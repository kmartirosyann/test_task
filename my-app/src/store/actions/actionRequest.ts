
import { ITodo, TodoItems } from "../../types/type"
import * as actionTypes from './actionTypes'

const postRequestTodo = (state:ITodo)=>{
    return new Promise((resolve,reject)=>{
        window.localStorage.setItem('todoList',JSON.stringify(state.data))
        setTimeout(()=>resolve(JSON.parse(window.localStorage.getItem('todoList')!) ))
    })
}

export const editTodoTitle =(id:string,title:string,state:ITodo)=>{
    state.data.map((item :TodoItems)=> item.id === id ? item.title = title : item)
   return postRequestTodo(state)
}

export const loadTodoList =(id:string,title:string)=>{
    return (dispatch:any,getState:any)=>{
        return editTodoTitle(id,title,getState()).then(res=>{
            dispatch({
                type:actionTypes.EDIT_TODO_ITEM_TEXT,
                payload:res
            })
        })
    }
}

export const remove =(id:string,state:ITodo)=>{
   state.data = state.data.filter((item:TodoItems)=>{
        return item.id !== id
    })
    return postRequestTodo(state)
}

export const deleteTodoItems = (id:string)=>{
    return (dispatch:any,getState:any)=>{
        return remove(id,getState()) 
            .then(res=>dispatch({
                type:actionTypes.DELETE_TODO_ITEM,
                payload:res
            }))
        
    }
}

const updateCheckbox =(id:string,state:ITodo)=>{
    state.data.map((item:TodoItems)=>item.id === id ? item.completed = !item.completed : item)
    return postRequestTodo(state)
}

export const editCheckBox =(id:string)=>{
    return (dispatch:any,getState:any)=>{
        return updateCheckbox(id,getState())     
            .then(res=>dispatch({
                type:actionTypes.EDIT_TODO_ITEM_INCOMPLETE,
                payload:res
            }))
        
    }
}