import { useState, useEffect, useRef } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const observerItem = useRef();

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
    setMovies((prev) => [...prev, ...data.results]);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const firstEntry = entries[0];
      if (firstEntry.isIntersecting) {
        setPage((prevPage) => prevPage + 1);
      } else {
        console.log("안보임");
      }
    });
    if (observerItem.current) observer.observe(observerItem.current);
    return () => {
      if (observerItem.current) observer.unobserve(observerItem.current);
    };
  }, []);

  useEffect(() => {
    fetchMovie(page);
  }, [page]);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {movies.map((movie, i) => {
          return (
            <div className="flex flex-col items-center" key={i}>
              <div>{movie.title}</div>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
            </div>
          );
        })}
      </div>
      <h1 ref={observerItem}>Load more</h1>
    </div>
  );
}

export default App;
