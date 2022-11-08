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
            <p className="sectionTitle">
                Related Videos
            </p>
            {relatedVideos.map((relatedVideo) => {
                return <div key={relatedVideo.id.videoId} onClick={() => toVideoPage(relatedVideo)} className="relatedVideo">
                    <img src={relatedVideo.snippet.thumbnails.default.url} alt="video thumbnail" />
                    <p className="relatedVideoTitle">{relatedVideo.snippet.title}</p>
                    <p className="channelTitle">{relatedVideo.snippet.channelTitle}</p>
                </div>
            })}
        </div>
    );
}
 
export default RelatedVideos;