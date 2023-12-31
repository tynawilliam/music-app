import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
  faVolumeMute,
  faVolumeUp,
} from "@fortawesome/free-solid-svg-icons";
import { AudioPlayerProps } from "../types/types";

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioList }) => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  const audioRef = useRef<HTMLAudioElement>(null);

  const playNextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % audioList.length);
  };

  const playPrevSong = () => {
    setCurrentSongIndex(
      (prevIndex) => (prevIndex - 1 + audioList.length) % audioList.length
    );
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        const playPromise = audioRef.current.play();
        playPromise
          .then(null)
          .catch((error) => console.error("Play was prevented: ", error));
      }
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setProgress(value);
    if (audioRef.current) {
      audioRef.current.currentTime = (value / 100) * audioRef.current.duration;
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      isPlaying ? audioRef.current.play() : audioRef.current.pause();
    }
  }, [isPlaying, audioRef]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  // useEffect(() => {
  //   setIsPlaying(true);
  // }, [currentSongIndex]);

  useEffect(() => {
    const updateProgress = () => {
      if (audioRef.current) {
        const value =
          (audioRef.current.currentTime / audioRef.current.duration) * 100;
        setProgress(value);
      }
    };

    audioRef.current?.addEventListener("timeupdate", updateProgress);

    return () => {
      audioRef.current?.removeEventListener("timeupdate", updateProgress);
    };
  }, []);

  const currentSong = audioList[currentSongIndex];

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 bg-secondary text-white flex items-center justify-between px-4 py-5">
      {/* Song Cover and Details */}
      {currentSong && (
        <>
          <div className="flex items-center ml-10 space-x-4">
            <img
              src={currentSong.image}
              alt={`Cover for ${currentSong.title}`}
              className="w-10 h-10 object-cover rounded-full"
            />
            <div>
              <p className="text-sm font-semibold">{currentSong.title}</p>
              <p className="text-xs text-gray-400">{currentSong.artist}</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="flex-grow mx-2">
            <div
              className="progress-bar fixed left-96 w-1/2 h-1 bg-gray-300 rounded"
              style={{ "--progress": `${progress}%` } as React.CSSProperties}
            >
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={handleProgressChange}
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
          </div>

          {/* Playback Controls */}
          <div className="flex items-center mr-10 space-x-7">
            <FontAwesomeIcon
              icon={faBackward}
              onClick={playPrevSong}
              className="cursor-pointer"
              size="lg"
            />
            <FontAwesomeIcon
              icon={isPlaying ? faPause : faPlay}
              onClick={togglePlayPause}
              className="cursor-pointer"
              size="lg"
            />
            <FontAwesomeIcon
              icon={faForward}
              onClick={playNextSong}
              className="cursor-pointer"
              size="lg"
            />
            <FontAwesomeIcon
              icon={isMuted ? faVolumeMute : faVolumeUp}
              onClick={toggleMute}
              className="cursor-pointer"
              size="lg"
            />
          </div>

          <audio
            ref={audioRef}
            src={currentSong.audioSrc}
            preload="metadata"
            onEnded={playNextSong}
          />
        </>
      )}
    </div>
  );
};

export default AudioPlayer;
