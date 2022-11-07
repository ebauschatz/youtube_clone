import Comment from "../Comment/Comment";

const CommentList = (props) => {
    return (
        <div>
            Comments
            {props.comments && 
                props.comments.map((comment) => {
                    return <Comment comment={comment} />
                })
            }
        </div>
    );
}
 
export default CommentList;