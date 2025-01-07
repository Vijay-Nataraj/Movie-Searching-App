import { Link, useSearchParams } from "react-router-dom";

const Pagination = ({ totalResults, itemsPerPage }) => {
  const [searchParams] = useSearchParams();

  const searchQuery = searchParams.get("s") || "movie";
  const type = searchParams.get("type") || "movie";
  const pageNumber = parseInt(searchParams.get("page")) || 1;
  const totalPages = Math.ceil(totalResults / itemsPerPage);

  const getPageLinks = () => {
    let pages = [];

    if (pageNumber > 1) {
      pages.push(
        <Link
          key="first"
          to={`/?page=1&s=${searchQuery}&type=${type}`}
          className="inline-block rounded px-4 py-2 text-sm font-medium mx-1 bg-gray-700 text-white"
        >
          First
        </Link>
      );
    }

    let startPage = Math.max(pageNumber - 1, 1);
    let endPage = Math.min(pageNumber + 1, totalPages);

    if (startPage > 1)
      pages.push(
        <span key="start-ellipsis" className="text-white">
          ...
        </span>
      );

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <Link
          key={i}
          to={`/?page=${i}&s=${searchQuery}&type=${type}`}
          className={`inline-block rounded px-4 py-2 text-sm font-medium mx-1 ${
            pageNumber === i
              ? "bg-blue-600 text-white"
              : "bg-gray-700 text-white"
          }`}
        >
          {i}
        </Link>
      );
    }

    if (endPage < totalPages)
      pages.push(
        <span key="end-ellipsis" className="text-white">
          ...
        </span>
      );

    if (pageNumber < totalPages) {
      pages.push(
        <Link
          key="last"
          to={`/?page=${totalPages}&s=${searchQuery}&type=${type}`}
          className="inline-block rounded px-4 py-2 text-sm font-medium mx-1 bg-gray-700 text-white"
        >
          Last
        </Link>
      );
    }

    return pages;
  };

  return (
    <div className="flex justify-center my-4 p-4 rounded-lg">
      {getPageLinks()}
    </div>
  );
};

export default Pagination;
