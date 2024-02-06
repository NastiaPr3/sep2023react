import {useEffect, useState} from "react";
import {postService} from "../services/postService";
import {Post} from "../Post/Post";
import {PostDetails} from "../PostDetails/PostDetails";

const Posts = () => {

    const [posts, setPosts] = useState([]);
    const [postDetails, setPostDetails] = useState(null);

    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data))
    }, []);

    const getCurrentPost = (post) => {
        setPostDetails(post)
    }

    return (
        <div>
            {
                postDetails && <PostDetails postDetails={postDetails}/>
            }
            <hr/>
            {
                posts.map(posts => <Post posts={posts} key={posts.id} getCurrentPost={getCurrentPost}/>)
            }


        </div>
    );
};

export {Posts};