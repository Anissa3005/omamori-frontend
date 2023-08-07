import { Routes as ReactRoutes, Route, Outlet } from "react-router-dom";
import Launch from "./components/Launch"
import Home from "./components/Home"
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import LoginMobile from "./components/Login_Mobile";

function RoutesComponent() {
    return (
        <ReactRoutes>
            <Route path="/" element={<Launch />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<LoginMobile />} />
            <Route path="/signup" element={<SignUp />} />
        </ReactRoutes>
          
    )
}

export default RoutesComponent;