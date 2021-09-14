import React, { Component } from "react";
import toast, { Toaster } from "react-hot-toast";
import { fetchImage } from "./services/api-services";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { Button } from "./components/Button/Button";
import SearchBar from "./components/SearchBar/SearchBar";
import Modal from "./components/Modal/Modal";
import Loader from "react-loader-spinner";

class App extends Component {
  state = {
    images: [],
    page: 1,
    searchQuery: "",
    isLoading: false,
    showModal: false,
    largeImage: "",
    error: null,
  };

  //If in update query prevState not equal state make a fetch

  async componentDidUpdate(_, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.getImages();
    }
  }

  //Write query in state

  handeleFormSubmit = (query) => {
    if (query.trim() === "") {
      toast.error("Please enter correct query and try again.");
      return;
    }

    this.setState({
      images: [],
      page: 1,
      searchQuery: query,
      error: null,
    });
  };

  getImages = async () => {
    const { searchQuery, page } = this.state;

    this.setState({
      isLoading: true,
    });

    try {
      const { hits } = await fetchImage(searchQuery, page);

      this.setState((prevState) => ({
        images: [...prevState.images, ...hits],
        page: prevState.page + 1,
      }));

      if (page !== 1) {
        this.scrollOnLoadButton();
      }
    } catch (error) {
      console.log("Error", error);
      this.setState({ error });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  //Get full image, write in state and open modal window

  handelGalleryImage = (largeImage) => {
    this.setState({
      largeImage: largeImage,
      showModal: true,
    });
  };

  //Modal toggle

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      largeImage: "",
    }));
  };

  // Скролл при клике на кнопку
  //Scroll on click on the button

  scrollOnLoadButton = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  render() {
    const { images, showModal, largeImage, isLoading } = this.state;
    const loadMore = images.length > 0 && images.length >= 12;
    return (
      <>
        <Toaster position="top-right" />
        <SearchBar onSeacrh={this.handeleFormSubmit} />
        <ImageGallery
          images={images}
          getGalleryElement={this.handelGalleryImage}
        />
        {loadMore && <Button onClick={this.getImages}>Load more</Button>}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImage} alt="" />
          </Modal>
        )}
        {isLoading && <Loader />}
      </>
    );
  }
}

export default App;
