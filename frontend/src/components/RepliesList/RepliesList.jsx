import Reply from "../Reply/Reply";

const RepliesList = (props) => {
    return (
        <div>
            {props.replies.map((reply) => {
                return <Reply reply={reply} />
            })}
        </div>
    );
}
 
export default RepliesList;