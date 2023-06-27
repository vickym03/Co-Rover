import { useEffect, useState } from "react";

import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Register from "../Login/views/Register";
import Login from "../Login/views/Login";
import MainPage from "../Login/views/MainPage";
import TableUserData from "../TableDetails/views/TableUserData";
import { useDispatch, useSelector } from "react-redux";


function Router() {


    const getData = useSelector((state) => {
        return {
            loginData: state.usersReducer.login,
        };
    });
    const { loginData } = getData;


    const value = loginData !== undefined && loginData.login
    return (
        <>

            <BrowserRouter>
                <Routes>
               

                        <Route exact path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="*" element={<Navigate to='/login' replace />} />
                

                    {value && <>
                        <Route path="/dashboard" element={<MainPage />} />
                        <Route path="/userDetails" element={<TableUserData />} />
                    </>}

                </Routes>

            </BrowserRouter>

        </>
    )
}

export default Router