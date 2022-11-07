import Reply from "../Reply/Reply";

const RepliesList = (props) => {
    return (
        <div>
            {props.replies.map((reply) => {
                return <Reply key={reply.id} reply={reply} />
            })}
        </div>
    );
}
 
export default RepliesList;