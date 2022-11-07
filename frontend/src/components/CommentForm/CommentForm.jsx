import useCustomForm from "../../hooks/useCustomForm";

const CommentForm = (props) => {
    const [formData, handleInputChange, handleSubmit] = useCustomForm({}, submitComment);

    function submitComment() {
        props.addComment(formData.commentText);
    }

    return (
        <form onSubmit={handleSubmit}>
                <label>
                    Add a comment as {props.user.username}:
                    <input 
                        type="text"
                        name="commentText"
                        onChange={handleInputChange}
                        value={formData.commentText}
                        required={true}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
    );
}
 
export default CommentForm;