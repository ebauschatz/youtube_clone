import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RepliesList from '../RepliesList/RepliesList'

const Comment = (props) => {
    const [replies, setReplies] = useState([]);

    useEffect(() => {
        const getAllReplies = async () => {
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
        };
        getAllReplies();
      }, [props.comment.id, props.token])

    return (
        <div>
            <p>{props.comment.text}</p>
            <p>{props.comment.likes}</p>
            <p>{props.comment.dislikes}</p>
            {props.token && <RepliesList replies={replies}/>}
        </div>
    );
}
 
export default Comment;