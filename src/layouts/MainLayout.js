import {Outlet} from "react-router-dom";
import {Header} from "../header/Header";

const MainLayout = () => {
    return (
        <div>
            MainLayout
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};