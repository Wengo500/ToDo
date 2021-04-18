import AsyncStorage from '@react-native-async-storage/async-storage';


export const saveStoreData = async (key, purposeName, purposeDescription, chunksArr, id) => {

  try {
    const storeValue = {     
        purposeName: purposeName,
        purposeDescription: purposeDescription,
        chunks: [
          ...chunksArr,
        ],
        id: id,
    }
    
    const saveStore = JSON.stringify(storeValue)
    await AsyncStorage.setItem(`${key}`, saveStore)

  } catch (error) {
    console.log('while saving the file something went wrong', error)
  }
};

export const getStoreData = (key)=>{
  return (async() =>{
    try {
      const jsonValue = await AsyncStorage.getItem(key)  
      return (jsonValue != null ? (JSON.parse(jsonValue)) : null)

    } catch(error) {
      console.log('while reading the file something went wrong', error)
    }
  })().then(res=> res)
}
// AsyncStorage.clear()