import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Header, Segment, Card, } from "semantic-ui-react";

class ItemView extends React.Component {
  state = { item: {}, reviews: [] };

  componentDidMount() {
    const dep = this.props.match.params.did
    const item = this.props.match.params.id
    axios.get(`/api/departments/${dep}/items/${item}`)
      .then( res => {
        this.setState({ item: res.data, });
      })
    axios.get(`/api/items/${item}/reviews`)
      .then( resReviews => {
        this.setState({ reviews: resReviews.data, });
      })
  }

  renderReviews = () => {
    const { reviews, } = this.state;

    if (reviews.length <= 0)
      return <h2>No Reviews for {this.state.item.name}</h2>
    return reviews.map( review => (
      <Segment vertical key={review.id}>
        <Header>{ review.title }</Header>
          <p>By: { review.author }</p>
        <Header as="h3">{ review.body }</Header>
      </Segment>
    ))
  }

  // deleteItem = (id) => {
  //   axios.delete(`/api/departments/${id}`).then(this.props.history.push('/departments'))
  // }

  render() {

    return (
      <div>
        <Segment>
          <Header as="h1">{this.state.item.name}</Header>
          <p>{this.state.item.price}</p>
          <Header as="h5">{this.state.item.description}</Header>
        </Segment>
        <br />
        <br />
        <Segment>
        { this.renderReviews() }
        </Segment>
        <Button 
          color="black" 
          onClick={this.props.history.goBack}
        >
          Back
        </Button>
      </div>
    )
  }
}

export default ItemView;