export interface HistoricalValues {
    date: string;
    close: number;
  }
  
  const historicalValues: HistoricalValues[] = [
    { date: "2020-04-24T00:00:00.000Z", close: 5 },
    { date: "2020-04-24T01:00:00.000Z", close: 5 },
    { date: "2020-04-24T02:00:00.000Z", close: 30 },
    { date: "2020-04-24T03:00:00.000Z", close: 5 },
    { date: "2020-04-24T04:00:00.000Z", close: 0 },
    { date: "2020-04-24T05:00:00.000Z", close: 9 },
    { date: "2020-04-24T06:00:00.000Z", close: 3 },
    { date: "2020-04-24T07:00:00.000Z", close: 1 },
    { date: "2020-04-24T08:00:00.000Z", close: 3 },
    { date: "2020-04-24T09:00:00.000Z", close: 4 },
    { date: "2020-04-24T10:00:00.000Z", close: 6 },
    { date: "2020-04-24T11:00:00.000Z", close: 8 },
    { date: "2020-04-24T12:00:00.000Z", close: 2 },
    { date: "2020-04-24T13:00:00.000Z", close: 5 },
    { date: "2020-04-24T14:00:00.000Z", close: 15 },
    { date: "2020-04-24T15:00:00.000Z", close: 22 },
    { date: "2020-04-24T16:00:00.000Z", close: 30 },
    { date: "2020-04-24T17:00:00.000Z", close: 33 },
    { date: "2020-04-24T18:00:00.000Z", close: 32 },
    { date: "2020-04-24T19:00:00.000Z", close: 25 },
    { date: "2020-04-24T20:00:00.000Z", close: 15 },
    { date: "2020-04-24T21:00:00.000Z", close: 5 },
    { date: "2020-04-24T22:00:00.000Z", close: 6 },
    { date: "2020-04-24T23:00:00.000Z", close: 5 },
    { date: "2020-04-25T00:00:00.000Z", close: 2 }
  ];
  
  export default historicalValues;
  