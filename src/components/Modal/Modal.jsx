import React, { Component } from "react";
import { createPortal } from "react-dom";
import { Overlay, Modals } from "./Modal.styled";
import PropTypes from "prop-types";

const modalRoot = document.querySelector("#modal-root");

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleCloseByKey);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleCloseByKey);
  }

  handleCloseByKey = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  handleCloseByBackdrop = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.handleCloseByBackdrop}>
        <Modals>{this.props.children}</Modals>
      </Overlay>,
      modalRoot
    );
  }
}

Modal.defaultProps = {
  children: null,
};

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
