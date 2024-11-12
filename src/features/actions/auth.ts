import axios from "axios";

const TMDB_API_KEY = import.meta.env.VITE_API_KEY;

export const logout = async (sessionId: string) => {
  try {
    const response = await axios.delete(
      `https://api.themoviedb.org/3/authentication/session`,
      {
        params: {
          api_key: TMDB_API_KEY,
        },
        data: {
          session_id: sessionId,
        },
      }
    );

    if (response.status === 200) {
      // Successfully logged out on TMDb side, clear session ID locally
      localStorage.removeItem("sessionId");
      localStorage.removeItem("user");

      return true;
    }
  } catch (error) {
    console.error("Error logging out", error);
    return false;
  }
};
