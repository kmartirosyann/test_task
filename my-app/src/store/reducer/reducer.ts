import { localeData } from '../../util/uid';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    data:[
            {
                id:'11',
                title:'',
                date : null,
                completed: false 
            }
    ]
         
}

type Action ={ type:string,payload:any }

export const reducer = (state = initialState,action:Action)=>{
   
    const actionReducer = {
        [actionTypes.GET_TODO_DATA as string]:()=>({
            ...state,
            data:[...action.payload]
        }),
        [actionTypes.ADD_ITEM_TODO as string]:()=>{
            return{
                ...state,
                data:action.payload
            } 
        },
        [actionTypes.EDIT_TODO_ITEM_INCOMPLETE as string]:()=>{
           return {...state }   
        },
        [actionTypes.DELETE_TODO_ITEM as string]:()=>{
           return {
               ...state,
               data:action.payload
             }   
        },
        [actionTypes.EDIT_TODO_ITEM_TEXT]:()=>{
            return{
                ...state,
                data: action.payload
             }
        }

    }
   return actionReducer[action.type] ? actionReducer[action.type]() : state
}