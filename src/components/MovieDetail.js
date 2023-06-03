import { useParams, Link } from "react-router-dom";
// import { MovieData } from "../assets/MovieData";
import Header from "../components/Header";
import styled from "styled-components";
import { HiPlus } from "react-icons/hi";
import { RiPencilFill } from "react-icons/ri";
import { IoEyeSharp } from "react-icons/io5";
import { MdMoreHoriz } from "react-icons/md";
import { useState, useEffect } from "react";
import { topRated } from "../atom/topRated";
import { useRecoilValue } from "recoil";
import axios from "axios";

const Back = styled.div`
  background-color: pink;
  height: 300px;
`;
const Rank = styled.div`
  background-color: pink;
  height: 27px;
  display: flex;
  flex-direction: row;
`;
const RankUl = styled.ul`
  backgrorund-color: pink;
  list-style: none;
  margin: 0;
  padding-left: 15px;
  font-size: 14px;
  color: #8c8d94;
  li {
    float: left;
    margin-left: 10px;
    p {
      float: right;
      margin: 0 0 0 5px;
      color: white;
    }
  }
`;
const PosterImgBox = styled.div`
  height: 240px;
  margin-left: 17%;
  margin-top: 0;
`;
const PosterImg = styled.img`
  height: 100%;
  border: solid 1px #e7e7e7;
  border-radius: 5px;
`;
const TitleBox = styled.div`
  margin: 17px 0 0 440px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.p`
  font-size: 34px;
  font-weight: 800;
  margin: 0;
`;
const TitleInfo = styled.p`
  font-size: 16.5px;
  margin: 0 0 13px 0;
  color: #7f7f7f;
`;
const Average = styled.div`
  width: 770px;
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
`;
const AverageP = styled.p`
  font-size: 17.5px;
  margin: 10px 0 8px 0;
  font-weight: 500;
`;
const TitleLast = styled.div`
  display: flex;
  width: 800px;
  height: 100px;
  border-bottom: 1px solid #eeeeee;
`;
const Scope = styled.div`
  width: 245px;
`;
const Evaluation = styled.p`
  margin: 0;
  text-align: center;
  font-size: 12.5px;
  color: #787878;
`;
const ScopeStar = styled.p`
  text-align: center;
  font-size: 40px;
  margin: 0;
  color: #eeeeee;
  letter-spacing: -3px;
`;
const ScopeBox = styled.div`
  margin: 20px 0 20px 0;
  border-right: 1px solid #eeeeee;
`;
const ScopeMore = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;
const ScopeMoreBtn = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: white;
  height: 40px;
  font-size: 14.5px;
  font-weight: 500;
  margin-right: 20px;
  padding-bottom: 4px;
  .icon {
    padding-right: 7px;
    padding-bottom: 4px;
  }
`;
const BasicBox = styled.div`
  background-color: #f8f8f8;
  height: auto;
  display: flex;
  flex-direction: column;
`;
const BasicInfo = styled.div`
  background-color: white;
  height: auto;
  width: 635px;
  margin: 30px 0 0 250px;
  border-radius: 7px;
  border: 1px solid #eeeeee;
`;
const BasicBtn = styled.button`
  border: none;
  float: right;
  margin: 20px 20px 0 0;
  font-size: 16px;
  background-color: white;
  color: #ff5081;
  font-weight: 600;
`;
const MovieBasic = styled.p`
  &: nth-child(2) {
    width: 140px;
    font-size: 20px;
    font-weight: 800;
    margin: 20px 0 18px 25px;
  }
  &: last-child {
    margin-top: 10px;
    padding-bottom: 20px;
    border-bottom: 1px solid #eeeeee;
  }
  margin: 0 10px 5px 25px;
  font-size: 16px;
`;
const DivisionLine = styled.div`
  border-top: 1px solid #eeeeee;
  margin: 20px 20px;
}
`;
const RecoHeader = styled.p`
  margin: 10px 25px;
  font-size: 20px;
  font-weight: 900;
`;
const RecoMovie = styled.div`
  width: 635px;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const TopRatedh = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 150px;
  height: 270px;
`;
const RateImg = styled.img`
  width: 130px;
  height: 180px;
  margin: auto;
  margin-bottom: 10px;
  border-radius: 5px;
`;
const RateP = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0 0 2px 10px;
  color: ${(props) => props.fontColor};
  font-size: ${(props) => props.fontSize};
  font-weight: 500;
  text-overflow: ellipsis;
`;

const MovieDetail = ({ click }) => {
  const [movie, setMovie] = useState([]);
  const { movieid } = useParams();
  const topRateAtom = useRecoilValue(topRated);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + process.env.REACT_APP_API_KEY,
    },
  };

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieid}?language=ko`, options)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [movieid]);

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

  const cumulativeAudience = () => {
    return parseInt(movie.popularity) >= 10000
      ? parseInt(movie.popularity) / 10000 + "만명"
      : parseInt(movie.popularity) + "명";
  };

  return (
    <>
      <Header LoginButton={click}></Header>
      <Back></Back>
      <Rank>
        <PosterImgBox>
          <PosterImg
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          />
        </PosterImgBox>
        <RankUl>
          <li>
            예매 순위{" "}
            <p>
              {movie.id}위({movie.vote_average})
            </p>
          </li>
          <li>
            누적관객 <p>{cumulativeAudience()}</p>
          </li>
        </RankUl>
      </Rank>
      <TitleBox>
        <Title>{movie.title}</Title>
        <TitleInfo>
          {movie.release_date} •{" "}
          {movie.genres && movie.genres.map((item) => `${item.name} `)} •{" "}
          {changeCountry()}
        </TitleInfo>
        <Average>
          <AverageP>평균 ★{movie.vote_average}</AverageP>
        </Average>
        <TitleLast>
          <Scope>
            <ScopeBox>
              <Evaluation>평가하기</Evaluation>
              <ScopeStar>★★★★★</ScopeStar>
            </ScopeBox>
          </Scope>
          <ScopeMore>
            <ScopeMoreBtn>
              <HiPlus className="icon" size="24" />
              보고싶어요
            </ScopeMoreBtn>
            <ScopeMoreBtn>
              <RiPencilFill className="icon" size="24" />
              코멘트
            </ScopeMoreBtn>
            <ScopeMoreBtn>
              <IoEyeSharp className="icon" size="24" />
              보는중
            </ScopeMoreBtn>
            <ScopeMoreBtn>
              <MdMoreHoriz className="icon" size="24" />
              더보기
            </ScopeMoreBtn>
          </ScopeMore>
        </TitleLast>
      </TitleBox>
      <BasicBox>
        <BasicInfo>
          <Link to={`/MoreMovie/${movieid}`} state={{ moviedata: movie }}>
            <BasicBtn>더보기</BasicBtn>
          </Link>
          <MovieBasic>기본 정보</MovieBasic>
          <MovieBasic>{movie.title}</MovieBasic>
          <MovieBasic>
            {changeCountry()} •{" "}
            {movie.genres && movie.genres.map((item) => `${item.name} `)}
          </MovieBasic>
          <MovieBasic>
            {movie.runtime}분 • {movie.release_date}{" "}
          </MovieBasic>
          <MovieBasic>{movie.overview}</MovieBasic>
          <DivisionLine />
          <RecoHeader>추천 작품</RecoHeader>
          <RecoMovie>
            {topRateAtom &&
              topRateAtom.map((topRate, index) => {
                return (
                  <Link
                    to={`/MovieInfo/${topRate.id}`}
                    key={index}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <TopRatedh>
                      <RateImg
                        src={`https://image.tmdb.org/t/p/w200${topRate.poster_path}`}
                      ></RateImg>
                      <RateP>{topRate.title}</RateP>
                      <RateP fontColor={"#787878"} fontSize={"14px"}>
                        평균 ★ {topRate.vote_average}
                      </RateP>
                      <RateP fontColor={"#A9A9A9"} fontSize={"13px"}>
                        영화
                      </RateP>
                    </TopRatedh>
                  </Link>
                );
              })}
          </RecoMovie>
        </BasicInfo>
      </BasicBox>
    </>
  );
};

export default MovieDetail;
