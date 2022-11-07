import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RepliesList from '../RepliesList/RepliesList'
import ReplyForm from '../ReplyForm/ReplyForm';

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

    return (
        <div>
            <p>{props.comment.text}</p>
            <p>{props.comment.likes}</p>
            <p>{props.comment.dislikes}</p>
            {props.token && <RepliesList replies={replies}/>}
            {props.token && <ReplyForm user={props.user} addReply={addReply} />}
        </div>
    );
}
 
export default Comment;