import React, { useRef, useEffect } from 'react';
import "./YoutubePlayer.css"
const YoutubePlayer = ({ videoSrc }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Define the onYouTubeIframeAPIReady function
    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('youtube-player', {
        videoId: videoSrc,
        events: {
          onReady: onPlayerReady,
        },
      });
    };

    // Cleanup function
    return () => {
      window.onYouTubeIframeAPIReady = null;
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [videoSrc]);

  const onPlayerReady = (event) => {
    const player = event.target;
    // Enable fullscreen button
    player.setOption('allowfullscreen', 'true');
  };

  return (
    <div>
      <iframe
        className="youtube-player"
        
        src={videoSrc}
        
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YoutubePlayer;
