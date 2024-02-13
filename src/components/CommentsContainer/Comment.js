import {useNavigate} from "react-router-dom";

const Comment = ({comment}) => {

    const {postId, id, name, email, body} = comment;
    
    const navigate = useNavigate();

    return (
        <div style={{width: '50vw'}}>
            <h2>postId: {postId}</h2>
            <h3>id: {id}</h3>
            <h4>name: {name}</h4>
            <p>email: {email}</p>
            <p>body: {body}</p>
            <button onClick={() => navigate('post', {state: {postId}})}>Get post</button>
        </div>
    );
};

export {Comment};