import React, { useState, useEffect } from 'react';
import keys from "../../API_Keys.json";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './RelatedVideos.css'

const RelatedVideos = (props) => {
    const [relatedVideos, setRelatedVideos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRelatedVideos = async () => {
            try {
                let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${props.videoId}&type=video&part=snippet&key=${keys.googleYouTubeAPIKey}`);
                setRelatedVideos(response.data.items);
            } 
            catch (error) {
                console.log(error.response.data);
            }
        };
        fetchRelatedVideos();
    }, [props.videoId]);

    function toVideoPage(video) {
        navigate('/video', {state:{video:video}});
    }

    return (
        <div>
            <p className="section-title">
                Related Videos
            </p>
            {relatedVideos.map((relatedVideo) => {
                return <div key={relatedVideo.id.videoId} onClick={() => toVideoPage(relatedVideo)} className="related-video">
                    <img src={relatedVideo.snippet.thumbnails.default.url} alt="video thumbnail" className="related-video-thumbnail" />
                    <div className="related-video-info">
                        <div className="related-video-title">{relatedVideo.snippet.title}</div>
                        <div className="channel-title">{relatedVideo.snippet.channelTitle}</div>
                    </div>
                </div>
            })}
        </div>
    );
}
 
export default RelatedVideos;