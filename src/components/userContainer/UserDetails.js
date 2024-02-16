import {useNavigate} from "react-router-dom";

const UserDetails = ({userDetails}) => {

    const {id, name, username, email} = userDetails;

    const navigate = useNavigate();

    return (
        <div>

            <h2>id: {id}</h2>
            <h2>name: {name}</h2>
            <h2>username: {username}</h2>
            <h2>email: {email}</h2>
            <button onClick={() => navigate('posts', {state: {id}})}>Post of current user</button>

        </div>
    );
};

export {UserDetails};