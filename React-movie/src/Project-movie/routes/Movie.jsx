import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Movie.module.css"; // Import your CSS module

export default function Movie() {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    console.log(json);
    setMovie(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className={styles.container}>
      <img src={movie.medium_cover_image} />
      <h2>{movie.title}</h2>
      <div>Download Page{movie.url}</div>
    </div>
  );
}
