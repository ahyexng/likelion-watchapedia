import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./page/Main";
import MovieDetail from "./components/MovieDetail";
import MoreMovie from "./components/MoreMovie";

function App() {
  console.log("app");
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="MovieInfo/:id"element={<MovieDetail />} /> */}
        <Route path="MovieInfo/:movieid" element={<MovieDetail />} />
        <Route path="MoreMovie/:id" element={<MoreMovie />} />
      </Routes>
    </>
  );
}

export default App;
