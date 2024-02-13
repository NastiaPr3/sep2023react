import {Post} from "../components/PostContainer/Post";

const PostPage = () => {
    return (
        <div style={{display: "block", width: '50vw', position: 'fixed', marginLeft: "auto", right: "-20px"}}>
            <Post/>
        </div>
    );
};

export {PostPage};