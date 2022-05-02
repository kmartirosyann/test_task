import {  TodoItems } from "../types/type"


export const uId =()=>{
    return Math.floor(Math.random()*1000 ) + 
           String.fromCharCode(Math.floor(Math.random()*100)) +
           Math.floor(Math.random()*1000 )
}

export const localeData = (data:TodoItems[])=>{
    window.localStorage.setItem('todoList',JSON.stringify(data))
}