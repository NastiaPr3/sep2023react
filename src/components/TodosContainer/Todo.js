const Todo = ({todo}) => {

    const {userId, id, title, completed} = todo;

    return (
        <div>
            <h2>userId: {userId}</h2>
            <h3>id: {id}</h3>
            <p>title: {title}</p>
            <h4>completed: {completed.toString()}</h4>
        </div>
    );
};

export {Todo};