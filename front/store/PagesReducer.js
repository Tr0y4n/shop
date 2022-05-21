const SET_PAGE = "SET_PAGE";
const SET_TOTAL = "SET_TOTAL";
const SET_LIMIT = "SET_LIMIT";
const SET_OTVALUE = "SET_OTVALUE";
const SET_DOVALUE = "SET_DOVALUE";

const defaultState = {
  page: 1,
  totalCount: 0,
  limit: 8,
  otValue: "1",
  doValue: "9999999",
};

const pagesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_PAGE:
      console.log("PAGE ACTION WORKING");
      return { ...state, page: action.payload };
    case SET_TOTAL:
      console.log("TOTAL ACTION WORKING");
      return { ...state, totalCount: action.payload };
    case SET_LIMIT:
      console.log("LIMIT ACTION WORKING");
      return { ...state, limit: action.payload };
    case SET_OTVALUE:
      console.log("OTVALUE ACTION WORKING");
      return { ...state, otValue: action.payload };
    case SET_DOVALUE:
      console.log("DOVALUE ACTION WORKING");
      return { ...state, doValue: action.payload };
    default:
      return state;
  }
};

export const setPageAction = (payload) => ({ type: SET_PAGE, payload });
export const setTotalAction = (payload) => ({ type: SET_TOTAL, payload });
export const setLimitAction = (payload) => ({ type: SET_LIMIT, payload });
export const setOtAction = (payload) => ({ type: SET_OTVALUE, payload });
export const setDoAction = (payload) => ({ type: SET_DOVALUE, payload });
export default pagesReducer;
