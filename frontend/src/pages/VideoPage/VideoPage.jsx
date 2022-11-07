import { useLocation } from "react-router-dom";
import VideoPlayer from "../../components/VIdeoPlayer/VideoPlayer";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";

const VideoPage = () => {
    const location = useLocation();
    let video = location.state.video;
    

    return (
        <div>
            <VideoPlayer videoId={video.id.videoId} title={video.snippet.title} description={video.snippet.description} />
            <RelatedVideos videoId={video.id.videoId} />
        </div>
    );
}

export default VideoPage;