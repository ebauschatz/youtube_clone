const Comment = (props) => {
    return (
        <div>
            <p>{props.comment.text}</p>
            <p>{props.comment.likes}</p>
            <p>{props.comment.dislikes}</p>
        </div>
    );
}
 
export default Comment;