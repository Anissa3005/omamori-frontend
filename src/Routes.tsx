import { Routes as ReactRoutes, Route, Outlet } from "react-router-dom";
import Launch from "./components/Launch"
import Home from "./components/Home"
import LoginMobile from "./components/Login_Mobile";
import SignUpMobile from "./components/SignUp_Mobile";

function RoutesComponent() {
    return (
        <ReactRoutes>
            <Route path="/" element={<Launch />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<LoginMobile />} />
            <Route path="/signup" element={<SignUpMobile />} />
        </ReactRoutes>
          
    )
}

export default RoutesComponent;