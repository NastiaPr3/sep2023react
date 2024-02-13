import {Comments} from "../components/CommentsContainer/Comments";
import {Outlet} from "react-router-dom";

const CommentsPage = () => {
    return (
        <div style={{display: "flex"}}>
            <Comments/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {CommentsPage};