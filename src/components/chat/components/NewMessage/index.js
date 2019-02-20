import React from "react";
import moment, { now } from "moment";
import "moment/locale/ko";
import styles from "./index.module.scss";
moment.locale("ko");
const NewMessage = ({ profile, message }) => {
  const date = new Date();
  return (
    <div className={styles.wrap}>
      <div className={styles.time}>{moment(date).format("A h mm")}</div>
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
