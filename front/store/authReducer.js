const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const REGISTER = "REGISTER";

const defaultState = {
  isLoggedIn: false,
  user: {title: "Заглушка"},
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOG_IN:
      console.log("LOG_IN ACTION WORKING")
      return { ...state, isLoggedIn: true };
    case LOG_OUT:
      console.log("LOG_OUT ACTION WORKING")
      return { ...state, isLoggedIn: false };
    case REGISTER:
      console.log("REGISTER ACTION WORKING")
      return { ...state, user: action.payload }; //перезаписываем user каждый раз ес чо
    default:
      return state;
  }
};

export const logInAction = () => ({ type: LOG_IN });
export const logOutAction = () => ({ type: LOG_OUT });
export const registerAction = (payload) => ({ type: REGISTER, payload });
export default authReducer;
