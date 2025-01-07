import moviesServices from "../services/moviesServices";

const movieLoader = async ({ params }) => {
  const movieId = params.movieId;

  try {
    const response = await moviesServices.getMovieDetails(movieId);
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error loading movie details:", error);
    return { error: error.message };
  }
};

export default movieLoader;
