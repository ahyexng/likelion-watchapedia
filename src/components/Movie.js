import styled from "styled-components";

const MovieWrapper = styled.div`
  margin: 5px 5px 5px 5px;
  width: 280px;
`;
const ShowMovie = styled.div`
    horizontal = true;
    margin-left: 10px;
    overflow: hidden;
    position: relative;
`;
const Rank = styled.div`
  position: absolute;
  z-index: 4;
  margin: 5px;
  left: 0;
  border: 1px solid black;
  border-radius: 6px;
  width: 25px;
  height: 25px;

  background-color: rgba(0, 0, 0, 0.85);
  color: white;
  font-weight: bold;
  text-align: center;
  font-size: 15px;
  line-height: 25px;
`;
const MovieImg = styled.img`
  position: relative;
  width: 250px;
  height: 320px;
`;
const MovieInfo = styled.div`
  width: 250px;
  margin-top: 10px;
  padding-left: 5px;
`;
const Title = styled.div`
  width: 270px;
  font-weight: bold;
  padding-bottom: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const CountryYear = styled.div`
  font-size: 15px;
  padding-bottom: 2px;
`;
const Average = styled.div`
  font-size: 14px;
`;
const People = styled.div`
  font-size: 12px;
  padding-bottom: 2px;
`;
const Movie = ({
  id,
  year,
  title,
  poster,
  popularity,
  vote_average,
  language,
}) => {
  const cumulativeAudience = () => {
    return parseInt(popularity) >= 1000
      ? parseInt(popularity / 100) + "만명"
      : parseInt(popularity) + "명";
  };

  const changeYear = () => {
    return year.substr(0, 4);
  };

  const changeCountry = () => {
    switch (language) {
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
      <MovieWrapper>
        <ShowMovie>
          <Rank>{id}</Rank>
          <MovieImg
            src={"https://image.tmdb.org/t/p/w500" + poster}
            alt={title}
          />
        </ShowMovie>
        <MovieInfo>
          <Title>{title}</Title>
          <CountryYear>
            {changeYear()} · {changeCountry()}
          </CountryYear>
          <Average>평균 ★ {vote_average}</Average>
          <People>
            예매율{vote_average} · 누적 관객 {cumulativeAudience()}
          </People>
        </MovieInfo>
      </MovieWrapper>
    </>
  );
};

export default Movie;
