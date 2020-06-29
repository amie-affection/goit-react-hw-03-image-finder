import React, { Component } from "react";
import styles from "./Button.module.css";

const Button = ({ onClick }) => {
  return (
    <>
      <button className={styles.Button} onClick={onClick}>
        Load More
      </button>
    </>
  );
};

export default Button;
