import { useState } from "react";
import Modal from "../components/Modal";
import styled from "styled-components";
import Logo from "../assets/image/icon_logo.png";
import SearchIcon from "../assets/image/Search_icon.png";

const HeaderDv = styled.header`
  border-bottom: 1px solid #ebebeb;
`;
const HeaderList = styled.div`
  display: flex;
  margin: 0 74px 0 52px;
  justify-content: space-between;
  img {
    width: 151px;
  }
`;
const LeftNav = styled.ul`
  list-style: none;
  padding-left: 0px;
  margin-top: 15px;
`;
const RightNav = styled.ul`
  margin-left: auto;
  list-style: none;
  padding-left: 0px;
  margin-top: 11px;
`;
const LiLeft = styled.li`
  float: left;
  margin-top: ${(props) => props.topmargin || "8px"};
  margin-left: ${(props) => props.leftmargin || "23px"};
  color: ${(props) => props.fontcolor || "#7E7E7E"};
  font-size: 15.5px;
  font-weight: 500;
`;
const LiRight = styled(LiLeft)`
  margin-top: 1px;
  display: flex;
  margin-left: 20px;
`;
const LoginButton = styled.button`
  cursor: grab;
  border: none;
  background-color: white;
  color: #7e7e7e;
  height: 30px;
  width: 50px;
  font-size: 14.5px;
  padding-top: 5px;
  font-weight: 600;
  margin-top: 5px;
`;
const SignupBtn = styled.button`
  width: 80px;
  height: 32px;
  margin-top: 4px;
  padding-top: 4px;
  background-color: white;
  border-color: #b9b9bc;
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  font-size: 14.5px;
  font-weight: 600;
`;
const Serch = styled.form`
  background-color: #F5F5F7;
  width: 300px;
  height: 37px;
  margin-bottom: 0px;
  flex-direction: row;
  align-content: center;
  label {
  display: flex;
  }
  input {
    border: none;
    background-color: #F5F5F7;
    padding: 10px 0 5px 7px;
    width: 270px;
    font-size: 14.5px;
    font-weight: 600;
  }
  img {
    padding-top: 10px;
    padding-bottom: 5px;
    width: 22px;
    height: 12px
    margin-top: 9px;
    margin-left: 5px;
  } 
`;

const Header = () => {
  const [click, setClick] = useState(false);
  const onClick = () => {
    setClick(!click);
  };
  return (
    <>
      <HeaderDv>
        <HeaderList>
          <LeftNav>
            <LiLeft topmargin={"0"}>
              <img src={Logo} alt="logo" />
            </LiLeft>
            <LiLeft leftmargin={"40px"} fontcolor={"black"}>
              영화
            </LiLeft>
            <LiLeft>TV</LiLeft>
            <LiLeft>책</LiLeft>
            <LiLeft>웹툰</LiLeft>
          </LeftNav>
          <RightNav>
            <LiRight>
              <Serch>
                <label htmlFor="text">
                  <img src={SearchIcon} alt="searchicon" />
                  <input
                    id="text"
                    type="text"
                    placeholder="콘텐츠, 인물, 컬렉션, 유저를 검색해보세요."
                  />
                </label>
              </Serch>
            </LiRight>
            <LiRight>
              <LoginButton onClick={onClick}>로그인</LoginButton>
            </LiRight>
            {click && <Modal onClick={onClick} click={click} />}
            <LiRight>
              <SignupBtn>회원가입</SignupBtn>
            </LiRight>
          </RightNav>
        </HeaderList>
      </HeaderDv>
    </>
  );
};

export default Header;
