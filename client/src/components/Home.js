import React from 'react';
import { Header, } from "semantic-ui-react";
import styled from "styled-components"

const Home = () => (
  <div>
    <Cool>
      <HeadTitle>Welcome to Micheal Scott's Shopazon</HeadTitle>
    </Cool>
    <Craz>
      <ColumnDiv>

      <Header as="h3" textAlign="center">Go to the Navbar, and click a department to shop.</Header>
        <Middle>
          <p>Placement Test</p>
        </Middle>
      </ColumnDiv>
      <ColumnDiv>
        <Header as="h3" textAlign="center">I'm just messing around with styles.</Header>
        <Middle>
          <p>Another test</p>
        </Middle>
      </ColumnDiv>
    </Craz>
  </div>
)
const Cool = styled.div`
  text-align: center;
  border-radius: 8px;
  box-shadow: 2px 2px 5px grey;
  background-color: #545454;
  margin-top: 15px;
`

const HeadTitle = styled.h1`
  color: white;
`

const Craz = styled.div`
  height: 500px;
  border-radius: 8px;
  margin-top: 15px;
  background-color: #ededed;
  box-shadow: 2px 2px 5px grey;
`
const ColumnDiv = styled.div`
  margin: 0 auto;
  padding: 10px;
  width: 50%;
  float: left;
  height: 100%;
  
`

const Middle = styled.div`
  margin: 35%;
  padding: 10px;
  border: 1px solid black;

`

export default Home;
