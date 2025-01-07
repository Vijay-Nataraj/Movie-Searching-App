import moviesServices from "../services/moviesServices";

const moviesLoader = async ({ request }) => {
  const url = new URL(request.url);
  const searchQuery = url.searchParams.get("s") || "movie";
  const type = url.searchParams.get("type") || "movie";
  const page = url.searchParams.get("page") || 1;

  try {
    const response = await moviesServices.getMovieBySearch(
      searchQuery,
      type,
      page
    );
    return response;
  } catch (error) {
    console.error("Error loading movies:", error);
    return { error: error.message };
  }
};

export default moviesLoader;
