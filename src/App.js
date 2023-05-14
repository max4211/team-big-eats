import React from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import Header from './components/Header';
import Mason from './pages/Mason';
import Dinner from './pages/Dinner';
import Mother from './pages/Mother';

import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

class App extends React.Component {

  componentDidMount() {
    AOS.init({
      offset: 210,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }

  render() {
      return (
        <Router>
          <Routes>
          <Route exact path='/' element={<Mason />} />
          <Route exact path='/dinner-menu' element={<Dinner />} />
          <Route exact path='/mothers-day' element={<Mother />} />
        </Routes>
        </Router>
      );
    }
  }


export default App;
