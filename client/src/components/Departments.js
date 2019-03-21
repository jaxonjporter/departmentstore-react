import React from "react";
import { Link, } from "react-router-dom";
import { Button, Card, Header, } from "semantic-ui-react";
import axios from "axios";

class Departments extends React.Component {
  state = { departments: [], };

  componentDidMount() {
    axios.get("/api/departments")
    .then( res => {
        this.setState({ departments: res.data, });
      })
  }


  renderDepartments = () => {
    const { departments, } = this.state;

    if (departments.length <= 0)
      return <h2>No Products</h2>
    return departments.map( department => (
      <Card key={department.id}>
        <Card.Content>
          <Card.Header>{ department.name }</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Button as={Link} to={`/departments/${department.id}`} color='blue'>
            View
          </Button>

        </Card.Content>
      </Card>
    ))
  }

  render() {
    return (
      <div>
      <Header as="h1">Department</Header>
      <br />
      <br />
      <Card.Group>
        { this.renderDepartments() }
        <Card>
          <Button as={Link} to={`/departments/new`} color='blue' style={{height: "100%"}}>
              New Department
          </Button>
        </Card>
      </Card.Group>
    </div>
    )
  }
}

export default Departments;