import React from "react";
import preloader from "../../../assets/images/loader.gif";
import styles from "../../Users/Users.module.css";

const Preloader = (props) => {
  return (
    <div>
      <img src={preloader} className={styles.preloader} />
    </div>
  );
};

export default Preloader;
