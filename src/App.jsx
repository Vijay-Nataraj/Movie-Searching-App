import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HeaderWrapper from "./wrappers/HeaderWrapper";
import MovieList from "./components/MovieList";
import moviesLoader from "./loaders/moviesLoader";
import MovieDetails from "./components/MovieDetails";
import movieLoader from "./loaders/movieLoader";
import LoadingSpinner from "./components/LoadingSpinner";
import NotFound from "./components/NotFound";

const routes = [
  {
    path: "/",
    element: <HeaderWrapper />,
    children: [
      {
        index: true,
        element: <MovieList />,
        loader: moviesLoader,
        hydrateFallbackElement: <LoadingSpinner />,
      },
      {
        path: "movie/:movieId",
        element: <MovieDetails />,
        loader: movieLoader,
        hydrateFallbackElement: <LoadingSpinner />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
});

const App = () => {
  return (
    <div>
      <RouterProvider
        router={router}
        future={{
          v7_startTransition: true,
        }}
      />
    </div>
  );
};

export default App;
