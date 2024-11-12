import axios from "axios";
import { toast } from "react-toastify";

export const addToWatchlist = async (
  accountId: any,
  sessionId: any,
  movieId: any,
  title: string
) => {
  try {
    const response = await axios.post(
      `https://api.themoviedb.org/3/account/${accountId}/watchlist`,
      {
        media_type: "movie",
        media_id: movieId,
        watchlist: true,
      },
      {
        params: {
          api_key: import.meta.env.VITE_API_KEY,
          session_id: sessionId,
        },
      }
    );

    toast(`Added ${title} to Watchlist`);
    return response.data;
  } catch (error) {
    toast.error(`Error adding to watchlist ${error}`);
    throw error;
  }
};
