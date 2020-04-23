import React, { useEffect } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Overview from "./pages/Overview"
import Items from "./pages/Items"
import Wishlist from "./pages/Wishlist"
import Assign from "./pages/Assign"
import Settings from "./pages/Settings"

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
import { selectToken } from "../src/store/user/selectors"

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);
  const token = useSelector(selectToken)
  // const navigationControl = token ? <Navigation /> : null

  return (
    <div className="App"><div><h1 className="banner">LOOTCOUNCIL.XX</h1></div>
      <Navigation />
      {/* {navigationControl} */}
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/overview" component={Overview} />
        <Route path="/items" component={Items} />
        <Route path="/wishlist" component={Wishlist} />
        <Route path="/assign" component={Assign} />
        <Route path="/settings" component={Settings} />
      </Switch>
    </div>
  );
}

export default App;
