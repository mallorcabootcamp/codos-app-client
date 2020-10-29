import axios from 'axios';

export async function ConnectToApiToGetData(url: string, fromDate: Date, toDate: Date) {
  try {
    const response = await axios({
      method: 'GET',
      url: url,
      timeout: 1000,
      params: {
          fromDate: fromDate,
          toDate: toDate
      },
    })

    return response

  } catch (error){
    console.log(error);
    
  }
}
