import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container'; import Home from './components/Home/Home';
import Header from './components/Header/Header';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import CommentList from './components/CommentList/CommentList';

function App() {
  return (
    <div>
      <Container maxWidth="sm">
        <Header />
        <Router>
          <Switch>
            <Route exact path="/"><Home></Home>

            </Route>
            <Route path="/post/:postId">
              <CommentList></CommentList>
            </Route>




          </Switch>


        </Router>
      </Container>


    </div>

  );
}

export default App;
