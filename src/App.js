import React, { Component } from "react";
import fetchImagesWithQuery from "./services/api";
import Searchbar from "./components/searchbar/Searchbar";
import Loader from "./components/loader/Loader";
import ImageGallery from "./components/imageGallery/ImageGallery";
import Button from "./components/button/Button";
import Modal from "./components/modal/Modal";

class App extends Component {
  state = {
    searchQuery: "panda",
    page: 1,
    listImages: null,
    loading: false,
    showModal: false,
  };

  componentDidMount() {
    fetchImagesWithQuery(this.state.searchQuery)
      .then((data) => this.setState({ listImages: data }))
      .catch((error) => console.log("Error:", error));
    // console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("componentDidUpdate");

    if (prevState.searchQuery !== this.state.searchQuery) {
      // console.log('Search: ', this.state.searchQuery, this.state.page);
      
      
      return fetchImagesWithQuery(this.state.searchQuery, 1)
      .then((data) => {
        this.setState({ listImages: data, page: 1 });
      })
      .catch((error) => {});
    }
    
    if (prevState.page !== this.state.page && this.state.page !== 1) {
      // console.log("LoadMore: ", this.state.searchQuery, this.state.page);

      return fetchImagesWithQuery(this.state.searchQuery, this.state.page)
        .then((data) => {
          this.setState((prevState) => ({
            listImages: [...prevState.listImages, ...data],
          }));

          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          })
        })

        .catch((error) => {});
    }
  }

  handleSubmit = (searchQuery) => {
    this.setState({ searchQuery });
  };

  loadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
    // this.handleSubmit();
  };

  openModal = (imageURL) => {
    this.setState({ largeImage: imageURL, showModal: true });
  };

  onClose = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { listImages, largeImage, loading, showModal } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        {listImages && (
          <ImageGallery listImages={listImages} onClick={this.openModal} />
        )}
        {loading && <Loader />}
        {listImages && <Button onClick={this.loadMore} />}
        {showModal && (
          <Modal url={this.state.largeImage} onClose={this.onClose} />
        )}
      </>
    );
  }
}

export default App;
