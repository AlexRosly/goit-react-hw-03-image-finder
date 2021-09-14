import PropTypes from "prop-types";
import { Buttons, BtnWrapper } from "./Button.styled";

export const Button = ({ onClick }) => (
  <BtnWrapper>
    <Buttons type="button" onClick={onClick}>
      Load more
    </Buttons>
  </BtnWrapper>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
