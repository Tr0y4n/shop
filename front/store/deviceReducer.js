const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';

const defaultState = {
    types: [
    {id: 1, name: "Холодильники"},
    {id: 2, name: "Смартфоны"},
    {id: 3, name: "Телевизоры"},
    {id: 4, name: "Плиты"}
],
brands: [
    {id: 1, name: "Samsung"},
    {id: 2, name: "Apple"},
    {id: 3, name: "Lenovo"},
    {id: 4, name: "Sony"},
],
devices: [
    {id: 1, name: "Iphone 12 pro", price: 250000, rating: 5, img: 'https://www.mountaineers.org/images/placeholder-images/placeholder-400-x-300/image'},
    {id: 2, name: "Iphone 13 pro", price: 250000, rating: 5, img: 'https://www.ex-t.com/wp-content/uploads/2019/03/400x600.png'},
    {id: 3, name: "Ipad pro max", price: 250000, rating: 5, img: 'img'},
    {id: 4, name: "Xperia Z3", price: 250000, rating: 5, img: 'img'},
    {id: 1, name: "Iphone 12 pro", price: 250000, rating: 5, img: 'img'},
    {id: 2, name: "Iphone 13 pro", price: 250000, rating: 5, img: 'img'},
    {id: 3, name: "Ipad pro max", price: 250000, rating: 5, img: 'img'},
    {id: 4, name: "Xperia Z3", price: 250000, rating: 5, img: 'img'},
    {id: 1, name: "Iphone 12 pro", price: 250000, rating: 5, img: 'img'},
    {id: 2, name: "Iphone 13 pro", price: 250000, rating: 5, img: 'img'},
    {id: 3, name: "Ipad pro max", price: 250000, rating: 5, img: 'img'},
    {id: 4, name: "Xperia Z3", price: 250000, rating: 5, img: 'img'},
    {id: 1, name: "Iphone 12 pro", price: 250000, rating: 5, img: 'img'},
    {id: 2, name: "Iphone 13 pro", price: 250000, rating: 5, img: 'img'},
    {id: 3, name: "Ipad pro max", price: 250000, rating: 5, img: 'img'},
    {id: 4, name: "Xperia Z3", price: 250000, rating: 5, img: 'img'},
]}

const deviceReducer = (state = defaultState, action) => {
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
export default deviceReducer;