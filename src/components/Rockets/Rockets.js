import {Rocket} from "../Rocket/Rocket";
import {useEffect, useState} from 'react';
import axios from "axios";

const Rockets = () => {
    let [rockets, setRockets] = useState([]);

    useEffect(() => {
        axios('https://api.spacexdata.com/v3/launches/').then(({data}) => setRockets(data))
    }, []);

    return (
        <div>
            <h2>Rockets</h2>
            {rockets.map((rocket, index) =>
                <Rocket
                    key={index}
                    item={rocket}
                />)
            }
        </div>
    );
};

export {Rockets};
