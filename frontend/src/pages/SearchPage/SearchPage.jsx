import useCustomForm from "../../hooks/useCustomForm";
import React, { useState } from 'react';
import axios from "axios";
import keys from "../../API_Keys.json";

const SearchPage = () => {
    const [formData, handleInputChange, handleSubmit] = useCustomForm({}, callSearch);
    const [videos, setVideos] = useState("");

    async function callSearch() {
        try {
            let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${formData.search}&part=snippet&key=${keys.googleYouTubeAPIKey}`);
            setVideos(response.data.items);
          }
        catch (error) {
            console.log(error.response.data);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Search for a Video:
                    <input 
                        type="text"
                        name="search"
                        onChange={handleInputChange}
                        value={formData.search}
                        required={true}
                    />
                </label>
                <button type="submit">Search</button>
            </form>
            {videos &&
                videos.map((video) => {
                    return <div key={video.id.videoId}>
                        <img src={video.snippet.thumbnails.default.url} alt="video thumbnail" />
                        <p>{video.snippet.title}</p>
                        <p>{video.snippet.description}</p>
                    </div>
                })
            }
        </div>
    );
}
 
export default SearchPage;