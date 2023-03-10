import './App.css';
import { Routes, Route } from "react-router-dom"
import Header from './components/header/Header';
import Home from './pages/home/home';
import MovieList from './components/movieList/movieList';
import Movie from './pages/movieDetail/movie';
import Search from './pages/search/search';

function App() {
  return (
    <div className="App">
          <Header />
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="movie/:id" element={<Movie />} />
                <Route path="movies/:type" element={<MovieList />} />
                <Route path="/search" element={<Search />} />
                <Route path="/*" element={<h1>Error Page</h1>} />
            </Routes>
    </div>
  );
}

export default App;