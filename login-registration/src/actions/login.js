import loginService from "../services/RegistrationService";

export default function login(data) {
  return (dispatch) => {
    return loginService
      .login(data)
      .then((res) => {
       localStorage.setItem('userInfo',JSON.stringify(res.data));
        dispatch({
          type: "login",
          payload: res.data,
        });
        return res.data.data;
      })
      .catch((err) => {
       
        return Promise.reject(err);
      });
  };
}