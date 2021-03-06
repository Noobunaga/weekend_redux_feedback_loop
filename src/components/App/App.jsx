import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import FeelingsPage from '../FeelingsPage/FeelingsPage';
import UnderstandingPage from '../UnderstandingPage/UnderstandingPage';
import SupportPage from '../SupportPage/SupportPage';
import CommentsPage from '../CommentsPage/CommentsPage';
import SubmitPage from '../SubmitPage/SubmitPage';
import ThankYou from '../ThankYou/ThankYou';

function App() {

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <Route path="/" exact>
          <FeelingsPage />
        </Route>
        <Route path="/understanding" exact>
          <UnderstandingPage />
        </Route>
        <Route path="/support" exact>
          <SupportPage />
        </Route>
        <Route path="/comments" exact>
          <CommentsPage />
        </Route>
        <Route path="/submit" exact>
          <SubmitPage />
        </Route>
        <Route path="/thankyou" exact>
          <ThankYou />
        </Route>
      </div>
    </Router>
  );
}

export default App;
