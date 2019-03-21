import React, { Fragment, } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Departments from "./components/Departments";
import DepartmentView from "./components/DepartmentView";
import DepartmentForm from "./components/DepartmentForm";
import ItemView from "./components/ItemView";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import { Container, } from "semantic-ui-react";
import styled from "styled-components";


const App = () => (
  <Fragment>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/departments" component={Departments} />
        <Route exact path="/departments/new" component={DepartmentForm} />
        <Route exact path="/departments/:id" component={DepartmentView} />
        <Route exact path="/departments/:did/item/:id" component={ItemView} />
        <Route component={NoMatch} />
      </Switch>
    </Container>    
  </Fragment>
)

export default App;
