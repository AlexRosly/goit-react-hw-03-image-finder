import PropTypes from "prop-types";
import {
  ImageGalleryItems,
  ImageGalleryItemImage,
} from "./ImageGalleryItem.styled";

export const ImageGalleryItem = ({ image, getGalleryElement }) => {
  const largeImage = () => getGalleryElement(image.largeImageURL);

  return (
    <ImageGalleryItems>
      <ImageGalleryItemImage
        src={image.webformatURL}
        alt={image.tags}
        onClick={largeImage}
      />
    </ImageGalleryItems>
  );
};

ImageGalleryItem.defaultProps = {
  tags: "",
};

ImageGalleryItem.propTypes = {
  image: PropTypes.exact({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string,
  }),
  getGalleryElement: PropTypes.func.isRequired,
};
