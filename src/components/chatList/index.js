import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import chatData from "src/static/chatData";
import styles from "./index.module.scss";
import ChatPreview from "./components/ChatPreview";

class ChatList extends Component {
  constructor() {
    super();
    this.state = {
      chatList: "",
      isLoading: true,
      redirect: null
    };
  }
  componentDidMount() {
    this.setState({
      chatList: chatData,
      isLoading: false
    });
  }
  handleToChat = chatInfo => {
    this.setState({ redirect: { to: "Chat" } });
  };
  render() {
    const { chatList, isLoading, redirect } = this.state;
    if (redirect) return <Redirect {...redirect} />;
    return (
      <div className={styles.wrap}>
        <div className={styles.header}>CHAT</div>
        <div className={styles.body}>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <ChatPreview chatList={chatList} handleToChat={this.handleToChat} />
          )}
        </div>
      </div>
    );
  }
}

export default ChatList;
