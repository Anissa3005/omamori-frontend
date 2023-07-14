import { Routes as ReactRoutes, Route, Outlet } from "react-router-dom";
import Launch from "./components/Launch"
import Home from "./components/Home"

function RoutesComponent() {
    return (
        <ReactRoutes>
            <Route path="/" element={<Launch />} />
            <Route path="/home" element={<Home />} />
        </ReactRoutes>
          
    )
}

export default RoutesComponent;