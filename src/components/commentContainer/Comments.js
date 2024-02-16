import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {commentService} from "../../services";
import {Comment} from "./Comment";

const Comments = () => {

    const {id} = useParams();

    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentService.getByPostId(id).then(({data})=> setComments(data))
    }, [id]);
    
    return (
        <div>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export {Comments};