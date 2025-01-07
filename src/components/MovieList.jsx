import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import LoadingSpinner from "./LoadingSpinner";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);

  const searchList = useLoaderData();
  const [searchParams] = useSearchParams();

  const pageNumber = parseInt(searchParams.get("page")) || 1;
  const itemsPerPage = 10;

  useEffect(() => {
    setLoading(true);
    if (searchList?.Search) {
      setMovies(searchList.Search);
      setTotalResults(searchList.totalResults);
      setLoading(false);
    } else if (searchList?.error) {
      alert(searchList.error);
      setLoading(false);
    }
  }, [searchList, pageNumber]);

  return (
    <div className="bg-gray-800">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-6">
            {movies.length > 0 ? (
              movies.map((movie) => (
                <Link
                  key={movie.imdbID}
                  to={`/movie/${movie.imdbID}`}
                  className="relative block overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 bg-gray-700"
                >
                  <div className="relative overflow-hidden bg-black rounded-t-lg h-64">
                    <img
                      src={movie.Poster}
                      alt={movie.Title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-4 rounded-b-lg">
                    <h2 className="text-lg font-semibold text-white truncate">
                      {movie.Title}
                    </h2>
                    <p className="text-gray-400 truncate">Year: {movie.Year}</p>
                    <p className="text-gray-400 truncate">Type: {movie.Type}</p>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-white col-span-full text-center">
                No results found.
              </p>
            )}
          </div>
          <Pagination totalResults={totalResults} itemsPerPage={itemsPerPage} />
        </>
      )}
    </div>
  );
};

export default MovieList;
