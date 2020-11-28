import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './components/post/post.component';
import { auth, db } from './firebase/firebase';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button, Input } from '@material-ui/core';



function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user has logged in
        console.log(authUser);
        setUser(authUser);

        if (authUser.displayName) {
          // dont update username
        } else {
          // if we just create someone
          return authUser.updateProfile({
            displayName: username,
          });
        }
      } else {
        // user has logged out
        setUser(null);
      }
    })

    return () => {
      //perform some cleanup actions
      unsubscribe();
    }
  }, [user, username]);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })));
    })
  }, [])

  const signUp = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));
  }

  return (
    <div className="app">

      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <form className="app_signup">
            <center>
              <img
                className='app_headerImage'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/150px-Instagram_logo.svg.png'
                alt=''
              />
            </center>

            <input
              placeholder="username"
              type="text"
              value={username}
              onChange={((e) => setUsername(e.target.value))}
            />

            <input
              placeholder="email"
              type="email"
              value={email}
              onChange={((e) => setEmail(e.target.value))}
            />

            <input
              placeholder="password"
              type="password"
              value={password}
              onChange={((e) => setPassword(e.target.value))}
            />
            <Button
              type="submit"
              onClick={signUp}>sign up</Button>
          </form>
        </div>
      </Modal>

      <div className='app_header'>

        <img
          className='app_headerImage'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/150px-Instagram_logo.svg.png'
          alt='instagram logo'
        />
      </div>

      <Button onClick={() => setOpen(true)}>Sign Up</Button>

      <h1>hello</h1>
      {
        posts.map(({ id, post }) => (
          <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }
    </div>
  );
}

export default App;
