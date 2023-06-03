import { useNavigate, useLocation } from "react-router-dom";
import Header from "../components/Header";
import styled from "styled-components";
import Backicon from "../assets/image/icon_back.png";
const MoreBox = styled.div`
  height: 73px;
  margin: 8px 0 0 13px;
  p {
    font-size: 22.5px;
    font-weight: 800;
    margin-top: 10px;
    margin-left: 8px;
  }
`;
const Backbtn = styled.button`
  border: none;
  background-color: white;
`;
const Backimg = styled.img`
  height: 18px;
  width: 18px;
`;
const MoreInfo = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid #e3e3e3;
`;
const InfoBox = styled.div`
  width: 730px;
  margin-top: 5px;
`;
const InfoDl = styled.dl`
  border-bottom: 1px solid #eeeeee;
  dt {
    float: left;
    color: #797979;
    font-weight: 500;
  }
  dd {
    margin-left: 215px;
    margin-bottom: 14px;
    font-size: 15.5px;
    font-weight: 500;
  }
`;
const InfoLastDl = styled(InfoDl)`
  dt {
    float: none;
  }
  dd {
    margin: 10px 10px 14px 0;
    line-height: 24px;
  }
`;

const MoreMovie = ({ click }) => {
  const location = useLocation();
  const movie = location.state.moviedata;
  const navigate = useNavigate();
  const ClickBackBtn = () => {
    navigate(-1);
  };

  const changeCountry = () => {
    switch (movie.original_language) {
      case "en":
        return "미국";
      case "ko":
        return "한국";
      case "fi":
        return "핀란드";
      case "zh":
        return "중국";
      case "fr":
        return "프랑스";
    }
  };
  return (
    <>
      <Header LoginButton={click}></Header>
      <MoreBox>
        <Backbtn onClick={ClickBackBtn}>
          <Backimg src={Backicon} />
        </Backbtn>
        <p>기본 정보</p>
      </MoreBox>
      <MoreInfo>
        <InfoBox>
          <InfoDl>
            <dt>원제</dt>
            <dd>{movie.original_title}</dd>
          </InfoDl>
          <InfoDl>
            <dt>제작일</dt>
            <dd>{movie.release_date}</dd>
          </InfoDl>
          <InfoDl>
            <dt>국가</dt>
            <dd>{changeCountry()}</dd>
          </InfoDl>
          <InfoDl>
            <dt>장르</dt>
            <dd>
              {movie.genres && movie.genres.map((item) => `${item.name} `)}
            </dd>
          </InfoDl>
          <InfoDl>
            <dt>상영시간</dt>
            <dd>{movie.runtime}분</dd>
          </InfoDl>
          <InfoLastDl>
            <dt>내용</dt>
            <dd>{movie.overview}</dd>
          </InfoLastDl>
        </InfoBox>
      </MoreInfo>
    </>
  );
};

export default MoreMovie;
