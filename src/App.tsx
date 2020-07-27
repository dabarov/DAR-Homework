import React from "react";
import "./App.scss";

import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Posts } from "./pages/posts/Posts";
import { SinglePost } from "./pages/posts/single-post/SinglePost";
import { Chat } from "./pages/chat/Chat";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="App-navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/chat">Chat</Link>
            </li>
          </ul>
        </nav>
        <div className="App-content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/posts">
              <Posts />
            </Route>
            <Route path="/posts/:postId" component={SinglePost} />
            <Route path="/chat">
              <Chat />
            </Route>
            <Route path="*">
              <h2>Not Found</h2>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
