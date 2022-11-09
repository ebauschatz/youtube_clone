import Comment from "../Comment/Comment";
import './CommentList.css'

const CommentList = (props) => {
    return (
        <div>
            <div className="comment-section-header">
                Comments
            </div>
            {props.comments && 
                props.comments.map((comment) => {
                    return <Comment key={comment.id} comment={comment} token={props.token} user={props.user} reactToComment={props.reactToComment} />
                })
            }
        </div>
    );
}
 
export default CommentList;