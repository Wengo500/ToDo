const RENDER = 'RENDER';
const RELOAD = 'RELOAD';


const initialState = []

let refreshReducer = (state=initialState, action) => {
  switch(action.type) {
    case RENDER:
    return action.payload

    case RELOAD:
    return action.payload
                        
    default: return state;
  }
}

export const renderActionCreator = (purposes)=> ({type: RENDER, payload: purposes})
export const reloadActionCreator = (purposes)=> ({type: RELOAD, payload: purposes})

export default refreshReducer;