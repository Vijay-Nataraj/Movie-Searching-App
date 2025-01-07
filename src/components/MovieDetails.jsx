import { useLoaderData } from "react-router-dom";

const MovieDetails = () => {
  const movie = useLoaderData();

  if (movie.error) {
    return <p className="text-white">Error: {movie.error}</p>;
  }

  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/3 bg-black">
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:w-2/3 p-8 text-white">
            <h2 className="text-4xl font-semibold mb-4">{movie.Title}</h2>
            <p className="text-lg mb-2">
              <strong>Year:</strong> {movie.Year}
            </p>
            <p className="text-lg mb-2">
              <strong>Genre:</strong> {movie.Genre}
            </p>
            <p className="text-lg mb-2">
              <strong>Director:</strong> {movie.Director}
            </p>
            <p className="text-lg mb-2">
              <strong>Actors:</strong> {movie.Actors}
            </p>
            <p className="text-lg mb-2">
              <strong>Plot:</strong> {movie.Plot}
            </p>
            <p className="text-lg mb-2">
              <strong>IMDB Rating:</strong> {movie.imdbRating}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
