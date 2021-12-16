import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import Forum from './views/Forum';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import ForumPost from './views/ForumPost';

function App() {

  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route exact path="/" element={<Forum />} />
          <Route path="/post/:id" element={<ForumPost />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;