import React, { Component } from "react";
import { Link } from "react-router-dom";
import chatData from "src/static/chatData";
import styles from "./index.module.scss";
import Message from "./components/Message";
import NewMessage from "./components/NewMessage";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      chatDiaLog: [],
      newMessageText: "",
      newMessages: []
    };
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    chatData.filter(List => {
      if (List.userInfo.id === Number(id)) {
        this.setState({
          chatDiaLog: List,
          isLoading: false
        });
      }
      return List;
    });
  }
  handleMessageChange = e => {
    this.setState({
      newMessageText: e.target.value
    });
  };

  createMessage = e => {
    e.preventDefault();
    this.setState({
      newMessages: [...this.state.newMessages, this.state.newMessageText],
      newMessageText: ""
    });
  };
  render() {
    const { chatDiaLog, isLoading, newMessages } = this.state;
    return isLoading ? (
      <div>Loading...</div>
    ) : (
      <div className={styles.wrap}>
        <div className={styles.header}>
          <Link to="/" className={styles.Link}>
            뒤로
          </Link>
          <div className={styles.titlex}>{chatDiaLog.userInfo.name}</div>
        </div>
        <div className={styles.message_box}>
          {chatDiaLog.messageList.map(messages => {
            return (
              <Message
                message={messages}
                profile={chatDiaLog.userInfo.profile_img}
              />
            );
          })}
          {newMessages.map(messages => {
            return <NewMessage message={messages} profile={"Marcus.jpeg"} />;
          })}
        </div>
        <form className={styles.message_form} onSubmit={this.createMessage}>
          <input
            className={styles.message_input}
            type="text"
            placeholder="보내실 메시지를 입력해주세요"
            value={this.state.newMessageText}
            onChange={this.handleMessageChange}
          />
          <button className={styles.message_send}>보내기</button>
        </form>
      </div>
    );
  }
}

export default Chat;
