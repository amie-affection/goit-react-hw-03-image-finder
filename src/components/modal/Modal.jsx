import React, { Component } from "react";
import styles from "./Modal.module.css";

class Modal extends Component {
  render() {
    return (
      <>
        <div onClick={this.closeModal} className={styles.Overlay}>
          <div className={styles.Modal}>
            <img src={largeImage} alt="" />
          </div>
        </div>
      </>
    );
  }
}

export default Modal;
