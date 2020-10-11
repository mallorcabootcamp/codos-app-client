export interface HistoricalValues {
    date: string;
    close: number;
  }
  
  const historicalValues: HistoricalValues[] = [
    { date: "2020-04-24T07:00:00.000Z", close: 5 },
    { date: "2020-04-24T07:01:00.000Z", close: 10 },
    { date: "2020-04-24T07:02:00.000Z", close: 5 },
    { date: "2020-04-24T07:03:00.000Z", close: 5 },
    { date: "2020-04-24T07:04:00.000Z", close: 0 },
    { date: "2020-04-24T07:05:00.000Z", close: 9 },
    { date: "2020-04-24T07:06:00.000Z", close: 3 },
    { date: "2020-04-24T07:07:00.000Z", close: 1 },
    { date: "2020-04-24T07:08:00.000Z", close: 3 },
    { date: "2020-04-24T07:09:00.000Z", close: 4 },
    { date: "2020-04-24T07:10:00.000Z", close: 6 },
    { date: "2020-04-24T07:11:00.000Z", close: 8 },
    { date: "2020-04-24T07:12:00.000Z", close: 2 },
    { date: "2020-04-24T07:13:00.000Z", close: 5 },
    { date: "2020-04-24T07:14:00.000Z", close: 15 },
    { date: "2020-04-24T07:15:00.000Z", close: 22 },
    { date: "2020-04-24T07:16:00.000Z", close: 30 },
    { date: "2020-04-24T07:17:00.000Z", close: 33 },
    { date: "2020-04-24T07:18:00.000Z", close: 32 },
    { date: "2020-04-24T07:19:00.000Z", close: 25 },
    { date: "2020-04-24T07:20:00.000Z", close: 15 },
    { date: "2020-04-24T07:21:00.000Z", close: 5 },
    { date: "2020-04-24T07:22:00.000Z", close: 6 },
    { date: "2020-04-24T07:23:00.000Z", close: 5 },
    { date: "2020-04-25T07:00:00.000Z", close: 2 }
  ];
  
  export default historicalValues;
  