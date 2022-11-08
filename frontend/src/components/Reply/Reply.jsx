import './Reply.css'

const Reply = (props) => {
    return (
        <div className="reply-container">
            <i class= "fa fa-long-arrow-right reply-arrow"></i>
            {props.reply.text}
        </div>
    );
}
 
export default Reply;