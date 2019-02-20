import React from "react";
import moment from "moment";
import "moment/locale/ko";
import styles from "./index.module.scss";

moment.locale("ko");
const Message = ({ profile, message }) => {
  return (
    <div className={styles.wrap}>
      <img
        className={styles.profile}
        src={`https://cf.shop.s.zigzag.kr/images/${profile}`}
        alt="profile_img"
      />
      <div className={styles.message}>{message.message}</div>
      <div className={styles.time}>
        {moment(message.timestamp).format("a h:mm")}
      </div>
    </div>
  );
};
export default Message;
