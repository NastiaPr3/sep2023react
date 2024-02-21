import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

import {Character} from "./Character";

const Characters = () => {

    
    const {state: data} = useLocation();

    const [character, setCharacter] = useState([]);

    useEffect(() => {
        setCharacter(data.characters)
    }, [data]);


    
    return (
        <div>
            {
                character.map((item, index) => <Character key={index} item={item}/>)
            }
        </div>
    );
};

export {Characters};