import React, { useState } from "react";
import "./App.scss";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Posts } from "./pages/posts/Posts";
import { SinglePost } from "./pages/posts/single-post/SinglePost";
import { Room } from "./pages/room/Room";
import { UserInfo } from "./types/interfaces";

export const UserContext = React.createContext<UserContext>({
  user: null,
  setUser: () => {},
});

interface UserContext {
  user: UserInfo | null;
  setUser: (user: UserInfo) => void;
}

function App() {
  const [user, setUser] = useState<UserInfo | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
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
                <Link to="/room">Room</Link>
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
              <Route path="/room">
                <Room />
              </Route>
              <Route path="*">
                <h2>Not Found</h2>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
