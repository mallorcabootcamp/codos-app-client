import moment from 'moment';


export const calculateTimeScaleValue = (fromDate:string , toDate:string): string => {
    const timeRecivedDiference = Math.round(moment(toDate).valueOf()/1000) - Math.round(moment(fromDate).valueOf()/1000);
    const threeDaysDiference = moment().valueOf()/1000 - moment().subtract(3, 'days').valueOf()/1000;
    const timeScaleValue = timeRecivedDiference < threeDaysDiference ? "60m" : "1d";
    return timeScaleValue;
}