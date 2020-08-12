import React from 'react';
import './style.scss';

const VideoGroup = (props) => {
    const { children } = props;
    const playerArr = [];
    let f1 = 1, f2;
    const videoGroup = {
        players: []
    };
    const renderChildren = () => {
        return React.Children.toArray(children(f1, f2)).map((item)=> {
            const cprops = { ...item.props };
            const preRef = item.ref;
            const preOnPlay = cprops.onPlay;
            let player;
            cprops.ref = (...args) => {
                if(preRef) preRef(...args);
                const [ Player ] = args;
                videoGroup.players.push(Player);
                player = Player;
            }
            cprops.onPlay = (...args) => {
                if(preOnPlay) preOnPlay(...args);
                videoGroup.players.filter((pitem) => {
                    return pitem !== player;
                }).map((playerItem) => {
                    playerItem.pause();
                })
            }
            return React.cloneElement(item, cprops);
        })
    }
    
    return (
        <>
            {renderChildren()}
        </>
    )
}

export default VideoGroup;