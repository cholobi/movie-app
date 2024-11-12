import { api } from "../api";

export interface Movie {
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
    
  }),
});

export const { useGetPopularMoviesQuery ,useGetTrendingMoviesQuery} = MovieApi;
