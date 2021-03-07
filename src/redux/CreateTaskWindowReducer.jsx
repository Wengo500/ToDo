const TASK_WINDOW = 'TASK_WINDOW';


let initialState = {
  taskWindow: false
}

let CreateTaskWindowReducer = (state=initialState, action) => {
  switch(action.type) {
          
    case TASK_WINDOW:
      let newState = !state
      return newState;
  
    default: 
      return state;
  }

}
export const TaskWindowBtnActionCreator = () => {
    return {
    type: TASK_WINDOW
    }
}


 export default CreateTaskWindowReducer;