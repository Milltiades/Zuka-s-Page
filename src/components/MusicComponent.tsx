import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false); // Add a state variable for playing

  const handlePlayToggle = () => {
    const audioEl = audioRef.current;
    if (audioEl) {
      if (!isPlaying) {
        audioEl.play();
        setIsPlaying(true);
      } else {
        audioEl.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <Div>
      <audio ref={audioRef}>
      <source src="/assets/music/stronger.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      Music <Button color={isPlaying ? "red" : "green"} onClick={handlePlayToggle}>
        {isPlaying ? 'Stop' : 'Play'} {/* Display the appropriate label */}
      </Button>
    </Div>
  );
}



export default AudioPlayer;


const Div = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    
`

const Button = styled.button<any>`
    border: none;
    background: transparent;
    color : ${(props) => props.color};
    font-size: 20px;
    margin-left: 10px;
    cursor: pointer;
`


