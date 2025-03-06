import Search from './components/Search';
import Spinner from './components/Spinner';
import { use, useEffect, useState } from 'react';

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
};
function App() {
  const [errorMsg, setErrorMsg] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchMovies = async () => {
    setIsLoading(true);
    setErrorMsg('');
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?include_adult=true&include_video=true&language=en-US&page=1&sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);
      if (response.ok) {
        const data = await response.json();
        if (data.Response == false) {
          setErrorMsg(data.Error || 'Error fetching Movies. Try again later.');
          setMovies([]);
          return;
        }
        setMovies(data.results || []);
      }
    } catch (error) {
      console.error(error);
      setErrorMsg('Error fetching Movies. Try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <h1>
            <img src="/src/assets/hero.png" alt="hero" />
            Find <span className="text-gradient">Movies</span> That you Love
            Without The Hassle
          </h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>
        <section className="all-movies">
          <h2 className="mt-[40px]">All Movies</h2>
          {isLoading ? (
            <Spinner />
          ) : errorMsg ? (
            <p className="text-red-500">{errorMsg}</p>
          ) : (
            <ul>
              {movies.map((movie) => (
                <li key={movie.id} className="movie-card">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <div>
                    <h3>{movie.title}</h3>
                    <p>{movie.overview}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
}

export default App;
