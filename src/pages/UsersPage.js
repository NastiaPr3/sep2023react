import {Users} from "../components/userContainer/Users";
import {Outlet} from "react-router-dom";
// import {Outlet} from "react-router-dom";

const UsersPage = () => {
    return (
        <div>
            <Outlet/>
            <Users/>
        </div>
    );
};

export {UsersPage};