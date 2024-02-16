import {Outlet, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {PostDetails} from "../components";
import {postService} from "../services";

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