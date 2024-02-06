const Post = ({posts, getCurrentPost}) => {

    const {id, title} = posts;

    return (
        <div>
            <div>{id}</div>
            <div>{title}</div>
            <button onClick={()=> getCurrentPost(posts)}>Details</button>
        </div>
    );
};

export {Post};