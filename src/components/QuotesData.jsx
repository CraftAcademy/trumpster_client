import React, { Component } from "react";
import axios from "axios";

class QuotesData extends Component {
  state = {
    quote: "",
  };
  async getQuotes() {
    let response = await axios.get("http://localhost:3000/api/quotes/random");
    this.setState({ quote: response.data });
  }

  componentDidMount() {
    this.getQuotes();
  }

  render() {
    return <div data-cy="random_quote">{this.state.quote.random_quote}</div>;
  }
}

export default QuotesData;
