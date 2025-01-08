import { useState } from "react";
import { Outlet, useNavigate, createSearchParams } from "react-router-dom";

const HeaderWrapper = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [type, setType] = useState("movie");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate({
      pathname: "/",
      search: createSearchParams({ s: searchQuery, type }).toString(),
    });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <nav className="flex justify-around items-center border-b border-gray-800/75 bg-slate-900 p-4">
        <a
          href="/"
          className="text-3xl text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text"
        >
          React Movie App
        </a>
        <div>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onKeyPress={handleKeyPress}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="rounded-md w-80 h-8 pl-5 mr-2"
          />
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="rounded-md h-8 text-center mr-2"
          >
            <option value="movie">Movies</option>
            <option value="series">Series</option>
            <option value="game">Games</option>
          </select>
          <button
            onClick={handleSearch}
            className="rounded-md h-8 bg-blue-600 text-white px-4 hover:bg-blue-800"
          >
            Search
          </button>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default HeaderWrapper;
