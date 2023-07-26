import './App.css';
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
import { Button } from '@material-ui/core';
import Home from './Home';
import Header from './Header';
import Testimonials from './Testimonials';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/header" component={Header} />
      {/* <Route path="/testimonials" component={Testimonials} /> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
