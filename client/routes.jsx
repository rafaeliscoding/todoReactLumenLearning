import React from  "react";
//destructoring
//{..spread}
import {Router, Route, IndexRoute, browserHistory} from  "react-router";
// import components

import Base from "./components/base.jsx";
import IndexComponent from "./components/index.jsx";
import AddTodo from "./components/addTodo.jsx";

export default () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Base}>
      <IndexRoute component={IndexComponent} />
      <Route path="add_todo" component={AddTodo} />
      </Route>
    </Router>
  )

}
