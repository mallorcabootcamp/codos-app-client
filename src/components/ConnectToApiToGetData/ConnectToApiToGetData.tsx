import axios from 'axios';

export async function ConnectToApiToGetData(url: string) {
  try {
    const response = await axios({
      method: 'GET',
      url: url,
      timeout: 1000,
      params: {
          fromDate: 1234,
          toDate: 1234
      },
    })

    return response

  } catch (error){
    console.log(error);
    
  }
}
