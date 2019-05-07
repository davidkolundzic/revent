import React, { Component } from "react";
import "./App.css";
// import { Button } from 'semantic-ui-react';
import EventDashboard from "./app/features/event/EventDashboard/EventDashboard";
import { Route, Switch } from "react-router-dom";
import Navbar from "./app/features/nav/navbar";
import { Container } from "semantic-ui-react";
import EventDetailedPage from "./app/features/event/EventDetailed/EventDetailedPage";
import PeopleDashboard from "./app/features/user/PeopleDashboard/PeopleDashboard";
import UserDetailedPage from "./app/features/user/UserDetailed/UserDetailedPage";
import SettingsDashboard from "./app/features/user/Settings/SettingsDashboard";
import EventForm from "./app/features/event/EventForm/EventForm";
import HomePage from "./app/features/home/HomePage";
import TestComponent from './app/features/testarea/TestComponent';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
        <Route
          path="/(.+)"
          render={() => (
            <div>
              <Navbar />
              <Container className="main">
                <Switch>
                  <Route path="/events" component={EventDashboard} />
                  <Route path="/test" component={TestComponent}/>
                  <Route path="/event/:id" component={EventDetailedPage} />
                  <Route path="/people" component={PeopleDashboard} />
                  <Route path="/profile/:id" component={UserDetailedPage} />
                  <Route path="/settings" component={SettingsDashboard} />
                  <Route path="/createEvent" component={EventForm} />
                </Switch>
              </Container>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
