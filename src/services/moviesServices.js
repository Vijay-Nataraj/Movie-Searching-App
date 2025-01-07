import instance from "./instance";

const moviesServices = {
  getMovieBySearch: async (searchQuery = "movie", type = "movie", page = 1) => {
    try {
      const response = await instance.get("/", {
        params: {
          s: searchQuery,
          type,
          page,
        },
      });
      if (response.data.Response === "True") {
        return response.data;
      } else {
        throw new Error("No movies found.");
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
      return { error: error.message };
    }
  },
  getMovieDetails: async (movieId) => {
    try {
      const response = await instance.get("/", {
        params: { i: movieId },
      });
      if (response.data.Response === "True") {
        return response.data;
      } else {
        throw new Error("Movie not found.");
      }
    } catch (error) {
      console.error("Error fetching movie details:", error);
      return { error: error.message };
    }
  },
};

export default moviesServices;
