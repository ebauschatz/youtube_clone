import Reply from "../Reply/Reply";
import './RepliesList.css'

const RepliesList = (props) => {
    return (
        <div className="replies-container">
            <div>Replies</div>
            {props.replies.map((reply) => {
                return <Reply key={reply.id} reply={reply} />
            })}
        </div>
    );
}
 
export default RepliesList;