import { useLocation } from "react-router-dom";

const VideoPage = () => {
    const location = useLocation();
    let video = location.state.video;
    let videoId = video.id.videoId;
    let videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=0`;

    return (
        <div>
            <iframe
                id="ytplayer"
                title="ytplayer"
                type="text/html"
                width="640"
                height="360"
                src={videoUrl}
                frameborder="0"
            >
            </iframe>
            <p>
                {video.snippet.title}
            </p>
            <p>
                {video.snippet.description}
            </p>
        </div>
    );
}
 
export default VideoPage;