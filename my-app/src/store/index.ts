import {reducer} from './reducer/reducer';
import { applyMiddleware, createStore } from 'redux';
import thunk,{ ThunkAction } from 'redux-thunk';


declare module 'redux' {
    interface Dispatch<A extends Action = AnyAction> {
      <S, E, R>(asyncAction: ThunkAction<R, S, E, A>): R;
    }
  }

export const store = createStore(reducer,applyMiddleware(thunk));