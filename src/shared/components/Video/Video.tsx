import React from 'react';

import './video.scss'

const Video = (): JSX.Element => {
    return (
        <>
            <video id="video-background" autoPlay loop muted playsInline>
                <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
            </video>
        </>
    )
}

export default Video;