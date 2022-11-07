import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import CommentList from "../../components/CommetList/CommentList";

const VideoPage = () => {
    const [user, token] = useAuth();
    const location = useLocation();
    let video = location.state.video;
    
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const getAllComments = async () => {
            try {
                let response = await axios.get(`http://127.0.0.1:8000/api/comments/video/${video.id.videoId}/`);
                setComments(response.data);
            }
            catch (error) {
                console.log(error.response.data);
            }
        };
        getAllComments();
      }, [video.id.videoId])

    return (
        <div>
            <VideoPlayer videoId={video.id.videoId} title={video.snippet.title} description={video.snippet.description} />
            <CommentList comments={comments} token={token}/>
            <RelatedVideos videoId={video.id.videoId} />
        </div>
    );
}

export default VideoPage;