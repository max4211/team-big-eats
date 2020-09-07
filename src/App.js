import React from 'react';
import './App.css';
import Mason from './components/Mason';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import Header from './components/Header';

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
        <div className="App">
          {/* <Header/> */}
          <Mason/>
        </div>
      );
    }
  }


export default App;
