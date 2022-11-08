import './VideoPlayer.css'

const VideoPlayer = (props) => {
    let videoUrl = `https://www.youtube.com/embed/${props.videoId}?autoplay=0`;
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
            <p className="videoTitle">
                {props.title}
            </p>
            <p className="videoDescription">
                {props.description}
            </p>
        </div>
    );
}
 
export default VideoPlayer;