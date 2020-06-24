import React, { Component } from "react";
import styles from "./App.module.css";
import fetchImagesWithQuery from "./services/api";
import Searchbar from "./components/searchbar/Searchbar";
import Loader from "./components/loader/Loader";
import ImageGallery from "./components/imageGallery/ImageGallery";

class App extends Component {
  state = {
    searchQuery: "",
    page: 1,
    listImages: null,
  };

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    if (prevState.searchQuery === this.state.searchQuery) {
      return;
    }
    // console.log(this.state.searchQuery);
    fetchImagesWithQuery(this.state.searchQuery)
      .then((data) => {
        this.setState({ listImages: data });
      })
      .catch((error) => {});
  }

  handleSubmit = (searchQuery) => {
    this.setState({ searchQuery });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery />
      </>
    );
  }
}

export default App;
