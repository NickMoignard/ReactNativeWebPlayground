import React, { useContext } from "react";
import { Text, View, Button } from "react-native";
import { observer } from "mobx-react";
import { Link, BrowserRouter, Route } from "react-router-dom";
import "../App.css";
import { Messages } from "./Messages";
import { Home } from "./Home";
import { Profile } from "./Profile";
import { Collabs } from "./Collabs";
import { Settings } from "./Settings";

interface Props {}

export const Header: React.FC<Props> = observer(() => {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-light bg-light">
        <ul className="navbar-nav">
          <Link to="/settings">
            <li className="nav-item active">Settings</li>
          </Link>
          <Link to="/profile">
            <li className="nav-item">Profile</li>
          </Link>
          <Link to="/home">
            <li className="nav-item">Home</li>
          </Link>
          <Link to="/collabs">
            <li className="nav-item">Collabs</li>
          </Link>
          <Link to="/messages">
            <li className="nav-item">Messages</li>
          </Link>
        </ul>
      </nav>
      <Route path="/" exact component={Home} />
      <Route path="/messages" component={Messages} />
      <Route path="/profile" component={Profile} />
      <Route path="/collabs" component={Collabs} />
      <Route path="/settings" component={Settings} />
    </BrowserRouter>
  );
});
