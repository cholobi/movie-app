# movie-app
Movie Streamer is your ultimate companion for exploring the world of movies. Discover, track, and dive into the details of your favorite films with a sleek and user-friendly app designed to bring the best of cinema directly to you.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Libraries Used](#libraries-used)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Features
- **Browsing Movies**: Effortlessly explore a vast collection of movies, complete with detailed information on each title.
- **Watching Trailers**: Watch trailers to get a sneak peek before diving into a full movie experience.
- **Filtering Options**: Narrow down your search by applying filters such as genre, rating, release year, and more, to find the perfect movie match.
- **Search Functionality**: Quickly find specific movies by entering keywords or titles, with real-time search suggestions.
- **User Authorization**: Secure login and logout functionality to personalize the user experience, with protected routes for added security.
- **Personalized Watchlist**: Users can add favorite movies to a watchlist, making it easy to save titles to view later.
- **Responsive Design**: Enjoy a seamless experience on both desktop and mobile, thanks to a fully responsive design.

## Getting Started

1.Clone the repository:
    
   git clone https://github.com/cholobi/movie-app.git
   
2.Navigate into the project directory:

   cd movie-app

3.Create a .env file in the root directory.


4.Add your TMDB API key to the .env file:
 
   VITE_APP_API_KEY=your_tmdb_api_key

5.Install dependencies:

   npm install

6.Run the app:

   npm run dev


## Libraries Used
- **Redux**: A predictable state container for JavaScript apps. Redux is used for managing global application state, allowing the app to maintain a consistent state and enable easy updates to UI components based on user interactions. It helps manage and centralize the state of the app in a single store.
- **Redux Toolkit**: A set of tools and best practices designed to simplify Redux development. It provides utilities to reduce boilerplate, such as createSlice for defining reducers and actions, and createAsyncThunk for handling async logic. Redux Toolkit is designed to make working with Redux easier, faster, and less error-prone.
- **React Router Dom**: A library for routing and navigation in React apps. React Router allows users to navigate among different views in the app, maintain the browser's history stack, and update the URL accordingly. It provides a declarative way to define routes in a React app and supports features like nested routing and route protection.
- **React toastify**: A library for displaying toast notifications in React apps. React Toastify makes it easy to show brief, non-blocking messages (e.g., success, error, info) to users. It provides customization options such as auto-hide duration, positioning, and transition effects.
- **Tailwind Css**: A utility-first CSS framework for rapidly building custom designs without writing custom CSS. With Tailwind CSS, developers can apply predefined classes directly to HTML elements, making it faster to create responsive layouts and clean designs. It is used for styling the app, offering flexibility and control over the look and feel of the application.


## API Documentation
- **TMDB API**:Used to fetch movie data.
- **Get Movies:**:https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY


## Known Issues
- **Unable to Load Assets in Header Component:** Some assets might not be loading correctly in the header component. This may require checking the asset paths or the way assets are imported into the component.
- **React Router DOM Version Bugs:** The current version of React Router DOM may cause some bugs, particularly with routing functionality. If you encounter issues, consider updating to a stable version or checking for open issues on the library's GitHub page.
- **Bug in Filtering Data with API Endpoint:** Filtering data with the API endpoint is not working as expected. This could be due to incorrect query parameters or an issue with the backend response. Investigating the endpoint and adjusting the filters might resolve the issue.



