import React from 'react';
import './App.css';
import Post from './components/post/post.component';


function App() {
  return (
    <div className="App">

      <div className='app_header'>
        <img
          className='app_headerImage'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/150px-Instagram_logo.svg.png'
          alt='instagram logo'
        />
      </div>
      <h1>hello</h1>
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default App;
