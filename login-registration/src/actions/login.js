import loginService from "../services/RegistrationService";

export default function login(data) {
  return (dispatch) => {
    return loginService
      .login(data)
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: "login",
          payload: res.data,
        });
        localStorage.setItem(
          "userInfo",
          JSON.stringify({ ...res.data, isLogin: true })
        );
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };
}
