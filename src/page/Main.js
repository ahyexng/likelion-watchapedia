import styled from "styled-components";
import MovieList from "../components/MovieList";
// import { Link } from "react-router-dom";
import Header from "../components/Header";
import axios from "axios";
import { useState, useEffect } from "react";
import { topRated } from "../atom/topRated";
import { useRecoilState } from "recoil";

const Section = styled.div`
  margin: 0;
  height: 700px;
  p {
    font-weight: 900;
    margin: 38px 0 5px 76px;
    font-size: 23px;
  }
`;

const Main = ({ click }) => {
  const [data, setdata] = useState();
  const [recomovie, setrecomovie] = useRecoilState(topRated);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + process.env.REACT_APP_API_KEY,
    },
  };

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?language=ko&page=1",
        options
      )
      .then((response) => {
        setdata(response.data.results);
      })
      .catch((error) => {
        console.log("에러", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?language=ko&page=1",
        options
      )
      .then((response) => {
        setrecomovie(response.data.results);
      })
      .catch((error) => {
        console.log("에러", error);
      });
  }, []);

  return (
    <>
      <Header LoginButton={click}></Header>
      <Section>
        <p>박스오피스 순위</p>
        <MovieList data={data} />
        {/* <Link to="/MovieList"></Link> */}
      </Section>
    </>
  );
};

export default Main;
