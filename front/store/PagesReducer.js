const SET_PAGE = "SET_PAGE";
const SET_TOTAL = "SET_TOTAL";
const SET_LIMIT = "SET_LIMIT";

const defaultState = {
  page: 1,
  totalCount: 0,
  limit: 3,
};

const pagesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_PAGE:
      console.log("PAGE ACTION WORKING")
      return { ...state, page: action.payload };
    case SET_TOTAL:
      console.log("TOTAL ACTION WORKING")
      return { ...state, totalCount: action.payload };
    case SET_LIMIT:
      console.log("LIMIT ACTION WORKING")
      return { ...state, limit: action.payload }; 
    default:
      return state;
  }
};

export const setPageAction = (payload) => ({ type: SET_PAGE, payload });
export const setTotalAction = (payload) => ({ type: SET_TOTAL, payload });
export const setLimitAction = (payload) => ({ type: SET_LIMIT, payload });
export default pagesReducer;
