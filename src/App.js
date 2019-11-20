import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import RestApi from './components/RestApi';
import PostDetail from './components/PostDetail';
import AddNewPost from './components/AddNewPost';
import Todo from './components/Todo';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/rest-api'>
          <RestApi />
        </Route>

        <Route path='/post-detail/:id'>
          <PostDetail />
        </Route>

        <Route path='/add-new-post'>
          <AddNewPost />
        </Route>

        <Route path='/todo'>
          <Todo />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
