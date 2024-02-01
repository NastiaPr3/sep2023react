const Character = ({character}) => {
    const {name, desc, img} = character;
    return (
        <div>
            <h1>{name}</h1>
            <p>{desc}</p>
            <img src={img} alt=""/>
        </div>
    );
};

export {Character};