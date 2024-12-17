import { useState, useEffect, useRef } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const observerItem = useRef();

  const fetchMovie = async (page) => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=${page}`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNGQzNzBhMTI0MzIyNTQ3MjhkOTcxZDZlOTJmNDA5YyIsInNiZiI6MTczNDQxNzQ2MS44MSwic3ViIjoiNjc2MTFjMzU4NzBjYzNjMDBmYjRmYzMwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.elj-euyDcvk-AmFkmAOeUlbnNLJNzCFx8KtMkMdeL40`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('영화 데이터를 불러오는데 실패했습니다.');
      }

      const data = await response.json();
      setMovies((prev) => [...prev, ...data.results]);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 0.1 }
    );

    if (observerItem.current) {
      observer.observe(observerItem.current);
    }

    return () => observer.disconnect();
  }, [isLoading]);

  useEffect(() => {
    fetchMovie(page);
  }, [page]);

  return (
    <div className="container mx-auto p-4">
      {error && (
        <div className="text-red-500 text-center mb-4">{error}</div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <div 
            key={movie.id} 
            className="flex flex-col items-center p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full rounded-lg"
              loading="lazy"
            />
            <h2 className="mt-2 text-lg font-semibold text-center">
              {movie.title}
            </h2>
          </div>
        ))}
      </div>

      <div ref={observerItem} className="h-20 flex items-center justify-center">
        {isLoading && <div className="text-xl">로딩 중...</div>}
      </div>
    </div>
  );
}

export default App;
