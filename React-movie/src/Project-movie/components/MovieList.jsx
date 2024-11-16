import { Link } from "react-router-dom";
import styles from "../routes/Movie.module.css"; // Import your CSS module

export default function MovieList({ id, title, summary, coverImg, genres }) {
  return (
    <div className={styles.M__container}>
      <h2>
        <Link to={`/movies/${id}`}>{title}</Link>
      </h2>
      <img src={coverImg} />

      <p className={styles.summary}>
        {summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}
      </p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}
