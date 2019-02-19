import React from "react";
import styles from "./index.module.scss";

const NewMessage = ({ profile, message }) => {
  console.log(profile);
  return (
    <div className={styles.wrap}>
      <div className={styles.time}>11:24</div>
      <div className={styles.message}>{message}</div>
      <img
        className={styles.profile}
        src={require(`src/images/${profile}`)}
        alt="profile_img"
      />
    </div>
  );
};
export default NewMessage;
