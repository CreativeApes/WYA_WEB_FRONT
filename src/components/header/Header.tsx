import styled from "styled-components";
import { color } from "../../theme";
import "./Header.style.css";

const Header = () =>{

    return (
        <HeaderLayout>
            <BackIcon>
                <BackIconImg src={require("../../asset/arrow.png")}/>
            </BackIcon>
            <UserName>테스터</UserName>
            <MoreIcon>
                <MoreIconImg src={require("../../asset/menu.png")}/>
            </MoreIcon>
        </HeaderLayout>
    )
}


const HeaderLayout = styled.div`
    background-color: ${color.background};
    position: absolute;
    display: flex;
    flex-direction : row;

    height: 60px;
    width: 100vw;
`;
const BackIcon = styled.div`
    height: 60px;
    width: 60px;
    display: flex;
    justify-content : center;
    align-items : center;
`;
const BackIconImg = styled.img`
    height: 20px;
    width: 20px;
`;
const UserName = styled.div`
    height: 60px;
    width: calc(100vw - 120px);
    display: flex;
    justify-content : start;
    align-items : center;
    font-weight : 700;
`;
const MoreIcon = styled.div`
    height: 60px;
    width: 60px;
    display: flex;
    justify-content : center;
    align-items : center;
`;
const MoreIconImg = styled.img`
    height: 30px;
    width: 30px;
`;
export default Header;

