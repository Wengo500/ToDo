import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveAsyncData = async (purposeName, purposeDescription, chunksArr, id) => {
 let oldArr =  await getAsyncData();
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
      return (jsonValue != null ? (JSON.parse(jsonValue)) : null)

    } catch(error) {
      console.log('while reading the file something went wrong', error)
    }
  })()
}
// AsyncStorage.clear()