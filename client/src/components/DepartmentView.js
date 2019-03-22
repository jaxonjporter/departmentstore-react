import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Header, Segment, Card, Icon } from "semantic-ui-react";

class DepartmentView extends React.Component {
  state = { department: {}, items: [], edit: false, };

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

  deleteItem = (id) => {
    const dep = this.props.match.params.id
    axios.delete(`/api/departments/${dep}/items/${id}`)
    .then( res => {
      debugger
      const { items, } = this.state;
      this.setState({ items: items.filter( i => i.id !== id ), })
  })
}

  toggle = () => this.setState( {edit:!this.state.edit})

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
          </Card.Content>
          <Card.Content extra>
          <Button as={Link} to={`${item.department_id}/items/${item.id}`} color='blue'>
            View
          </Button>
          <Button icon color="red"
            onClick={() => this.deleteItem(item.id) } 
            style={{ marginLeft: "10px", }}>
            <Icon name="trash" />
          </Button>
          <Button as={Link} to={`${item.department_id}/items/${item.id}/edit`}icon color="yellow"
            style={{ marginLeft: "10px", }}>
            <Icon name="edit" />
          </Button>
        </Card.Content>
      </Card>
    ))
  }


  render() {
    const { name, } = this.state.department;

    return (
      <div>
        <Segment>
          <Header as="h1">{ name }</Header>
          <Button style={{position: "absolute", right: '10px', bottom: "20px", margin: 0}}
            color="black" 
            onClick={this.props.history.goBack}
          >
            Back
          </Button>
        </Segment>
        <br />
        <br />
        <br />
        <Card.Group centered>
        { this.renderItems() }
        <Card>
          <Card.Content>
            <Card.Header>
              Add New Item
            </Card.Header>
          </Card.Content>
          <Card.Content extra>
          <Button as={Link} to={`${this.state.department.id}/item/new`} color='blue'>
            New Item
          </Button>
          </Card.Content>
        </Card>
        </Card.Group>
      </div>
    )
  }
}

export default DepartmentView;