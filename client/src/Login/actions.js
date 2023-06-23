export const REGISTER_USERS_REQUEST = "REGISTER_USERS_REQUEST";
export const REGISTER_USERS_SUCCESS = "REGISTER_USERS_SUCCESS";
export const REGISTER_USERS_FAILED = "REGISTER_USERS_FAILED";


export const LOGIN_USERS_REQUEST = "LOGIN_USERS_REQUEST";
export const LOGIN_USERS_SUCCESS = "LOGIN_USERS_SUCCESS";
export const LOGIN_USERS_FAILED = "LOGIN_USERS_FAILED";


export const RESET_LOGIN = "RESET_LOGIN"

export function getRegisterRequest(name, password) {
  return {
    type: REGISTER_USERS_REQUEST,
    name: name,
    password: password
  };
}

export function getRegisterSuccess(data) {
  return {
    type: REGISTER_USERS_SUCCESS,
    payload: data,
  };
}

export function getRegisterFailed(error) {
  return {
    type: REGISTER_USERS_FAILED,
    payload: error,
  };
}

export function resetLogin() {
  return {
    type: RESET_LOGIN
  }
}


export function getLoginRequest(name, password) {
  console.log("name,password", name, password)

  return {
    type: LOGIN_USERS_REQUEST,
    name: name,
    password: password
  };
}

export function getLoginSuccess(data) {
  console.log("data act", data)
  return {
    type: LOGIN_USERS_SUCCESS,
    payload: data,
  };
}

export function getLoginFailed(error) {
  return {
    type: LOGIN_USERS_FAILED,
    payload: error,
  };
}
