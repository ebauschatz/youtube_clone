import useCustomForm from "../../hooks/useCustomForm";
import './ReplyForm.css'

const ReplyForm = (props) => {
    const [formData, handleInputChange, handleSubmit] = useCustomForm({}, submitReply);

    function submitReply() {
        props.addReply(formData.replyText);
    }

    return (
        <form onSubmit={handleSubmit} className="reply-form-container">
                <label>
                    Add a reply as {props.user.username}:
                </label>
                <div className="text-section">
                    <i class= "fa fa-long-arrow-right reply-arrow"></i>
                    <textarea className="reply-text"
                        type="text"
                        name="replyText"
                        rows="2"
                        onChange={handleInputChange}
                        value={formData.replyText}
                        required={true}
                    ></textarea>
                </div>
                <div className="submit-section">
                    <button type="submit" className="submit-reply-button">Submit</button>
                </div>
            </form>
    );
}
 
export default ReplyForm;