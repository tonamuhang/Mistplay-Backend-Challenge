import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./Components/navbar.component"
import GameList from "./Components/game-list.component";


function App() {
  return (
      <Router>
        <div className="container">
          <Navbar />
          <br/>
          <Route path="/" exact component={GameList} />
        </div>
      </Router>
  );
}

export default App;
