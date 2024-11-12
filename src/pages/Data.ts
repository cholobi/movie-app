import { Genre, Rating, Year } from "../types/Movie";

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

export const genres: Genre[] = [
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

export const rating: Rating[] = [
  { id: 9, rate: "9+" },
  { id: 8, rate: "8+" },
  { id: 7, rate: "7+" },
  { id: 6, rate: "6+" },
  { id: 5, rate: "5+" },
  { id: 4, rate: "4+" },
  { id: 3, rate: "3+" },
  { id: 2, rate: "2+" },
  { id: 1, rate: "1+" },
];

export const year: Year[] = [
  { id: 27, year: "2024-2024" },
  { id: 25, year: "2023-2023" },
  { id: 20, year: "2020-2024" },
  { id: 12, year: "2010-2024" },
  { id: 16, year: "2010-2019" },
  { id: 35, year: "2000-2009" },
  { id: 80, year: "1990-1999" },
  { id: 99, year: "1980-1989" },
  { id: 18, year: "1970-1979" },
  { id: 10751, year: "1950-1969" },
  { id: 14, year: "1900-1949" },
];

interface SortOption {
  value: string;
  label: string;
}

interface SortOption {
  id: number;
  value: string;
  label: string;
}

export const sortOptions: SortOption[] = [
  { id: 1, value: "popularity.desc", label: "Most Popular" },
  { id: 2, value: "popularity.asc", label: "Least Popular" },
  { id: 3, value: "release_date.desc", label: "Newest Releases" },
  { id: 4, value: "release_date.asc", label: "Oldest Releases" },
  { id: 5, value: "revenue.desc", label: "Highest Grossing" },
  { id: 6, value: "revenue.asc", label: "Lowest Grossing" },
  { id: 7, value: "vote_average.desc", label: "Highest Rated" },
  { id: 8, value: "vote_average.asc", label: "Lowest Rated" },
  { id: 9, value: "original_title.asc", label: "Title A-Z" },
  { id: 10, value: "original_title.desc", label: "Title Z-A" },
];
