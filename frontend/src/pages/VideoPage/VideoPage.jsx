import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import './VideoPage.css'
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import CommentList from "../../components/CommentList/CommentList";
import CommentForm from "../../components/CommentForm/CommentForm";

const VideoPage = () => {
    const [user, token] = useAuth();
    const location = useLocation();
    let video = location.state.video;
    
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getAllComments();
    }, [video.id.videoId])

    async function getAllComments() {
        try {
            let response = await axios.get(`http://127.0.0.1:8000/api/comments/video/${video.id.videoId}/`);
            setComments(response.data);
        }
        catch (error) {
            console.log(error.response.data);
        }
    }

    async function addComment(commentText) {
        try {
            let response = await axios.post("http://127.0.0.1:8000/api/comments/",
                {
                    video_id: video.id.videoId,
                    text: commentText,
                    likes: 0,
                    dislikes: 0
                },
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            );
            if (response.status === 201) {
                await getAllComments();
            }
        }
        catch (error) {
            console.log(error.response.data);
        }
    }

    async function likeComment(commentId, updatedComment) {
        try {
            let response = await axios.put(`http://127.0.0.1:8000/api/comments/${commentId}/`,
                updatedComment,
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            );
            console.log(response);
            if (response.status === 200) {
                await getAllComments();
            }
        }
        catch (error) {
            console.log(error.response.data);
        }
    }

    return (
        <div className="video-page">
            <div className="current-video">
                <VideoPlayer videoId={video.id.videoId} title={video.snippet.title} description={video.snippet.description} />
                {token && <CommentForm user={user} addComment={addComment} />}
                <CommentList comments={comments} token={token} user={user} likeComment={likeComment} />
            </div>
            <div className="related-video-list">
                <RelatedVideos videoId={video.id.videoId} />
            </div>
        </div>
    );
}

export default VideoPage;