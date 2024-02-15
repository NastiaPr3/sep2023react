import {useNavigate} from "react-router-dom";

const User = ({user}) => {

    const {id, name} = user;

    const navigate = useNavigate();

    return (
        <div>
            <h2>id: {id}</h2>
            <h3>name {name}</h3>
            <button onClick={() => navigate(id.toString())}>Details</button>
            {/*<Link to={'users/:id'} onClick={() => navigate(id.toString())}>Details</Link>*/}
            <hr/>
        </div>
    );
};

export {User};