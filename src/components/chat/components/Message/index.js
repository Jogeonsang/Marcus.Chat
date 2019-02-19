import React from "react";
import styles from "./index.module.scss";

const Message = ({ profile, message }) => {
  return (
    <div className={styles.wrap}>
      <img
        className={styles.profile}
        src={`https://cf.shop.s.zigzag.kr/images/${profile}`}
        alt="profile_img"
      />
      <div className={styles.message}>{message.message}</div>
      <div className={styles.time}>11:24</div>
    </div>
  );
};
export default Message;
