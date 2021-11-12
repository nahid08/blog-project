
const userInfo =  {
    id: null,
    username: '',
    email: '',
    password: ''
}

const initialState = localStorage.hasOwnProperty('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : userInfo;
console.log(initialState);

const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'login':
            return {...action.payload.data}
        default:
            return state;
    }
}

export default userReducer;

