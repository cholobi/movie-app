export const getRecommendedMovies = () => {
  const recommendations: { url: string; id: number }[] = [
    {
      id: 1244492,
      url: `https://api.themoviedb.org/3/movie/1244492/recommendations?api_key=${
        import.meta.env.VITE_API_KEY
      }`,
    },
    {
      id: 827931,
      url: `https://api.themoviedb.org/3/movie/827931/recommendations?api_key=${
        import.meta.env.VITE_API_KEY
      }`,
    },
    {
      id: 976734,
      url: `https://api.themoviedb.org/3/movie/976734/recommendations?api_key=${
        import.meta.env.VITE_API_KEY
      }`,
    },
  ];
  return recommendations;
};


  interface Genre {
    id: number;
    name: string;
  }

export   const genres: Genre[] = [
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentary" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Family" },
    { id: 14, name: "Fantasy" },
    { id: 36, name: "History" },
    { id: 27, name: "Horror" },
    { id: 10402, name: "Music" },
    { id: 9648, name: "Mystery" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Science Fiction" },
    { id: 10770, name: "TV Movie" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "War" },
    { id: 37, name: "Western" },
  ];


