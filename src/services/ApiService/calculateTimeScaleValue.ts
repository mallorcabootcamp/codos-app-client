import moment from "moment";

export const calculateTimeScaleValue = (
  fromDate: string,
  toDate: string
): string => {
  const timeRecivedDiference =
    Math.round(moment(toDate).valueOf() / 1000) -
    Math.round(moment(fromDate).valueOf() / 1000);
  const threeDaysDiference =
    moment().valueOf() / 1000 - moment().subtract(3, "days").valueOf() / 1000;
  const threeMonthsDiference =
    moment().valueOf() / 1000 - moment().subtract(3, "months").valueOf() / 1000;
  const sevenMonthsDiference =
    moment().valueOf() / 1000 - moment().subtract(7, "months").valueOf() / 1000;
  if (timeRecivedDiference < threeDaysDiference) return "1h";
  else if (
    timeRecivedDiference > threeDaysDiference &&
    timeRecivedDiference < threeMonthsDiference
  )
    return "1d";
  else if (
    timeRecivedDiference > threeMonthsDiference &&
    timeRecivedDiference < sevenMonthsDiference
  )
    return "1w";
  else return "4w";
};
