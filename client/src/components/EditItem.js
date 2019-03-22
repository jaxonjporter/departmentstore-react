import React from 'react';
import { Form, Header, } from "semantic-ui-react";
import axios from "axios"

class EditItem extends React.Component {
  defaultValues = { name: "", price: "", description: "",  };
  state = { ...this.defaultValues, item: {}, };



  componentDidMount() {
    const dep = this.props.match.params.did
    const item = this.props.match.params.id
    axios.get(`/api/departments/${dep}/items/${item}`)
      .then( res => {
        this.setState({ item: res.data, });
      })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const NewestItem = { name: this.state.name, price: this.state.price, description: this.state.description, }
    const dep = this.props.match.params.did
    const items = this.props.match.params.id
    axios.put(`/api/departments/${dep}/items/${items}`, NewestItem)
      .then( res => {
        this.props.history.push(`/departments/${dep}`);
      })
      this.setState({ ...this.defaultValues, });
  }

  handleChange = (e) => {
    const { target: { name, value, } } = e;
    this.setState({ [name]: value, });
  }

  render() {
    const { name, price, description, } = this.state;

    return (
      <div>
        <Header as="h1">Edit {this.state.item.name}</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              label="Name"
              name="name"
              placeholder={name}
              value={name}
              onChange={this.handleChange}
              required
            />
            <Form.Input
              label="Description"
              name="description"
              placeholder="description"
              value={description}
              onChange={this.handleChange}
              required
            />
            <Form.Input
              label="Price"
              name="price"
              placeholder="price"
              type="number"
              value={price}
              onChange={this.handleChange}
              required
            />
          </Form.Group>
          <Form.Button color="blue">Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default EditItem;
