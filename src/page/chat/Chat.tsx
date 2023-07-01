import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import ChatBox from '../../components/chatting/chatBox/ChatBox';
import { styled } from 'styled-components';
import { color } from '../../theme';
import ChatMessage from '../../components/chatting/ChatMessage/ChatMessage';
import { IChat } from '../../Interface/IChat';
type chatProps = {
  
};

const Chat: React.FC<chatProps> = ({  }) => {
  const [chatList, setChatList] = useState<Array<IChat>>([{userName : 'tester1',contents : '우헤헤'},{userName : 'tester2',contents : '우헤헤??'}]);
  const name = "tester1";
  
  const addChat = (chat : IChat) =>{
    setChatList((pre)=>{
      return [...pre,chat];
    })
  }

  return (
    <ChatLayout>
      <Header/>
      <Contents>
        <Block/>
        <Chatting>
            {chatList.map((chat)=>{
                return (<ChatMessage isUser={name === chat.userName} contents = {chat.contents}/>)
            })}
        </Chatting>
      </Contents>
      <ChatBox addFunc={addChat}/>
    </ChatLayout>
  );
}
const ChatLayout = styled.div`
  position : relative;
  background-color : ${color.background};
  width : 100vw;
  height : 100vh;
`;
const Contents = styled.div`
  padding : 0px 5px;
  width : 100vw;
  height :calc(100vh - 60px);
`;
const Block = styled.div`
  height : 60px;
  width : 100vw;
`;
const Chatting = styled.div`
  display : flex;
  flex-direction: column;
`;
export default Chat;