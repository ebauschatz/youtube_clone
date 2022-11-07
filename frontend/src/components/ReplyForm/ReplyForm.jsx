import useCustomForm from "../../hooks/useCustomForm";

const ReplyForm = (props) => {
    const [formData, handleInputChange, handleSubmit] = useCustomForm({}, submitReply);

    function submitReply() {
        props.addReply(formData.replyText);
    }

    return (
        <form onSubmit={handleSubmit}>
                <label>
                    Add a reply as {props.user.username}:
                    <input 
                        type="text"
                        name="replyText"
                        onChange={handleInputChange}
                        value={formData.replyText}
                        required={true}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
    );
}
 
export default ReplyForm;