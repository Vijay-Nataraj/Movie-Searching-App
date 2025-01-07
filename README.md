# React Movie Search App

## Description

The React Movie Search App is a full-featured application that allows users to search for movies, view detailed information about each movie, and manage a list of favorite movies. The app integrates with the OMDB API to fetch movie data and displays search results in a user-friendly format.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Folder Structure](#folder-structure)
- [API Key](#api-key)
- [Usage](#usage)

## Features

- **Search for Movies :** Users can search for movies by entering movie titles or keywords in the search bar.
- **Filter by Type :** Users can filter search results by movie, series, or game using a dropdown filter.
- **View Movie Details :** Detailed information for each movie is available, including a larger poster, title, release year, genre, plot summary, ratings, and cast.
- **Pagination :** Handles large sets of search results by providing pagination.
- **Favorites Management :** Users can add movies to a list of favorites (this feature can be added as an enhancement).

## Technologies Used

- React
- React Router
- Axios
- Tailwind CSS
- JavaScript
- OMDB API

## Setup Instructions

#### 1. Clone the Repository

Clone the repository to your local machine:

```bash

      git clone https://github.com/Vijay-Nataraj/Movie-Searching-App.git

      cd Movie-Searching-App

```

#### 2. Install dependencies:

```bash

      npm install

```

#### 3. Set up environment variables:

```bash

    VITE_API_KEY = your_omdb_api_key_here

```

#### 4. Start the development server:

```bash

      npm run dev

```

## Folder Structure

```bash

/movie-search-app

    ├── /src
    │   ├── /components
    │   │   ├── LoadingSpinner.jsx
    │   │   ├── MovieDetails.jsx
    │   │   ├── MovieList.jsx
    │   │   ├── NotFound.jsx
    │   │   └── Pagination.jsx
    │   ├── /loaders
    │   │   ├── moviesLoader.js
    │   │   └── movieLoader.js
    │   ├── /services
    │   │   ├── instance.js
    │   │   └── moviesServices.js
    │   ├── /wrappers
    │   │   └── HeaderWrapper.jsx
    │   ├── App.css
    │   ├── App.jsx
    │   ├── index.css
    │   ├── main.jsx
    │
    ├── .env
    │
    ├── index.html
    ├── package.json
    ├── tailwind.config.js
```

## API Key

To use the OMDB API, you need an API key. You can obtain one by signing up at [OMDB API](https://www.omdbapi.com/). Once you have your API key, replace your_omdb_api_key_here in the .env file with your actual key.

## Usage

- **Search for Movies:** Enter a movie title or keyword in the search bar and click the Search button.
- **Filter Results:** Use the dropdown filter to select the type of media you want to search for (Movies, Series, or Games).
- **View Details:** Click on a movie in the search results to view detailed information about the movie.
