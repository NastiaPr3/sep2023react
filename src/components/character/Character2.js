const Character2 = ({character2}) => {

    const {name,status,species,gender,image} = character2;

    return (
        <div>
            <h1>{name}</h1>
            <h3>{status}</h3>
            <h3>{species}</h3>
            <h3>{gender}</h3>
            <img src={image} alt=""/>
        </div>
    );
};

export {Character2};