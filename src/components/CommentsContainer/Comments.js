import {useEffect, useState} from "react";
import {placeholderService} from "../../services/placeholder.service";
import {Comment} from "./Comment";

const Comments = () => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        placeholderService.getAllComments().then(({data}) => setComments(data));
    }, []);

    return (
        <div>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export {Comments};