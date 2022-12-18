import React from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import Header from './components/Header';
import Mason from './pages/Mason';
import Countdown from './pages/Countdown';
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
        <Route path='/ostarr' element={<Countdown/>} />
        </Routes>
        </Router>
      );
    }
  }


export default App;
