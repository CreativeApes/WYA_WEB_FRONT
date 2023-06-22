import React from 'react';
import Header from '../../components/header/Header';
import ChatBox from '../../components/chatBox/ChatBox';
import { styled } from 'styled-components';
import { color } from '../../theme';
type chatProps = {
  
};

const Chat: React.FC<chatProps> = ({  }) => {
  

  return (
    <ChatLayout>
      <Header/>
      <ChatBox/>
    </ChatLayout>
  );
}
const ChatLayout = styled.div`
  background-color : ${color.background};
  width : 100vw;
  height : 100vh;
`;
export default Chat;