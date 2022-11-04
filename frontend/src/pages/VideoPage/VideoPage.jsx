import { useLocation } from "react-router-dom";
import VideoPlayer from "../../components/VIdeoPlayer/VideoPlayer";

const VideoPage = () => {
    const location = useLocation();
    let video = location.state.video;
    

    return (
        <VideoPlayer videoId={video.id.videoId} title={video.snippet.title} description={video.snippet.description} />
    );
}
 
export default VideoPage;