const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';

const defaultState = {
    isLoggedIn: true,
}

const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOG_IN:
            return {...state, isLoggedIn: !state.isLoggedIn}
        case LOG_OUT:
            return {...state, isLoggedIn: !state.isLoggedIn}
        default: 
        return state
    }
}

export const logInAction = (payload) => ({type: LOG_IN, payload})
export const logOutAction = (payload) => ({type: LOG_OUT, payload})
export default authReducer;