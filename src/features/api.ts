import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://api.themoviedb.org/3/",
  // credentials: "include",
});

export const api = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: ["movies"],
  endpoints: (_builder) => ({}),
});
