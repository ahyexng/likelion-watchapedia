// import {DATA} from "../assets/Data";
import Movie from "../components/Movie";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Wrapper = styled.div`
  margin-left: 50px;
  margin-right: 65px;
`;
const ShowMovie = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  overflow: auto;
  white-space: nowrap;
`;

const MovieList = ({ data }) => {
  return (
    <>
      <Wrapper>
        <ShowMovie>
          {data &&
            data.map((data, index) => {
              index += 1;
              return (
                <Link
                  to={`/MovieInfo/${data.id}`}
                  key={index}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Movie
                    movie_id={data.id}
                    year={data.release_date}
                    language={data.original_language}
                    vote_average={data.vote_average}
                    popularity={data.popularity}
                    title={data.title}
                    poster={data.poster_path}
                  ></Movie>
                </Link>
              );
            })}
        </ShowMovie>
      </Wrapper>
    </>
  );
};

export default MovieList;
