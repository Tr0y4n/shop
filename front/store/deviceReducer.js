const SET_DEVICES = "SET_DEVICES";
const SET_TYPES = "SET_TYPES";
const SET_BRANDS = "SET_BRANDS";
const SET_SELECTED_TYPE = "SET_SELECTED_TYPE";
const SET_SELECTED_BRAND = "SET_SELECTED_BRAND";

const defaultState = {
  types: [],
  brands: [],
  devices: [],
  selectedType: {name: null},
  selectedBrand: {name: null},
};

const deviceReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_DEVICES:
      return { ...state, devices: action.payload };
    case SET_TYPES:
      return { ...state, types: action.payload };
    case SET_BRANDS:
      return { ...state, brands: action.payload };
      case SET_SELECTED_TYPE:
      console.log("SET_SELECTED_TYPE WORKING");
      return { ...state, selectedType: action.payload };
    case SET_SELECTED_BRAND:
      console.log("SET_SELECTED_BRAND WORKING");
      return { ...state, selectedBrand: action.payload };
    default:
      return state;
  }
};

export const setDeviceAction = (payload) => ({ type: SET_DEVICES, payload });
export const setTypeAction = (payload) => ({ type: SET_TYPES, payload });
export const setBrandAction = (payload) => ({ type: SET_BRANDS, payload });
export const setSelectedTypeAction = (payload) => ({ type: SET_SELECTED_TYPE, payload });
export const setSelectedBrandAction = (payload) => ({ type: SET_SELECTED_BRAND, payload });
export default deviceReducer;
