import React from 'react';
import { Form, Header, } from "semantic-ui-react";
import axios from "axios"

class ItemForm extends React.Component {
  defaultValues = { name: "", price: "", description: "", };
  state = { ...this.defaultValues, };

  handleSubmit = (e) => {
    e.preventDefault();
    const dep = this.props.match.params.id

    const item = { ...this.state, };
    axios.post(`/api/departments/${dep}/items`, item)
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
        <Header as="h1">New Item</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              label="Name"
              name="name"
              placeholder="Name"
              value={name}
              onChange={this.handleChange}
              required
            />
            <Form.Input
              label="Description"
              name="description"
              placeholder="Description"
              value={description}
              onChange={this.handleChange}
              required
            />
            <Form.Input
              label="Price"
              name="price"
              placeholder="Price"
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

export default ItemForm;
