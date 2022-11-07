import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import VideoPlayer from "../../components/VIdeoPlayer/VideoPlayer";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import CommentList from "../../components/CommetList/CommentList";

const VideoPage = () => {
    const location = useLocation();
    let video = location.state.video;
    
    const [comments, setComments] = useState();

    useEffect(() => {
        getAllComments();
      }, [])

    async function getAllComments() {
        let response = await axios.get(`http://127.0.0.1:8000/api/comments/video/${video.id.videoId}/`);
        setComments(response.data);
        console.log(response.data)
    }

    return (
        <div>
            <VideoPlayer videoId={video.id.videoId} title={video.snippet.title} description={video.snippet.description} />
            <CommentList comments={comments}/>
            <RelatedVideos videoId={video.id.videoId} />
        </div>
    );
}

export default VideoPage;