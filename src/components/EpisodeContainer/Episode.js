import {useNavigate} from "react-router-dom";

const Episode = ({episode}) => {

    const {id, name, episode: chapter} = episode;

    const navigate = useNavigate();

    return (
        <div onClick={() => navigate('/characters', {state: episode}) }>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>chapter:{chapter}</div>
            <hr/>
        </div>
    );
};

export {Episode};