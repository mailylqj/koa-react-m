import React from 'react';
import VideoGroup from '../component/ReactVideo';
import { Player } from 'video-react';
import 'video-react/styles/scss/video-react.scss';

const Video = () => {
    const players = [];
    return(
        <div>
            <VideoGroup>
                {(f1, f2) => {
                    console.log(f1)
                    return (
                        <>
                            <Player ref={player => {
                                console.log(12345623456);
                            }} onPlay={()=> console.log('play')} poster="https://video-react.js.org/assets/poster.png" onref="1234567">
                                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/mp4"></source>
                            </Player>
                            <Player poster="https://video-react.js.org/assets/poster.png">
                                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/mp4"></source>
                            </Player>
                            <button onClick={() => {}}></button>
                        </>
                    )
                }}
            </VideoGroup>
            <div >{players.length}</div>
        </div>
    )
}

export default Video;