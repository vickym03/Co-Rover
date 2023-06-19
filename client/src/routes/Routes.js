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


function Router() {




    return (
        <>
          
            <BrowserRouter>
                <Routes>

                    <Route exact path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route
                        path="*"
                        element={<Navigate to="/" replace />}
                    />
                </Routes>

            </BrowserRouter>

        </>
    )
}

export default Router