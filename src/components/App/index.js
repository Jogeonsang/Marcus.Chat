import React from "react";
import { Route, Switch } from "react-router-dom";
import "./index.module.scss";
import ChatList from "src/components/chatList";
import Chat from "src/components/chat";
const App = props => [<PrviateRoutes key={1} />];

const PrviateRoutes = props => (
  <Switch>
    <Route exact path="/" component={ChatList} />
    <Route path="/Chat/:id" component={Chat} />
  </Switch>
);
export default App;
