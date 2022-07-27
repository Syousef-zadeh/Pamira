import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const ModalOverlay = (props) => {
    return (
      <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
      </div>
    );
  };

  const Modal = (props) => {
    return (
      <Fragment>
        {ReactDOM.createPortal(
          <ModalOverlay>{props.children}</ModalOverlay>
        )}
      </Fragment>
    );
  };
  export default Modal;