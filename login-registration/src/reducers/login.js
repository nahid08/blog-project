
const userInfo =  {
    id: null,
    username: '',
    email: '',
    password: '',
    isLogin: false
}
const initialState = localStorage.hasOwnProperty('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : userInfo;

const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'login':
            return {...action.payload,  isLogin:true}
        case 'logout': 
            return {...userInfo}
        default:
            return state;
    }
}

export default userReducer;

