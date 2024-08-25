import { act } from 'react';

let initialState = {
  count: 0,
  id: '',
  pw: '',
};

function reducer(state = initialState, action) {
  // if(action.type === 'INCREMENT') {
  //   return {...state, count: state.count + 1 + action.payload.num}
  // }

  // return {...state}

  switch(action.type) {
    case 'INCREMENT' :
      return {...state, count: state.count + 1};
    case 'LOGIN' :
      return {
        ...state, 
        id: action.payload.id,
        pw: action.payload.pw
      }
    default: 
      return {...state}
  }
}

export default reducer;
