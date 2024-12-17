import { useState, useEffect } from "react";
import fetchTopMovies from "./api/fetch";

function App() {
  const [movies, setMovies] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const [page] = useState(1);
  // const [pageParams, setPageParams] = useState([1]);

  const fetchMovie = async (page) => {
    if (movies.length >= page * 20) return;
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=${page}`,
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNGQzNzBhMTI0MzIyNTQ3MjhkOTcxZDZlOTJmNDA5YyIsIm5iZiI6MTczNDQxNzQ2MS44MSwic3ViIjoiNjc2MTFjMzU4NzBjYzNjMDBmYjRmYzMwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.elj-euyDcvk-AmFkmAOeUlbnNLJNzCFx8KtMkMdeL40`,
        },
      }
    );
    const data = await response.json();
    // setPageParams((prev) => [...prev, page]);
    setMovies((prev) => [...prev, ...data.results]);
  };

  useEffect(() => {
    fetchMovie(page);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {movies.map((movie) => {
          return (
            <div className="flex flex-col items-center" key={movie.id}>
              <div>{movie.title}</div>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
