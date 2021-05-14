import AsyncStorage from '@react-native-async-storage/async-storage';
import store from '../redux/store';
import {renderActionCreator, reloadActionCreator} from '../redux/refreshReducer';

export const saveAsyncData = async (purposeName, purposeDescription, chunksArr, id) => {
 let oldArr = await getAsyncData();
  try {
    const storeValue = [
      {     
        purposeName: purposeName,
        purposeDescription: purposeDescription,
        chunks: [
          ...chunksArr,
        ],
        id: id,
      },
      ...(oldArr === null? []: oldArr),
    ]
    store.dispatch(renderActionCreator(storeValue))
    const saveStore = JSON.stringify(storeValue)
    await AsyncStorage.setItem(`@KEY_FOR_ALL_PURPOSE`, saveStore)
  } catch (error) {
    console.log('while saving the file something went wrong', error)
  }   
};

export const getAsyncData = ()=>{
  return (async() =>{
    try {
      const jsonValue = await AsyncStorage.getItem(`@KEY_FOR_ALL_PURPOSE`)
      return (jsonValue != null ? (JSON.parse(jsonValue)) : [])

    } catch(error) {
      console.log('while reading the file something went wrong', error)
    }
  })()
}

getAsyncData().then(res => store.dispatch(reloadActionCreator(res)))

const deleteAsyncPurpose = async (purposeId) => {
  let oldArr = await getAsyncData();
 return oldArr.filter(obj => obj.id !== purposeId)
}

// AsyncStorage.clear()