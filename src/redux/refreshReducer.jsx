const REFRESH = 'REFRESH';

let initialState = {
  refresh: false
}
  
let refreshReducer = (state=initialState, action) => {
  switch(action.type) {
    case REFRESH:
    return state = !state
                        
    default: return state;
  }
}

export const refreshActionCreator =()=> ({type: REFRESH})

export default refreshReducer;