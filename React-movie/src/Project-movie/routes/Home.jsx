import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import styles from "./Movie.module.css"; // Import your CSS module

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={styles.container}>
          {movies.map((item) => (
            <MovieList
              key={item.id}
              id={item.id}
              title={item.title}
              summary={item.summary}
              coverImg={item.medium_cover_image}
              genres={item.genres}
            />
          ))}
        </div>
      )}
    </>
  );
}
