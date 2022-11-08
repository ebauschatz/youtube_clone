import useCustomForm from "../../hooks/useCustomForm";
import React, { useState } from 'react';
import axios from "axios";
import keys from "../../API_Keys.json";
import { useNavigate } from "react-router-dom";
import './SearchPage.css'

const SearchPage = () => {
    const [formData, handleInputChange, handleSubmit] = useCustomForm({}, callSearch);
    const [videos, setVideos] = useState([]);
    const navigate = useNavigate();

    async function callSearch() {
        try {
            let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${formData.search}&part=snippet&key=${keys.googleYouTubeAPIKey}`);
            setVideos(response.data.items);
          }
        catch (error) {
            console.log(error.response.data);
        }
    }

    function toVideoPage(video) {
        navigate('/video', {state:{video:video}});
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="search-section">
                <label className="search-element">
                    Search for a Video:
                </label>
                <input className="search-element"
                    type="text"
                    name="search"
                    onChange={handleInputChange}
                    value={formData.search}
                    required={true}
                />
                <button className="search-button" type="submit">Search</button>
            </form>
            {videos &&
                
                videos.map((video) => {
                    return <div key={video.id.videoId} onClick={() => toVideoPage(video)} className="search-results-list">
                        <img src={video.snippet.thumbnails.medium.url} alt="video thumbnail" />
                        <p>{video.snippet.title}</p>
                        <p className="search-result-description">{video.snippet.description}</p>
                    </div>
                })
            }
        </div>
    );
}
 
export default SearchPage;