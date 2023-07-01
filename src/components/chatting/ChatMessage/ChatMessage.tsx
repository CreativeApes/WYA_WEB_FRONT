import styled from "styled-components";
import { color } from "../../../theme";
import { ChangeEvent, useRef, useState } from "react";

interface chatProps {
    isUser : boolean;
    contents : string;
}

const ChatMessage = (props:chatProps) =>{
    const inputRef = useRef<HTMLInputElement>(null);
    

    return (
        <MessageLayout isUser={props.isUser}>
            <LeftUserImg isUser={props.isUser}><UserImg src={require("../../../asset/testImage.jpg")}/></LeftUserImg>
            <Contents isUser={props.isUser}>{props.contents}</Contents>
        </MessageLayout>
    )
}

const MessageLayout = styled.div<{isUser : boolean}>`
    display : flex;
    flex-direction : row;
    align-items : flex-end;
    width : calc(100vw - 10px);
    min-height : 30px;
    justify-content : ${({isUser}) => isUser ? `end` : `start`};
`;

const LeftUserImg = styled.div<{isUser : boolean}>`
    display : flex;
    justify-content : center;
    align-items : center;
    width : 60px;
    height : 60px;
    ${({isUser}) => isUser && `display: none`};
`;
const UserImg = styled.img`
    width : 50px;
    height : 50px;
    border-radius : 30px;

`;
const Contents = styled.div<{isUser : boolean}>`
    min-height : 30px;
    margin : 2px 5px;
    padding : 2px 5px;
    margin-left : ${({isUser})=> isUser ? `60px` : `2px`};
    max-width : calc(100vw - 60px);
    background-color : #fff;
    border-radius : 10px
`;
export default ChatMessage;

