import {useNavigate} from "react-router-dom";

const Post = ({post}) => {

    const {userId, id, title} = post;

    const navigate = useNavigate();

    return (
        <div>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <button onClick={() => navigate(`/posts/${id}`, {state: {id, title}})}>Post details</button>
        </div>
    );
};

export {Post};