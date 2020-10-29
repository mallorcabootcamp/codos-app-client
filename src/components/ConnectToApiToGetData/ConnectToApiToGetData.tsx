import axios from 'axios';

export async function ConnectToApiToGetData(url: string) {
  try {
    const response = await axios({
      method: 'GET',
      url: url,
      timeout: 1000,
      params: {
          fromDate: 123,
          toDate: 321
      },
    })
    console.log(5)
    return response.data.data[0].eCo2

  } catch (error){
    console.log(error);
    
  }
}
