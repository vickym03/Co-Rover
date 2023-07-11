export const ADD_USERS_REQUEST = "ADD_USERS_REQUEST";
export const ADD_USERS_SUCCESS = "ADD_USERS_SUCCESS";
export const ADD_USERS_FAILED = "ADD_USERS_FAILED";

export const RESET_ADD_USERS = "RESET_ADD_USERS";

export const GET_USERS_REQUEST = "GET_USERS_REQUEST";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAILED = "GET_USERS_FAILED";

export function addUserRequest(
  username,
  level,
  product,
  group,
  bankname,
  bankcode,
  usertype,
  mobileno,
  active,
  slno,
  insertMode,
  clientId
) {
  console.log(
    "äction",
    username,
    level,
    product,
    group,
    bankname,
    bankcode,
    usertype,
    mobileno,
    active,
    slno,
    insertMode,
    clientId
  );
  return {
    type: ADD_USERS_REQUEST,
    username: username,
    level: level,
    product: product,
    group: group,
    bankname: bankname,
    bankcode: bankcode,
    usertype: usertype,
    mobileno: mobileno,
    active: active,
    id: slno,
    insertMode: insertMode,
    clientId: clientId,
  };
}

export function addUserSuccess(data) {
  return {
    type: ADD_USERS_SUCCESS,
    payload: data,
  };
}

export function addUserFailed(error) {
  return {
    type: ADD_USERS_FAILED,
    payload: error,
  };
}

export const resetAddUsers = () => {
  return {
    type: RESET_ADD_USERS,
  };
};

export function getUsersRequest(clientId) {
  // console.log("name,password getUsersRequest", clientId)

  return {
    type: GET_USERS_REQUEST,
    clientId: clientId,
  };
}

export function getUsersSuccess(data) {
  // console.log("data act", data)
  return {
    type: GET_USERS_SUCCESS,
    payload: data,
  };
}

export function getUsersFailed(error) {
  return {
    type: GET_USERS_FAILED,
    payload: error,
  };
}
