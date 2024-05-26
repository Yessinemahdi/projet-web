// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Home from './Home';
import Write from './Write';
import MyPosts from './MyPosts';
import PostDetails from './PostDetails';
import EditPost from './EditPost';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div>
        <nav>
          <Link to="/home">Home</Link>
          {user ? (
            <>
              <Link to="/write">Write</Link>
              <Link to="/myposts">My Posts</Link>
              <span>{user.username}</span>
              <button onClick={() => setUser(null)}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </nav>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login setUser={setUser} />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/write">
            <Write user={user} />
          </Route>
          <Route path="/myposts">
            <MyPosts user={user} />
          </Route>
          <Route path="/posts/:id">
            <PostDetails />
          </Route>
          <Route path="/edit_post/:id">
            <EditPost user={user} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
