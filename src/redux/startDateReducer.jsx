const START_DATE = 'START_DATE';

let initialState = {
    date: 'Select start date'
  }

let startDateReducer = (state=initialState, action) => {
  switch(action.type) {

    case START_DATE:    
      return {
        date: action.payload.toDateString()
      }
      
    default: return state;
  }
}

export const startDareActionCreator = (NewDate) => ({type: START_DATE, payload: NewDate})

// 
    
    
 


export default startDateReducer;