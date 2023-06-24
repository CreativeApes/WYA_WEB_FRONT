import styled from "styled-components";
import { color } from "../../theme";
import { ReactComponent as Plus } from '../../asset/plus.svg';
import { ReactComponent as Send } from '../../asset/send.svg';
import { useRef } from "react";

const ChatBox = () =>{
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <ChatBoxLayout>
            <MoreIcon><Plus fill="#fff" style={{width:'30px'}}/></MoreIcon>
            <MsgBox ref={inputRef}></MsgBox>
            <SendIcon><Send  fill="#222" style={{width:'25px', height : '25px'}}/></SendIcon>
        </ChatBoxLayout>
    )
}

const ChatBoxLayout = styled.div`
    position: absolute;
    background-color : #fff;
    bottom : 0px;
    display: flex;
    flex-direction : row;

    height: 60px;
    width: 100vw;
`;
const MoreIcon = styled.div`
    cursor: pointer;
    width : 60px;
    height : 60px;
    display: flex;
    justify-content : center;
    align-items : center;
`;
const SendIcon = styled.div`
    cursor: pointer;
    width : 60px;
    height : 60px;
    display: flex;
    justify-content : center;
    align-items : center;
`;
const MsgBox = styled.input`
    border : none;
    outline : none;
    height : 60px;
    width : calc(100vw - 120px);
`;
export default ChatBox;

