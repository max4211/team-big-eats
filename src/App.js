import React from 'react';
import './App.css';
import Dinner from './pages/Dinner';

import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

class App extends React.Component {

  render() {
      return (
        <Router>
          <Routes>
          <Route exact path='/' element={<Dinner />} />
        </Routes>
        </Router>
      );
    }
  }


export default App;
