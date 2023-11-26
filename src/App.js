import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import HomePage from './HomePage';
import Footer from './Footer';

function App() {
  return (
    <div style={{background: 'rgba(100, 100, 100, 0.5)'}}>
      <br/><br/><br/><br/>
      <HomePage/>
      <Footer />
    </div>
  );
}

export default App;
