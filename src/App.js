import React, { Component } from "react";
import styles from "./App.module.css";
// import fetchImagesWithQuery from './services/api';
import Searchbar from "./components/searchbar/Searchbar";

class App extends Component {
  state = {
    searchQuery: "",
    page: 1,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit");
  };

  // handleChange = (e) => {
  //     const { name } = e.target;
  //     console.log(name);
  // }

  render() {
    return <Searchbar
    onSubmit={this.handleSubmit}
    />;
  }
}

export default App;
