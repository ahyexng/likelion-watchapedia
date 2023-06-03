import styled, { css } from "styled-components";

const Circle = () => {
  return (
    <>
      <FirstCircle color="blue" />
      <FirstCircle />
      <SecondCircle color="red" huge />
    </>
  );
};

const FirstCircle = styled.div`
  width: 100px;
  height: 100px;
  background: ${(props) => props.color || "black"};
  border-radius: 50%;
`;

const SecondCircle = styled.div`
  width: 100px;
  height: 100px;
  background: ${(props) => props.color || "black"};
  border-radius: 50%;
  ${(props) =>
    props.huge &&
    css`
      width: 10rem;
      height: 10rem;
    `}
`;

export default Circle;
