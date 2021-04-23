const CREATE_CHUNK_ITEMS_ARR = 'CREATE_CHUNK_ITEMS_ARR';

let initialState = []

let chunkItemsReducer = (state=initialState, action) => {
  switch(action.type) {
    case CREATE_CHUNK_ITEMS_ARR:
      return [
        ...state.filter((el)=> el.chunkId !== action.chunkId),

        { 
          chunkId: action.chunkId,
          chunkName: action.chunkName, 
          chunkDescription: action.chunkDescription,
          chunkStartDate: action.chunkStartDate,
        },
      ]                      
    default: return state;
  }
}

export const CreateChunkItemsArrActionCreator = 
(chunkId, chunkName, chunkDescription, chunkStartDate) => {
  return {
    type: CREATE_CHUNK_ITEMS_ARR,
    chunkId: chunkId,
    chunkName: chunkName, 
    chunkDescription: chunkDescription,
    chunkStartDate: chunkStartDate,
  }
}

export default chunkItemsReducer;