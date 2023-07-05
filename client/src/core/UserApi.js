import { api } from "./api";

const loginApi = (action) => {
  const url = `${process.env.REACT_APP_API_URL}/login/login`;
  const body = {
    name: action.name,
    password: action.password,
  };
  // console.log("body", body)
  return api
    ._post(url, body)
    .then((response) => {
      console.log(response);
      const payload = response;
      return {
        payload,
      };
    })
    .catch((error) => {
      console.log("error userapi", error);
      return {
        error,
      };
    });
};

const registerApi = (action) => {
  const url = `${process.env.REACT_APP_API_URL}/login/register`;

  const body = {
    name: action.name,
    password: action.password,
  };
  return api
    ._post(url, body)
    .then((response) => {
      const payload = response.data;
      return {
        payload,
      };
    })
    .catch((error) => {
      return {
        error,
      };
    });
};

const addUserApi = (action) => {
  const url = `${process.env.REACT_APP_API_URL}/user/addUser`;
  const body = {
    username: action.username,
    level: action.level,
    product: action.product,
    group: action.group,
    bankname: action.bankname,
    bankcode: action.bankcode,
    usertype: action.usertype,
    mobileno: action.mobileno,
    active: action.active,
    id: action.id,
    insertMode: action.insertMode,
    clientId: action.clientId,
  };
  // console.log("body", body)
  return api
    ._post(url, body)
    .then((response) => {
      // console.log(response)
      const payload = response;
      return {
        payload,
      };
    })
    .catch((error) => {
      console.log("error userapi", error);
      return {
        error,
      };
    });
};

const getUserDataApi = (action) => {
  const url = `${process.env.REACT_APP_API_URL}/user/viewUser`;

  const body = {
    clientId: action.clientId,
  };
  // console.log("body", body)
  return api
    ._post(url, body)
    .then((response) => {
      const payload = response.data;
      return {
        payload,
      };
    })
    .catch((error) => {
      return {
        error,
      };
    });
};

const getDashboardApi = (action) => {
  const url = `${process.env.REACT_APP_API_URL}/user/graphDash`;

  const body = {
    date: action.date,
  };
  // console.log("body", body)
  return api
    ._post(url, body)
    .then((response) => {
      console.log("res getDashboardApi", response);
      const payload = response.data;
      return {
        payload,
      };
    })
    .catch((error) => {
      return {
        error,
      };
    });
};

export const UserApi = {
  loginApi,
  registerApi,
  addUserApi,
  getUserDataApi,
  getDashboardApi,
};
