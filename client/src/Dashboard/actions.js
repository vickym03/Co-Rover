export const GET_DASHBOARD_REQUEST = "GET_DASHBOARD_REQUEST";
export const GET_DASHBOARD_SUCCESS = "GET_DASHBOARD_SUCCESS";
export const GET_DASHBOARD_FAILED = "GET_DASHBOARD_FAILED";

export function dashboardRequest(date) {
  console.log("date", date)
  return {
    type: GET_DASHBOARD_REQUEST,
    date: date,
  };
}

export function dashboardSuccess(data) {
  // console.log("data act", data)
  return {
    type: GET_DASHBOARD_SUCCESS,
    payload: data,
  };
}

export function dashboardFailed(error) {
  return {
    type: GET_DASHBOARD_FAILED,
    payload: error,
  };
}
