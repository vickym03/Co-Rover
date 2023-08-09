export const REFRESH_TOKEN_REQUEST = "REFRESH_TOKEN_REQUEST";
export const REFRESH_TOKEN_SUCCESS = "REFRESH_TOKEN_SUCCESS";
export const REFRESH_TOKEN_FAILED = "REFRESH_TOKEN_FAILED";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILED = "LOGOUT_FAILED";

export function refreshTokenRequest(refreshToken) {
  return {
    type: REFRESH_TOKEN_REQUEST,
    Token: refreshToken,
  };
}

export function refreshTokenSuccess(data) {
  return {
    type: REFRESH_TOKEN_SUCCESS,
    payload: data,
  };
}

export function refreshTokenFailed(error) {
  console.log("refreshTokenFailed", error);
  return {
    type: REFRESH_TOKEN_FAILED,
    payload: error,
  };
}

export function logoutRequest(refreshToken) {
  return {
    type: LOGOUT_REQUEST,
    Token: refreshToken,
  };
}

export function logoutSuccess(data) {
  return {
    type: LOGOUT_SUCCESS,
    payload: data,
  };
}

export function logoutFailed(error) {
  return {
    type: LOGOUT_FAILED,
    payload: error,
  };
}
