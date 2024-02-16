import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

const PostDetails = ({postDetails}) => {

    const {id, userId, title, body} = postDetails;

    const navigate = useNavigate();


    return (
        <div>
           <div>id :{id}</div>
           <div>userId :{userId}</div>
           <div>title :{title}</div>
           <div>body :{body}</div>
            <button onClick={() => navigate('comments', {state: {id}})}>Comments</button>
        </div>
    );
};

export {PostDetails};