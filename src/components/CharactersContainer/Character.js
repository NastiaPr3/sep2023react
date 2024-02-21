import {useEffect, useState} from "react";

const Character = ({item}) => {

    const [char, setChar] = useState(null);

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const res = await fetch(item);
                const data = await res.json();
                setChar(data)
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        
    }

    fetchCharacter();
    }, [item])
    
    return (
        <div>
            {char && (
                <div>
                    <div>Id: {char.id}</div>
                    <div>Name: {char.name}</div>
                    <img src={char.image} alt=""/>
                    <hr/>
                </div>
            )}
        </div>
    );
};

export {Character};