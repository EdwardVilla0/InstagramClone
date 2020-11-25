import React from 'react';
import './post.styles.css';
import Avatar from '@material-ui/core/Avatar';

function Post() {
    return (
        <div className='post'>
            <div className='post_header'>
                <Avatar
                    className='post_avatar'
                    alt='EdwardV'
                    src='/static/images/avatar/1.jpg'
                />
                <h3>Username</h3>
            </div>

            <img
                className='post_image'
                src='https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png'
            />
            <h4 className='post_text'><strong>username:</strong> caption</h4>
        </div>
    )
}

export default Post;