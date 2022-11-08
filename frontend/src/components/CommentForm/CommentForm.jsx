import useCustomForm from "../../hooks/useCustomForm";
import './CommentForm.css'

const CommentForm = (props) => {
    const [formData, handleInputChange, handleSubmit] = useCustomForm({}, submitComment);

    function submitComment() {
        props.addComment(formData.commentText);
    }

    return (
        <form onSubmit={handleSubmit} className="comment-form">
                <label>
                    Add a comment as {props.user.username}:
                </label>
                <textarea className="comment-input"
                    type="text"
                    name="commentText"
                    rows="3"
                    onChange={handleInputChange}
                    value={formData.commentText}
                    required={true}
                ></textarea>
                <div className="submit-section">
                    <button type="submit" className="submit-button">Submit</button>
                </div>
            </form>
    );
}
 
export default CommentForm;