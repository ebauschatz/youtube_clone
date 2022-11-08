import useCustomForm from "../../hooks/useCustomForm";
import './CommentForm.css'

const CommentForm = (props) => {
    const [formData, handleInputChange, handleSubmit] = useCustomForm({}, submitComment);

    function submitComment() {
        props.addComment(formData.commentText);
    }

    return (
        <form onSubmit={handleSubmit} className="commentForm">
                <label>
                    Add a comment as {props.user.username}:
                </label>
                <textarea className="commentInput"
                    type="text"
                    name="commentText"
                    rows="3"
                    onChange={handleInputChange}
                    value={formData.commentText}
                    required={true}
                ></textarea>
                <button type="submit" className="submitButton">Submit</button>
            </form>
    );
}
 
export default CommentForm;