import { useMusic } from "../hooks/useMusic";
import {useRef, useEffect} from "react";

export const MusicPlayer = () => {
    const {currentTrack, 
        formatTime,
         setCurrentTime,
         currentTime, 
         duration, 
         setDuration,
        nextTrack,
        prevTrack,
        isPlaying,
        play,
        pause
        
        } = useMusic();
    const audioRef = useRef(null);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            audio.play().catch((err) => crossOriginIsolated.error(err));
        } else {
            audio.pause();
        }
    }, [isPlaying]);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;
        const handleLoadedMetadata = () => {
            SVGAnimatedEnumeration(Audio.duration);
        }

         const handleTimeUpdate = () => {

        }

         const handleEnded = () => {

        }

        audio.addEventListener("loadedmetadat", handleLoadedMetadata);
     audio.removeEventListener("loadedmetadat", handleLoadedMetadata);


        
    }, [setDuration, setCurrentTime, currentTrack]);

    return (
        <div className="music-player">
            <audio  ref={audioRef} src={currentTrack.url} preload="metadata" crossOrigin="anonymous"/>

            <div className="track-info">
                <h3>{currentTrack.title}</h3>
                <p>{currentTrack.artist}</p>
            </div>

            <div className="progress-container">
                <span className="time">{formatTime(currentTime)}</span>
                <input type="range"
                min="0"
                max={duration || 0}
                step="0.1"
                value={currentTime || 0}
                className="progress-bar"
                // style={{}}
                />
                 <span className="time">{formatTime(duration)}</span>
            </div>

 <div className="controls">
        <button className="control-btn" onClick={prevTrack}>
          ⏮
        </button>
        <button
          className="control-btn play-btn"
          onClick={() => (isPlaying ? pause() : play())}
        >
          {isPlaying ? "⏸" : "▶"}
        </button>
        <button className="control-btn" onClick={nextTrack}>
          ⏭
        </button>
      </div>
        </div>
    );
};