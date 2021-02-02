import React, { useCallback, useEffect, useReducer } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { CurrentCo2 } from "../../components/CurrentCo2/CurrentCo2";
import { IconWithValue } from "../../components/IconWithValue/IconWithValue";
import { Icon } from "../../components/IconWithValue/Icon";
import ParentSize from "@visx/responsive/lib/components/ParentSize";
import { TimeWithValuesGraph } from "../../components/TimeWithValuesGraph/TimeWithValuesGraph";
import { Link, Redirect } from "react-router-dom";
import { Card } from "../../components/Card/Card";
import "./Main.scss";
import { ApiService } from "../../services/ApiService/ApiService";
import { ApiResponse } from "../../types/api";
import { LateralBar } from "../../components/LateralBar/LateralBar";
import { LateralMenuTransition } from "../../components/LateralMenuTransition/LateralMenuTransition";
import { useStateWithLocalStorage } from "../../hooks/useStateWithLocalStorage";
import moment from "moment";
import { ApiServiceDataProp } from "../../services/ApiService/ApiServiceDataProp";
import { Loading } from "../../components/Loading/Loading";
import { MainGraphConfig } from "./MainGraphConfig";
import { LoadingColors } from "../../components/Loading/LoadingColors";
import { reducer, IAction, initialState } from "./State";

const hours = 8;

const Main = () => {
  const [selectedDevice, setSelectedDevice] = useStateWithLocalStorage(
    "deviceSelected"
  );
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    ApiService.getUsersList().then((apiResponse: string[]) => {
      dispatch({ type: IAction.setDeviceList, value: apiResponse });
    });
  }, []);

  useEffect(() => {
    const fromDate = moment().subtract(7, "hour").format(`YYYY-MM-DD HH:mm`);
    const toDate = moment().format(`YYYY-MM-DD HH:mm`);
    if (selectedDevice) {
      const currentCo2 = ApiService.getCurrentData(
        selectedDevice,
        ApiServiceDataProp.co2
      );
      const currentTemperature = ApiService.getCurrentData(
        selectedDevice,
        ApiServiceDataProp.temperature
      );
      const currentHumidity = ApiService.getCurrentData(
        selectedDevice,
        ApiServiceDataProp.humidity
      );
      const periodCo2 = ApiService.getPeriodData(
        fromDate,
        toDate,
        selectedDevice,
        ApiServiceDataProp.co2
      );
      Promise.all([currentCo2, currentTemperature, currentHumidity, periodCo2])
        .then(
          ([
            currentCo2Response,
            currentTemperatureResponse,
            currentHumidityResponse,
            periodCo2Response,
          ]: ApiResponse[][]) => {
            dispatch({ type: IAction.setIsLoading, value: false });
            dispatch({
              type: IAction.setCurrentCo2,
              value: currentCo2Response[0].value,
            });
            dispatch({
              type: IAction.setCurrentTemperature,
              value: currentTemperatureResponse[0].value,
            });
            dispatch({
              type: IAction.setCurrentHumidity,
              value: currentHumidityResponse[0].value,
            });
            dispatch({ type: IAction.setCo2Data, value: periodCo2Response });
          }
        )
        .catch(() => dispatch({ type: IAction.setIsError, value: true }));
    }
  }, [selectedDevice]);

  const onClickOnDevice = useCallback(
    (device: string) => {
      setSelectedDevice(device);
      dispatch({ type: IAction.setMenuActived, value: false });
    },
    [setSelectedDevice]
  );

  if (state.isError) {
    return <Redirect to="/unexpected-error?redirectTo=/" />;
  }

  if (state.isLoading && selectedDevice) {
    return (
      <div className="container is-loading-container">
        <div className="row">
          <div className="col is-loading">
            <Loading color={LoadingColors.darkGrey}></Loading>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="main">
      <div className="container">
        <LateralMenuTransition isVisible={state.isMenuActived}>
          <LateralBar
            activeDevice={selectedDevice}
            devices={state.deviceList}
            onClickOnClose={() =>
              dispatch({ type: IAction.setMenuActived, value: false })
            }
            onClickOnDevice={onClickOnDevice}
          />
        </LateralMenuTransition>
        <div className="row">
          <div className="col ml-4 pt-4 mt-3 h4 mb-0 d-inline menu-elem">
            <p
              className="mb-0 d-inline"
              onClick={() =>
                dispatch({ type: IAction.setMenuActived, value: true })
              }
            >
              <FontAwesomeIcon icon={faBars} size="lg" />
            </p>
          </div>
        </div>
      </div>
      {!selectedDevice && (
        <div className="container">
          <div className="row">
            <div className="col px-5 py-3 pt-5 mt-3">
              <h4 className="select-a-device">
                Acceda al menú lateral y seleccione un dispositivo
              </h4>
            </div>
          </div>
        </div>
      )}
      {selectedDevice && (
        <>
          <CurrentCo2 eCoValue={Math.round(state.currentCo2)} />
          <div className="container px-5 text-center">
            <Card>
              <div className="row icon-with-value-elem">
                <div className="col">
                  <IconWithValue
                    value={`${Math.round(state.currentTemperature)}º`}
                    icon={Icon.thermometer}
                  />
                </div>
                <div className="col">
                  <IconWithValue
                    value={`${Math.round(state.currentHumidity)}%`}
                    icon={Icon.humidity}
                  />
                </div>
              </div>
            </Card>
          </div>
          <div className="container px-5 pt-3 mt-4 mb-4 pb-2">
            <Card className="graph-elem">
              <p className="text-elem pt-3 pl-2 mb-3">Últimas {hours} horas</p>
              <div className="row">
                <div className="col text-center">
                  <ParentSize className="graph-elem">
                    {({ width }) => (
                      <TimeWithValuesGraph
                        endTimeValue={MainGraphConfig.endTimeValue}
                        uom={"ppm"}
                        timeFormat={"H:mm"}
                        marginY={MainGraphConfig.marginY}
                        marginX={MainGraphConfig.marginX}
                        historicalValues={state.co2Data}
                        bottomAxisNumTicks={MainGraphConfig.bottomAxisNumTicks}
                        width={width}
                        height={MainGraphConfig.height}
                      />
                    )}
                  </ParentSize>
                </div>
              </div>
            </Card>
          </div>
          <div className="container pt-1 pb-5">
            <div className="text-center m-auto rounded-circle search-elem">
              <Link to="/history" className="search-link">
                <FontAwesomeIcon icon={faSearch} size="lg" />
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Main;
