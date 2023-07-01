import styled from "styled-components";
import { color } from "../../../theme";
import { ReactComponent as Plus } from '../../../asset/plus.svg';
import { ReactComponent as Send } from '../../../asset/send.svg';
import { ChangeEvent, useRef, useState } from "react";
import { IChat } from "../../../Interface/IChat";

interface IChatBox {
    addFunc : (chat: IChat)=>void,
}
const ChatBox = (props:IChatBox) =>{
    const inputRef = useRef<HTMLInputElement>(null);
    const [text,setText] = useState<string>('');

    const textChange = (e : ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    const sendMessage = () => {
        props.addFunc({
            userName : 'tester1',
            contents : text,
        });
        if(inputRef.current){
            inputRef.current.value = '';
        }
    }

    return (
        <ChatBoxLayout>
            <MoreIcon><Plus fill="#fff" style={{width:'30px'}}/></MoreIcon>
            <MsgBox onChange={(e) => textChange(e)} ref={inputRef}></MsgBox>
            <SendIcon onClick={sendMessage}><Send fill="#222" style={{width:'25px', height : '25px'}}/></SendIcon>
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

