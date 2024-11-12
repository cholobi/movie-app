import axios from "axios";

export const authenticateWithTMDB = async () => {
  const token = getRequestToken();
  window.location.href = `https://www.themoviedb.org/authenticate/${token}?redirect_to=localhost:5173/callback`;
};

export const createSession = async (token: any) => {
  const response = await axios.post(
    `https://api.themoviedb.org/3/authentication/session/new?api_key=${
      import.meta.env.VITE_API_KEY
    }`,
    { request_token: token }
  );
  return response.data.session_id;
};
function getRequestToken() {
  throw new Error("Function not implemented.");
}
