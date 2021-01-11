import React from "react";
import "./App.css";
import 'semantic-ui-css/semantic.min.css'
import Dz2 from "./components/Dz2";

class App extends React.Component {
  render() {
    return <div className="app">{<Dz2 />}</div>;
  }
}

export default App;
