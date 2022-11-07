import Comment from "../Comment/Comment";

const CommentList = (props) => {
    return (
        <div>
            Comments
            {props.comments && 
                props.comments.map((comment) => {
                    return <Comment key={comment.id} comment={comment} token={props.token}/>
                })
            }
        </div>
    );
}
 
export default CommentList;