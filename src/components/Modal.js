import styled from "styled-components";
import Logo from "../assets/image/icon_logo.png";
import Kakao from "../assets/image/icon_kakao.png";
import Google from "../assets/image/icon_google.png";
import Twitter from "../assets/image/icon_twitter.png";
import Apple from "../assets/image/icon_apple.png";
import Line from "../assets/image/icon_line.png";

const Login = styled.div`
  width: 375px;
  height: 634px;
  border-radius: 10px;
  margin: auto;
  border-style: solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translate(-100%, 5%);
  z-index: 999;
  position: absolute;
  background-color: white;
  img {
    width: 200px;
    margin-top: 8px;
  }
  p {
    margin: 30px 0 0 0;
    font-size: 18px;
    font-weight: 900;
  }
`;
const CloseBtn = styled.button`
  border: none;
  align-self: baseline;
  margin: 7px 5px 0 8px;
  background-color: white;
  font-size: 18px;
  cursor: grab;
`;
const Input = styled.form`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    width: 325px;
    height: 33px;
    border-radius: 5px;
    margin: 4px 0 5px 6px;
    padding: 7px 0 4px 10px;
    background-color: #f5f5f5;
    border: 0;
    font-size: 16.5px;
  }
  button {
    width: 335px;
    height: 44px;
    border-radius: 5px;
    margin: 15px 0 5px 0;
    background-color: #ff2f6e;
    color: white;
    border: 0;
    font-size: 17px;
    padding-top: 4px;
    font-weight: bold;
  }
  p {
    margin: 18px 0 15px 0;
    color: #ff2f6e;
    font-size: 16px;
    font-weight: 500;
  }
`;
const Lost = styled.div`
  display: flex;
  margin-bottom: 10px;
  p: first-child {
    color: #8c8c8c;
    font-size: 15px;
    font-weight: 600;
    margin-top: 0px;
  }
  p: nth-child(2n) {
    margin-left: 5px;
    color: #ff2f6e;
    font-weight: 600;
    font-size: 15.5px;
    margin-top: 0px;
  }
`;
const HrLine = styled.div`
  display: flex;
  align-items: center;
  margin-top: 18px;
`;
const Hr = styled.hr`
  flex: auto;
  width: 150px;
  border: none;
  height: 1px;
  background-color: #d8d8d8;
`;
const HrText = styled.span`
  padding: 0 10px;
  font-size: 13px;
  color: #a0a0a0;
  font-weight: 600;
`;
const IconDv = styled.div`
  height: 80px;
  width: 338px;
  margin-top: 30px;
  display: flex;
`;
const IconImg = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 15px;
  margin-left: 5px;
`;
const LoginBottom = styled.div`
  margin: 13px 0 0 0;
  background-color: #f7f7f7;
  width: 340px;
  height: 65px;
  p {
    padding: 10px 13px 10px 13px;
    margin: 0;
    font-size: 15.5px;
    font-weight: 550;
    color: #8f8f8f;
    line-height: 23px;
    text-align: center;
  }
`;

const Modal = (props) => {
  return (
    <>
      <Login>
        <CloseBtn onClick={props.onClick}>X</CloseBtn>
        <img src={Logo} alt="logo" />
        <p>로그인</p>
        <Input>
          <input type="text" placeholder="이메일" />
          <input placeholder="비밀번호" type="Password" />
          <button type="submit" className="login_btn">
            로그인
          </button>
          <p>비밀번호를 잊어버리셨나요?</p>
        </Input>
        <Lost>
          <p>계정이 없으신가요?</p>
          <p>회원가입</p>
        </Lost>
        <HrLine>
          <Hr />
          <HrText>OR</HrText>
          <Hr />
        </HrLine>
        <IconDv>
          <IconImg src={Kakao} alt="icon_kakao" />
          <IconImg src={Google} alt="icon_google" />
          <IconImg src={Twitter} alt="icon_twitter" />
          <IconImg src={Apple} alt="icon_apple" />
          <IconImg src={Line} alt="icon_line" />
        </IconDv>
        <LoginBottom>
          <p>
            TIP.왓챠 계정이 있으신가요? 왓챠와 왓챠피디아는 같은 계정을
            사용해요.
          </p>
        </LoginBottom>
      </Login>
    </>
  );
};

export default Modal;
