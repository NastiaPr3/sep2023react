import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

import {postService} from "../../services";
import {Post} from "./Post";

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