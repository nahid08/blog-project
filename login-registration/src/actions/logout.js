import userService from '../services/RegistrationService';

export default   function logout() {
    return (dispatch) => {
      return  userService.logout().then((data) => {
            localStorage.removeItem('userInfo');
            dispatch({
                type: 'logout'
            })
        }).catch((err) => {
            return Promise.reject(err);
        })
    }
}