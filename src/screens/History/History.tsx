import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import ParentSize from "@visx/responsive/lib/components/ParentSize";
import { DatePicker } from "../../components/DatePicker/DatePicker";
import { TimeWithValuesGraph } from "../../components/TimeWithValuesGraph/TimeWithValuesGraph";
import { CardWithTextTab } from "../../components/CardWithTextTab/CardWithTextTab";
import "./History.scss";
import { ApiService } from "../../services/ApiService/ApiService";
import { ApiResponse } from "../../types/api";
import { useStateWithLocalStorage } from "../../hooks/useStateWithLocalStorage";
import { ApiServiceDataProp } from "../../services/ApiService/ApiServiceDataProp";
import { Loading } from "../../components/Loading/Loading";
import { GreyScreenWithTitleLayout } from "../../components/GreyScreenWithTitleLayout/GreyScreenWithTitleLayout";
import { HistoryGraphConfig } from "./HistoryGraphConfig";
import { LoadingColors } from "../../components/Loading/LoadingColors";

const History = () => {
  const [fromDate, setFromDate] = useState<string>("");
  const [toDate, setToDate] = useState<string>("");
  const [co2Data, setCo2Data] = useState<ApiResponse[]>();
  const [temperatureData, setTemperatureData] = useState<ApiResponse[]>();
  const [humidityData, setHumidityData] = useState<ApiResponse[]>();
  const [selectedDevice] = useStateWithLocalStorage("deviceSelected");
  const [timeScaleValue, setTimeScaleValue] = useState<string>();
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const refetchData = () => {
    setCo2Data(undefined);
    setTemperatureData(undefined);
    setHumidityData(undefined);
    setIsLoading(true);
    setTimeScaleValue(timeScaleValue);
    const periodCo2 = ApiService.getPeriodData(
      fromDate,
      toDate,
      selectedDevice,
      ApiServiceDataProp.co2
    );
    const periodTemperature = ApiService.getPeriodData(
      fromDate,
      toDate,
      selectedDevice,
      ApiServiceDataProp.temperature
    );
    const periodHumidity = ApiService.getPeriodData(
      fromDate,
      toDate,
      selectedDevice,
      ApiServiceDataProp.humidity
    );
    Promise.all([periodCo2, periodTemperature, periodHumidity])
      .then(([co2, temperature, humidity]: ApiResponse[][]) => {
        setIsLoading(false);
        setCo2Data(co2);
        setTemperatureData(temperature);
        setHumidityData(humidity);
      })
      .catch(() => setIsError(true));
  };

  if (isError) {
    return <Redirect to="/unexpected-error?redirectTo=history" />;
  }

  return (
    <GreyScreenWithTitleLayout title="Histórico">
      <div className="history dark">
        <div className="row date-range-pickers-container pt-3 mt-3">
          <div className="col mx-3 my-3">
            <DatePicker
              date={fromDate}
              onDateChanged={(value: string) => setFromDate(value)}
              text="Desde"
            />
            <DatePicker
              date={toDate}
              onDateChanged={(value: string) => setToDate(value)}
              text="Hasta"
            />
          </div>
        </div>

        <div className="row">
          <div className="col pl-5 my-3">
            <button
              className="search-button btn"
              disabled={!fromDate || !toDate || fromDate === toDate}
              onClick={refetchData}
            >
              Buscar{" "}
            </button>
          </div>
        </div>

        {fromDate === toDate && fromDate !== "" && (
          <p className="row px-5 pt-5 invalid-dates">
            Por favor, seleccione un periodo mayor entre fechas.
          </p>
        )}

        {isLoading && <Loading color={LoadingColors.white} />}
        {temperatureData && humidityData && co2Data && (
          <>
            <CardWithTextTab value="eCO²">
              <div className="row">
                <ParentSize className="history-graph-elem">
                  {({ width }) => (
                    <TimeWithValuesGraph
                      endTimeValue={HistoryGraphConfig.endTimeValue}
                      uom={"ppm"}
                      timeFormat={timeScaleValue === "1h" ? "H:mm" : "DD-MM"}
                      marginY={HistoryGraphConfig.marginY}
                      marginX={HistoryGraphConfig.marginX}
                      historicalValues={co2Data}
                      bottomAxisNumTicks={HistoryGraphConfig.bottomAxisNumTicks}
                      width={width}
                      height={HistoryGraphConfig.height}
                    />
                  )}
                </ParentSize>
              </div>
            </CardWithTextTab>
            <CardWithTextTab value="Temp.">
              <div className="row">
                <ParentSize className="history-graph-elem">
                  {({ width }) => (
                    <TimeWithValuesGraph
                      endTimeValue={HistoryGraphConfig.endTimeValue}
                      uom={"ºC"}
                      timeFormat={timeScaleValue === "1h" ? "H:mm" : "DD-MM"}
                      marginY={HistoryGraphConfig.marginY}
                      marginX={HistoryGraphConfig.marginX}
                      historicalValues={temperatureData}
                      bottomAxisNumTicks={HistoryGraphConfig.bottomAxisNumTicks}
                      width={width}
                      height={HistoryGraphConfig.height}
                    />
                  )}
                </ParentSize>
              </div>
            </CardWithTextTab>
            <CardWithTextTab value="Humidity">
              <div className="row">
                <ParentSize className="history-graph-elem">
                  {({ width }) => (
                    <TimeWithValuesGraph
                      endTimeValue={HistoryGraphConfig.endTimeValue}
                      uom={"%"}
                      timeFormat={timeScaleValue === "1h" ? "H:mm" : "DD-MM"}
                      marginY={HistoryGraphConfig.marginY}
                      marginX={HistoryGraphConfig.marginX}
                      historicalValues={humidityData}
                      bottomAxisNumTicks={HistoryGraphConfig.bottomAxisNumTicks}
                      width={width}
                      height={HistoryGraphConfig.height}
                    />
                  )}
                </ParentSize>
              </div>
            </CardWithTextTab>
          </>
        )}
      </div>
    </GreyScreenWithTitleLayout>
  );
};

export default History;
