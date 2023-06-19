import { api } from "./api";





const loginApi = (action) => {
    const url=`${process.env.REACT_APP_API_URL}/user/login`
    const body = {
        name: action.name,
        password: action.password
    }
    console.log("body",body)
    return api._post(url, body).then((response) => {
        console.log(response)
        const payload = response
        return {
            payload
        }
    }).catch((error) => {
        console.log("error userapi", error)
        return {
            error
        }
    })
}



const registerApi = (action) => {
    const url=`${process.env.REACT_APP_API_URL}/user/register`

    const body = {
        name: action.name,
        password: action.password
    }
    return api._post(url, body).then((response) => {
        const payload = response.data
        return {
            payload
        }
    }).catch((error) => {
        return {
            error
        }
    })
}
export const UserApi = {
    loginApi,
    registerApi
}





