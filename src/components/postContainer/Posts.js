import {useEffect, useState} from "react";
import {postService} from "../../services/postService";
import {Post} from "./Post";
import {useLocation} from "react-router-dom";

const Posts = () => {

    const [posts, setPosts] = useState([]);
    
    const {state: {id}} = useLocation();

    useEffect(() => {
        postService.getByUserId(id).then(({data}) => setPosts(data));
    }, [id]);

    return (
        <div>
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }
        </div>
    );
};

export {Posts};