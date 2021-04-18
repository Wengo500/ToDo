import {startDareActionCreator} from '../startDateReducer';


const getStartDate = (currentDate) => {
  return async (dispatch) => {
    await dispatch(startDareActionCreator(currentDate))
  }
} 
export default getStartDate;