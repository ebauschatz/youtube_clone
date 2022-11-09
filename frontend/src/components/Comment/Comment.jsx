import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RepliesList from '../RepliesList/RepliesList'
import ReplyForm from '../ReplyForm/ReplyForm';
import './Comment.css'

const Comment = (props) => {
    const [replies, setReplies] = useState([]);

    useEffect(() => {
        getAllReplies();
    }, [props.token])

    async function getAllReplies() {
        if (props.token) {
            try {
                let response = await axios.get(`http://127.0.0.1:8000/api/replies/comment/${props.comment.id}/`, {
                    headers: {
                      Authorization: "Bearer " + props.token,
                    },
                  });
                setReplies(response.data);
            }
            catch (error) {
                console.log(error.response.data);
            }
        }
        else {
            setReplies([]);
        }
    }

    async function addReply(replyText) {
        try {
            let response = await axios.post(`http://127.0.0.1:8000/api/replies/comment/${props.comment.id}/`,
                {
                    text: replyText
                },
                {
                    headers: {
                        Authorization: "Bearer " + props.token,
                    },
                }
            );
            if (response.status === 201) {
                await getAllReplies();
            }
        }
        catch (error) {
            console.log(error.response.data);
        }
    }

    function handleLikeClick(comment) {
        let newComment = {
            video_id: comment.video_id,
            text: comment.text,
            likes: comment.likes + 1,
            dislikes: comment.dislikes
        }
        props.likeComment(comment.id, newComment);
    }

    return (
        <div className="comment-container">
            <p className="comment-text">
                {props.comment.text}
            </p>
            <div className="reactions-section">
                <div className="reaction">
                <i className="fa fa-thumbs-up like-indicator" onClick={() => handleLikeClick(props.comment)}></i> ({props.comment.likes})
                </div>
                <div className="reaction">
                <i className="fa fa-thumbs-down dislike-indicator"></i> ({props.comment.dislikes})
                </div>
            </div>
            {props.token && replies[0] && <RepliesList replies={replies}/>}
            {props.token && <ReplyForm user={props.user} addReply={addReply} />}
        </div>
    );
}
 
export default Comment;