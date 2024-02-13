import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {placeholderService} from "../../services/placeholder.service";
const Post = () => {

    const [post, setPost] = useState([]);

    const {userId, id, title, body} = post;
    
    const {state: {postId}} = useLocation();

    useEffect(() => {
        placeholderService.getPostById(postId).then(({data}) => setPost(data))
    }, [postId]);

    
    return (
        <div>
            <h2>userId: {userId}</h2>
            <h3>id: {id}</h3>
            <p>title: {title}</p>
            <p>body: {body}</p>
        </div>
    );
};

export {Post};