import { AuthToken } from "../../types/authTypes";
import { api } from "../api";
const sessionId = localStorage.getItem("sessionId");
const accountId = localStorage.getItem("userId");
export const AuthApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getRequestToken: builder.query<AuthToken[], void>({
      query: () =>
        `authentication/token/new?api_key=${import.meta.env.VITE_API_KEY}`,
      providesTags: ["movies"],
    }),
    getUser: builder.query<AuthToken[], void>({
      query: () =>
        `account?api_key=${
          import.meta.env.VITE_API_KEY
        }&session_id=${sessionId}`,
      providesTags: ["movies"],
    }),

    getMovieDetail: builder.query<AuthToken[], void>({
      query: (movie_id) =>
        `movie/${movie_id}?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US`,
      providesTags: ["movies"],
    }),

    getWatchListMovies: builder.query<AuthToken[], void>({
      query: () =>
        `https://api.themoviedb.org/3/account/${accountId}/watchlist/movies?api_key=${
          import.meta.env.VITE_API_KEY
        }&session_id=${sessionId}&language=en-US&sort_by=created_at.asc&page=1`,
      transformResponse: (response: AuthToken) => response.results,
      providesTags: ["movies"],
    }),
  }),
});

export const {
  useLazyGetRequestTokenQuery,
  useLazyGetUserQuery,
  useGetWatchListMoviesQuery,
  useGetMovieDetailQuery,
  useGetUserQuery
} = AuthApi;
