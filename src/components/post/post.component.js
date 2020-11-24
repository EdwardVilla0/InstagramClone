import React from 'react';
import './post.styles.css';

function Post() {
    return (
        <div className='post_container'>
            <h3>Username</h3>
            <img
                className='post_image'
                src='https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png'
            />
            <h4 className='post_text'><strong>username:</strong> caption</h4>
        </div>
    )
}

export default Post;