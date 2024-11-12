import { api } from "../api";

export interface Movie {
  release_date: any;
  vote_average: any;
  id: string | undefined;
  overview: any;
  poster_path: string;
  title: string;
}

export interface MovieApiResponse {
  results: Movie[];
}

export const MovieApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTrendingMovies: builder.query<Movie[], void>({
      query: () => `trending/movie/day?api_key=${import.meta.env.VITE_API_KEY}`,
      transformResponse: (response: MovieApiResponse) => response.results,
      providesTags: ["movies"],
    }),
    getPopularMovies: builder.query<Movie[], void>({
      query: () => `movie/popular?api_key=${import.meta.env.VITE_API_KEY}`,
      transformResponse: (response: MovieApiResponse) => response.results,
      providesTags: ["movies"],
    }),
    getLatestMovies: builder.query<Movie[], void>({
      query: () => `movie/now_playing?api_key=${import.meta.env.VITE_API_KEY}`,
      transformResponse: (response: MovieApiResponse) => response.results,
      providesTags: ["movies"],
    }),
    getAllMovies: builder.query<Movie[], void>({
      query: (_pageNo) =>
        `discover/movie?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US&sort_by=popularity.desc&page=${1}`,
      transformResponse: (response: MovieApiResponse) => response.results,
      providesTags: ["movies"],
    }),
    getFilterMovies: builder.query<Movie[], void>({
      query: (_movieName) =>
        `discover/movie?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US&sort_by=popularity.desc&page=${1}`,
      transformResponse: (response: MovieApiResponse) => response.results,
      providesTags: ["movies"],
    }),
  }),
});

export const {
  useGetPopularMoviesQuery,
  useGetTrendingMoviesQuery,
  useGetLatestMoviesQuery,
  useGetAllMoviesQuery,
  useLazyGetFilterMoviesQuery,
} = MovieApi;
