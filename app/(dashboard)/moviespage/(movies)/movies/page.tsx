import Link from "next/link";

// Fake movie data (replace with an API later)
const movies = [
  { id: 1, title: "Inception", year: 2010 },
  { id: 2, title: "Interstellar", year: 2014 },
  { id: 3, title: "The Dark Knight", year: 2008 },
];

export default function MoviesPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Movies List</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link href={`/movies/${movie.id}`}>
              {movie.title} ({movie.year})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
