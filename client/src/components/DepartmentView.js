import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Header, Segment, Card, } from "semantic-ui-react";

class DepartmentView extends React.Component {
  state = { department: {}, items: [] };

  componentDidMount() {
    const dep = this.props.match.params.id
    axios.get(`/api/departments/${dep}`)
      .then( res => {
        this.setState({ department: res.data, });
      })
    axios.get(`/api/departments/${dep}/items`)
      .then( resItems => {
        this.setState({ items: resItems.data, });
      })
  }

  renderItems = () => {
    const { items, } = this.state;

    if (items.length <= 0)
      return <h2>No Items In This Department</h2>
    return items.map( item => (
      <Card key={item.id}>
        <Card.Content>
          <Card.Header>{ item.name }</Card.Header>
          <Card.Meta>${ item.price }</Card.Meta>
          <Card.Description>
            { item.description }
          </Card.Description>
          <Card.Content extra>
          <Button as={Link} to={`${item.department_id}/item/${item.id}`} color='blue'>
            View
          </Button>
        </Card.Content>
        </Card.Content>
      </Card>
    ))
  }

  deleteItem = (id) => {
    axios.delete(`/api/departments/${id}`).then(this.props.history.push('/departments'))
  }

  render() {
    const { name, } = this.state.department;

    return (
      <div>
        <Segment>
          <Header as="h1">{ name }</Header>
        </Segment>
        <br />
        <br />
        <Card.Group>
        { this.renderItems() }
        </Card.Group>
        <Button 
          color="black" 
          onClick={this.props.history.goBack}
        >
          Back
        </Button>
        <Button onClick={() => this.deleteItem(this.state.department.id)} color='blue'>
          Delete
        </Button>
      </div>
    )
  }
}

export default DepartmentView;