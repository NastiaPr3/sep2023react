import {PostDetails} from "../components/postContainer/PostDetails";
import {useEffect, useState} from "react";
import {postService} from "../services";
import {Outlet, useParams} from "react-router-dom";

const PostDetailsPage = () => {
    const [postDetails, setPostDetails] = useState(null);

    const {id} = useParams();

    useEffect(() => {
        postService.getById(id).then(({data}) => setPostDetails(data))
    }, [id]);

    return (
        <div>
            {
                postDetails && <PostDetails postDetails={postDetails}/>
            }
            <hr/>
            <Outlet/>
        </div>
    );
};

export {PostDetailsPage};