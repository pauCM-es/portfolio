import React, { Fragment } from "react";
import "./Spinner.scss";

const Spinner = (props) => {

  const {theme} = props
  
  return (
    <Fragment>
      <div class={`lds-roller ${theme}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Fragment>
  );
};

export default Spinner;
