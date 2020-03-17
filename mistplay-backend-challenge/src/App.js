import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./Components/navbar.component"
import GameList from "./Components/game-list.component";
import SearchGame from "./Components/search.component";

function App() {
  return (
      <Router>
        <div className="container">
          <Navbar />
          <br/>
          <Route path="/" exact component={GameList} />
          <Route path="/search" component={SearchGame}/>
        </div>
      </Router>
  );
}

export default App;
