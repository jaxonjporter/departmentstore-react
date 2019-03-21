import React from 'react';
import { Link, } from 'react-router-dom';
import { Menu, Dropdown, } from "semantic-ui-react";
import axios from "axios"

class NavBar extends React.Component {
  state = { departments: [] };

  componentDidMount() {
    axios.get("/api/departments")
    .then( res => {
        this.setState({ departments: res.data, });
      })
  }

  renderDepartments = () => {
    const { departments, } = this.state;
    return departments.map( department => (
      <Link key={department.id} onClick={() => this.props.history.push('/')} to={`/departments/${department.id}`} >
        <Dropdown.Item text={department.name} />
      </Link>
    ))
  }
  
  render () {
    return (
    <Menu>
      <Link to="/">
        <Menu.Item>
          Home
        </Menu.Item>
      </Link>
        <Dropdown item text='Departments'>
          <Dropdown.Menu>
          <Link to={`/departments`} >
            <Dropdown.Item text="All" />
          </Link>
              {this.renderDepartments()}
          </Dropdown.Menu>
        </Dropdown>
    </Menu>

    )
  }
}

export default NavBar;