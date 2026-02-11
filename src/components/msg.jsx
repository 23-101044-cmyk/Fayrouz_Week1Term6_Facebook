import React from 'react';
import './msg.css'

const msg = () => {
    return ( 
        <article className='message'>
            <div className='textboxdiv'>
                <div className='pfp2'></div>
                <div className='tb'>
                    <h2 className='tbtext'>What’s on your mind, Jenny</h2>
                </div>
            </div>
            <div className='line1'></div>
            <div className='reply'>
                <div className='reactionbox'>
                    <div className='vid'></div>
                    <h2 className='reactionlabel'>Live video</h2>
                </div>
                <div className='reactionbox'>
                    <div className='upload'></div>
                    <h2 className='reactionlabel'>Photo/video</h2>
                </div>
                <div className='reactionbox'>
                    <div className='react'></div>
                    <h2 className='reactionlabel'>Feeling/activity</h2>
                </div>
            </div>
        </article>
     );
}
 
export default msg;