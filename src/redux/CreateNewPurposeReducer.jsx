const NEW_PURPOSE_REDUCER = 'NEW_PURPOSE_REDUCER';

let initialState = {
   purposes: [
      { id: 0, purposeName: "Study English", purposeTask: "Hello World" },
    ]
  }

 let NewPurposesReducer = (state=initialState, action) => {
    switch(action.type) {

      case NEW_PURPOSE_REDUCER: 
        let id = 0;
       
        state.purposes.forEach((element, index) => id = index + 1);         
        return [...state,{ id: id, purposeName: action.purposeName, purposeTask: action.purposeTask}];
          
        default: return state;
    }
}

export const newPurposesReducerActionCreator = (purposeName, purposeTask) => {
    return {
        type: NEW_PURPOSE_REDUCER,
        purposeName: purposeName, 
        purposeTask: purposeTask
    }
}
export default NewPurposesReducer;