const RepliesList = (props) => {
    return (
        <div>
            {props.replies.map((reply) => {
                return <div>{reply.text}</div>
            })}
        </div>
    );
}
 
export default RepliesList;