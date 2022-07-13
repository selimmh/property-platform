import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";
import { ReactComponent as Heart } from "../../assets/icons/heart.svg";

const Button = ({ variant, label, icon, position, disabled, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${styles.button} ${styles[variant]} ${styles[position]}`}
    >
      {icon}
      {label}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "tertiary", "destructive"])
    .isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.node,
  position: PropTypes.oneOf(["left", "right", "none"]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: "primary",
  label: "Button",
  icon: <Heart />,
  position: "none",
  disabled: false,
  onClick: () => {},
};

export default Button;
