import React, { Component } from "react";
import { LoaderWrapper } from "./Loader.styled";
import Template from "react-loader-spinner";

export default class Loader extends Component {
  render() {
    return (
      <LoaderWrapper>
        <Template type="TailSpin" color="#02be6e" height={100} width={100} />
      </LoaderWrapper>
    );
  }
}
