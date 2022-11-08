import Comment from "../Comment/Comment";
import './CommentList.css'

const CommentList = (props) => {
    return (
        <div>
            <div className="commentSectionHeader">
                Comments
            </div>
            {props.comments && 
                props.comments.map((comment) => {
                    return <Comment key={comment.id} comment={comment} token={props.token} user={props.user} />
                })
            }
        </div>
    );
}
 
export default CommentList;