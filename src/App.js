import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './components/post/post.component';
import { db } from './firebase/firebase';


function App() {
  const [posts, setPosts] = useState([
    {
      username: "clever",
      caption: "it worked",
      imageUrl: "https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png"
    }
  ]);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => doc.data()));
    })
  }, [])

  return (
    <div className="app">

      <div className='app_header'>



        <img
          className='app_headerImage'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/150px-Instagram_logo.svg.png'
          alt='instagram logo'
        />
      </div>
      <h1>hello</h1>
      {
        posts.map(post => (
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }
    </div>
  );
}

export default App;
