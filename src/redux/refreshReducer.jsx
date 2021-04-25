const REFRESH = 'REFRESH';


let refreshReducer = (state=false, action) => {
  switch(action.type) {
    case REFRESH:
    return state = !state
                        
    default: return state;
  }
}

export const refreshActionCreator =()=> ({type: REFRESH})

export default refreshReducer;