export const initialState = {
  ismenuActived: false,
  currentCo2: 0,
  currentTemperature: 0,
  currentHumidity: 0,
  co2Data: [],
  deviceList: [],
  isError: false,
  isLoading: false,
};

export enum IAction {
  setMenuActived = "setMenuActived",
  setCurrentCo2 = "setCurrentCo2",
  setCurrentTemperature = "setCurrentTemperature",
  setCurrentHumidity = "setCurrentHumidity",
  setCo2Data = "setCo2Data",
  setDeviceList = "setDeviceList",
  setIsError = "setIsError",
  setIsLoading = "setIsLoading",
}

export const reducer = (
  state: any,
  { type, value }: { type: string; value: any }
) => {
  switch (type) {
    case IAction.setMenuActived:
      return { ...state, isMenuActived: value };
    case IAction.setCurrentCo2:
      return { ...state, currentCo2: value };
    case IAction.setCurrentTemperature:
      return { ...state, currentTemperature: value };
    case IAction.setCurrentHumidity:
      return { ...state, currentHumidity: value };
    case IAction.setCo2Data:
      return { ...state, co2Data: value };
    case IAction.setDeviceList:
      return { ...state, deviceList: value };
    case IAction.setIsError:
      return { ...state, isError: value };
    case IAction.setIsLoading:
      return { ...state, isLoading: value };
  }
};
