const PostDetails = ({postDetails}) => {

    const {userId, id, title, body} = postDetails;

    return (
        <div>
            <div>{userId}</div>
            <div>{id}</div>
            <div>{title}</div>
            <div>{body}</div>
        </div>
    );
};

export {PostDetails};