import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "moment/locale/ko";
import styles from "./index.module.scss";

moment.locale("ko");
const ChatPreview = ({ chatList }) => {
  return chatList.map((List, index) => (
    <div className={styles.wrap}>
      <img
        className={styles.profile}
        src={`https://cf.shop.s.zigzag.kr/images/${List.userInfo.profile_img}`}
        alt="profile_img"
      />
      <Link to={`Chat/${List.userInfo.id}`} key={index} className={styles.Link}>
        <div className={styles.chat_privew}>
          <span className={styles.chat_last_time}>
            {moment(
              List.messageList[List.messageList.length - 1].timestamp
            ).format("dddd")}
          </span>
          <h className={styles.chat_user}>{List.userInfo.name}</h>
          <span className={styles.chat_last_message}>
            {List.messageList[List.messageList.length - 1].message}
          </span>
        </div>
      </Link>
    </div>
  ));
};

export default ChatPreview;
