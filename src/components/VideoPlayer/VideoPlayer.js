import React from "react";
import ReactPlayer from "react-player";
import styles from "./videoPlayer.module.css";
import InstagramEmbed from "react-instagram-embed";

const VideoPlayer = () => {
  return (
    <div>
      <div className={styles.videoplayer}>
        <ReactPlayer
          controls
          url="https://www.youtube.com/watch?app=desktop&v=kRime9FkPpc"
        />
      </div>
      <div>
        <InstagramEmbed
          url="https://www.instagram.com/p/CTcep4Ko4wo/?utm_source=ig_web_copy_link"
          clientAccessToken="1309545776149670|IGQVJXN3Y3YWxpUFpjMUtpSFotQzlJUldGaU1ERzRWM2djcVdTU25jYTFfUkZA6SUloY2lOLXROLTl4cUVkSS1FMml3SEdvZAFhPNnZARcW5xQTlyYUZArcGNDWVpvdW1wa0N3bVhiOVZASNlBxckduTDlNQQZDZD"
          maxWidth={320}
          hideCaption={false}
          containerTagName="div"
          protocol=""
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
