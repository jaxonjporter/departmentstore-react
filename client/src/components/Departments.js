import React from "react";
import { Link, } from "react-router-dom";
import { Button, Card, Header, Icon, Segment, } from "semantic-ui-react";
import axios from "axios";

class Departments extends React.Component {
  state = { departments: [], edit: false, };

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
          <Button icon color="red"
            onClick={() => this.deleteItem(department.id) } 
            style={{ marginLeft: "10px", }}>
            <Icon name="trash" />
          </Button>
          <Button as={Link} to={`/departments/${department.id}/edit`} icon color="yellow"
            style={{ marginLeft: "10px", }}>
            <Icon name="edit" />
          </Button>
        </Card.Content>
      </Card>
    ))
  }

  
  deleteItem = (id) => {
    axios.delete(`api/departments/${id}`)
    .then( res => {
      const { departments, } = this.state;
      this.setState({ departments: departments.filter( d => d.id !== id ), })
  })
}
  render() {
    return (
      <div>
        <Segment>
          <Header as="h1">Department</Header>
        </Segment>
      <br />
      <br />
      <Card.Group centered>
        { this.renderDepartments() }
        <Card>
          <Card.Content>
            <Card.Header>
              Add New Department
            </Card.Header>
          </Card.Content>
          <Card.Content extra>
            <Button as={Link} to={`/departments/new`} color='blue' style={{height: "100%", width: "100%"}}>
              New Department
            </Button>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
    )
  }
}

export default Departments;