
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


export const deleteTodoItems = (id:string)=>{
    return (dispatch:any,getState:any)=>{
        return ()=>{
            getState().data.filter((item:TodoItems)=>item.id !== id)
            return postRequestTodo(getState())
            .then(res=>dispatch({
                type:actionTypes.DELETE_TODO_ITEM,
                payload:res
            }))
        }
    }
}

export const editCheckBox =(id:string)=>{
    return (dispatch:any,getState:any)=>{
        return ()=>{
            getState().data.map((item:TodoItems)=>item.id === id ? item.completed = !item.completed : item)
            return postRequestTodo(getState())
            .then(res=>dispatch({
                type:actionTypes.EDIT_TODO_ITEM_INCOMPLETE,
                payload:res
            }))
        }
    }
}