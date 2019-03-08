import React, { Component } from "react";
import "./App.css";
// import { Button } from 'semantic-ui-react';
import EventDashboard from "./app/features/event/EventDashboard/EventDashboard";
import Navbar from "./app/features/nav/navbar";
class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <EventDashboard/>
      </div>
    );
  }
}

export default App;
