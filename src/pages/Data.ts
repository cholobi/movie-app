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
