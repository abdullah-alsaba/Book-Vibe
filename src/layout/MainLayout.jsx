import { Outlet } from "react-router";
import Navbar from "../component/shared/Navbar";
import "../index.css"

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;