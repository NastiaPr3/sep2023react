const Album = ({album}) => {

    const {userId, id, title} = album;

    return (
        <div>
            <h2>userId: {userId}</h2>
            <h3>id: {id}</h3>
            <p>title: {title}</p>
        </div>
    );
};

export {Album};