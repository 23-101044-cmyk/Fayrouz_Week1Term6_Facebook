import React from 'react';
import './post.css'

const post = () => {
    return ( 

        <article className='post'>
            <div className='postinfo'>
                <div className='postpfp'></div>
                <h2 className='more'>...</h2>
            </div>
            <div className='postimg'></div>
        </article>

     );
}
 
export default post;